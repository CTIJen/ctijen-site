import type { NextConfig } from "next";

const baseSecurityHeaders = [
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const baseCspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' https:",
  "upgrade-insecure-requests",
];

const globalSecurityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [...baseCspDirectives, "frame-src 'none'"].join("; "),
  },
  ...baseSecurityHeaders,
];

const prankPageSecurityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      ...baseCspDirectives,
      "frame-src https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    ].join("; "),
  },
  ...baseSecurityHeaders,
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: globalSecurityHeaders,
      },
      {
        source: "/sneaky-sneaky-prank-page",
        headers: prankPageSecurityHeaders,
      },
    ];
  },
};

export default nextConfig;
