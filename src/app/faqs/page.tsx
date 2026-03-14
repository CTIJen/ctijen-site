'use client';
import { PageHero, GradientRule, PageContainer, ClosingNote } from '@/components/resource-components';

export default function FAQsPage() {
  const faqs = [
    {
      q: 'What is Cyber Threat Intelligence?',
      a: "CTI is the practice of collecting, processing, analyzing, and distributing information regarding prioritized threats to relevant stakeholders. In practice, CTI analysts work with people within their org to assess assets, attack surface, and anything that could be a target. We collect information on threats to those components, pass along our assessment of risk and mitigation recommendations to relevant stakeholders in a timely manner, solicit feedback to improve our next product, and restart the cycle.",
    },
    {
      q: 'How do I get into Cyber Threat Intelligence?',
      a: "There's no single path, but if I had to describe the most common progression: it often starts with a SOC analyst role. From there, a more specialized role follows — maybe IAM engineer or Insider Threat Analyst. CTI roles often come next. Outside of your day job, I highly recommend creating your own content — a Medium blog with posts mapping intrusions to the Diamond Model, or researching an APT and writing your mitigation recommendations. This demonstrates field experience without needing an official title.",
    },
    {
      q: 'What certifications should I get?',
      a: "The annoying answer is 'it depends.' Certs show a baseline level of knowledge and can definitely help, but no set of certs guarantees a role. If you're brand new to cybersecurity, start with Security+. If you're already seasoned in cyber and ready to go deep on CTI, I'd recommend GCTI right out of the gate. For the full landscape, Paul Jerimy's Security Certification Roadmap is indispensable. Hit me up for a tailored recommendation.",
      links: [
        { label: 'Paul Jerimy Roadmap', href: 'https://pauljerimy.com/security-certification-roadmap/' },
        { label: 'View Certifications', href: '/certifications' },
      ],
    },
    {
      q: 'What resources are available to learn more?',
      a: "Well, well, well. You're never going to believe this… but I happen to have a repository right here.",
      links: [{ label: 'Trainings & Learning →', href: '/trainings' }],
    },
  ];

  return (
    <>
      <PageHero eyebrow="CTIJen Resources" title="Frequently Asked" titleEm="Questions" desc="The questions Jen gets asked most often, answered honestly." />
      <GradientRule />
      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <PageContainer>
          <div style={{ maxWidth: '760px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '5px', padding: '32px', marginBottom: '2px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 700, color: 'var(--ink)', marginBottom: '14px', lineHeight: 1.2 }}>{faq.q}</h3>
                <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
                {faq.links && (
                  <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                    {faq.links.map((link, j) => (
                      <a key={j} href={link.href} style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-dim)', textDecoration: 'none', border: '1px solid rgba(201,165,90,0.3)', borderRadius: '3px', padding: '6px 14px' }}>{link.label}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
      <ClosingNote text="Have a question that's not answered here? Send it over and I may add it to the list!" linkText="Ask a question →" linkHref="/#contact" />
    </>
  );
}