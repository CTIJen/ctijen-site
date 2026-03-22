import { NextRequest, NextResponse } from 'next/server';

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const globalForRateLimit = globalThis as typeof globalThis & {
  __contactRateLimit?: Map<string, RateLimitBucket>;
};
const rateLimitStore = globalForRateLimit.__contactRateLimit ?? new Map<string, RateLimitBucket>();
globalForRateLimit.__contactRateLimit = rateLimitStore;

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();
  const current = rateLimitStore.get(clientIp);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(clientIp, current);
  return false;
}

function redirectToContact(request: NextRequest, status: 'sent' | 'error') {
  const url = new URL('/', request.url);
  url.hash = 'contact';
  url.searchParams.set('contact', status);
  return NextResponse.redirect(url, 303);
}

function isAllowedOrigin(request: NextRequest): boolean {
  const originHeader = request.headers.get('origin');
  if (!originHeader) return true;

  try {
    const origin = new URL(originHeader);
    return [
      'ctijen.com',
      'www.ctijen.com',
      'localhost',
      '127.0.0.1',
    ].includes(origin.hostname);
  } catch {
    return false;
  }
}

function clean(value: FormDataEntryValue | null): string {
  return (typeof value === 'string' ? value : '').trim();
}

function isValidName(name: string): boolean {
  return /^[A-Za-z0-9 .,'-]{2,80}$/.test(name);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

async function sendViaResend(payload: {
  name: string;
  email: string;
  message: string;
  subject: string;
  clientIp: string;
  userAgent: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !toEmail || !fromEmail) return false;

  const text = [
    `Subject: ${payload.subject}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `IP: ${payload.clientIp}`,
    `User-Agent: ${payload.userAgent}`,
    '',
    payload.message,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: payload.subject,
      text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Resend delivery failed (${response.status}): ${errorText}`);
  }

  return response.ok;
}

async function sendViaWebhook(payload: {
  name: string;
  email: string;
  message: string;
  subject: string;
  clientIp: string;
  userAgent: string;
}) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (process.env.CONTACT_WEBHOOK_BEARER_TOKEN) {
    headers.Authorization = `Bearer ${process.env.CONTACT_WEBHOOK_BEARER_TOKEN}`;
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      type: 'contact_form_submission',
      submittedAt: new Date().toISOString(),
      ...payload,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Webhook delivery failed (${response.status}): ${errorText}`);
  }

  return response.ok;
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return new NextResponse('Invalid origin', { status: 403 });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return new NextResponse('Too many requests', { status: 429 });
  }

  const form = await request.formData();
  const honeypot = clean(form.get('bot-field'));
  if (honeypot) {
    return redirectToContact(request, 'sent');
  }

  const name = clean(form.get('name'));
  const email = clean(form.get('email'));
  const message = clean(form.get('message'));
  const subject = clean(form.get('subject')) || 'CTIJen Contact Form Submission';
  const userAgent = request.headers.get('user-agent') ?? 'unknown';

  if (
    !isValidName(name) ||
    !isValidEmail(email) ||
    message.length < 10 ||
    message.length > 4000
  ) {
    return redirectToContact(request, 'error');
  }

  const payload = { name, email, message, subject, clientIp, userAgent };
  const hasResendEnv = Boolean(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_TO_EMAIL &&
    process.env.CONTACT_FROM_EMAIL
  );
  const hasWebhookEnv = Boolean(process.env.CONTACT_WEBHOOK_URL);
  const delivered = (await sendViaResend(payload)) || (await sendViaWebhook(payload));

  if (!delivered) {
    if (!hasResendEnv && !hasWebhookEnv) {
      console.error(
        'Contact form not delivered: missing delivery configuration. Set RESEND_* or CONTACT_WEBHOOK_* environment variables.'
      );
    } else {
      console.error(
        'Contact form not delivered: provider rejected request. Check CONTACT_FROM_EMAIL domain/sender verification and API key.'
      );
    }
    return redirectToContact(request, 'error');
  }

  return redirectToContact(request, 'sent');
}
