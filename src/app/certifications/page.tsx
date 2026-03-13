'use client';
import { PageHero, GradientRule, SectionHeader, PageContainer, Tag, ClosingNote } from '@/components/resource-components';

export default function CertificationsPage() {
  const certs = [
    { name: 'Paul Jerimy Security Certification Roadmap', href: 'https://pauljerimy.com/security-certification-roadmap/', cost: 'Free', ctiSpecific: false, desc: 'The most comprehensive overview of all certifications across every cybersecurity discipline. CTI sits at the edge of Incident Handling and Pen Testing. Start here for the big picture.' },
    { name: 'SANS GCTI', href: 'https://www.giac.org/certifications/cyber-threat-intelligence-gcti/', cost: '$999 USD (cert only, ~$8,780 with course)', ctiSpecific: true, desc: 'The most comprehensive and respected CTI certification. Accredited and approved by the US DoD. A practice exam alone is $400. You get what you pay for.' },
    { name: 'EC-Council CTIA', href: 'https://iclass.eccouncil.org/our-courses/certified-threat-intelligence-analyst-ctia/#exam', cost: '$999–$3,499 USD', ctiSpecific: true, desc: 'Probably the second most common CTI certification. On-demand options start at $999.' },
    { name: 'Mandiant CTI Analysis Certification', href: 'https://cloud.google.com/learn/security/mandiant-academy-certifications?hl=en', cost: '$250 USD (cert only, prep extra)', ctiSpecific: true, desc: 'Carries serious weight in the industry. Mandiant name recognition matters and this cert reflects their standards.' },
  ];

  return (
    <>
      <PageHero
        eyebrow="CTIJen Resources"
        title="Certifi-"
        titleEm="cations"
        desc="Certs serve a real purpose in CTI — they demonstrate baseline knowledge. But they're not the whole story. Read below before you spend anything."
      />
      <GradientRule />
      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <PageContainer>
          <div style={{ background: 'var(--plum)', borderRadius: '5px', padding: '28px 32px', maxWidth: '760px', marginBottom: '48px' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Jen's take on certs</div>
            <p style={{ fontSize: '15px', color: 'rgba(250,247,242,0.7)', lineHeight: 1.8, fontWeight: 300 }}>
              Certifications are excellent at showcasing knowledge of key principles. If an employer needs to see real-world application,
              I <strong style={{ color: 'var(--cream)', fontWeight: 500 }}>highly</strong> recommend starting a Medium blog about CTI.
              Map an intrusion to the Diamond Model. Write about an APT and your mitigation recommendations. This shows field experience without needing an official title.
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(250,247,242,0.5)', lineHeight: 1.8, fontWeight: 300, marginTop: '12px', fontStyle: 'italic' }}>
              If you're just starting your cybersecurity journey, don't start with CTI certs. Hit me up for more tailored advice.
            </p>
          </div>
          <SectionHeader number={`${certs.length} certs`} title="CTI Certifications Worth Knowing" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {certs.map((cert, i) => (
              <div key={i} style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '5px', padding: '24px', display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <a href={cert.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 700, color: 'var(--ink)', textDecoration: 'none' }}>{cert.name}</a>
                    {cert.ctiSpecific && <Tag variant="advanced">CTI Cert</Tag>}
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, fontWeight: 300 }}>{cert.desc}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'var(--plum)', letterSpacing: '0.04em' }}>{cert.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>
      <ClosingNote text="Not sure where to start? Reach out and Jen will give you more tailored recommendations." linkText="Get in touch →" linkHref="/#contact" />
    </>
  );
}