'use client';
import { PageHero, GradientRule, SectionHeader, PageContainer, ClosingNote } from '@/components/resource-components';

export default function ConferencesPage() {
  const cons = [
    { name: 'DEF CON', href: 'https://defcon.org/', type: 'Major / Hacker', location: 'Las Vegas, NV', cost: '$', desc: 'Legendary hacker con. Huge variety of CTI-relevant talks, CTFs, and villages. Very informal.', jenNote: "My most favoritest con ❤️" },
    { name: 'Black Hat USA', href: 'https://www.blackhat.com/us-24/', type: 'Major / Corporate', location: 'Las Vegas, NV', cost: '$$$–$$$$', desc: 'Professional training and vendor-heavy con with CTI, malware, and red/blue track overlap.' },
    { name: 'RSA Conference', href: 'https://www.rsaconference.com/', type: 'Major / Enterprise', location: 'San Francisco, CA', cost: '$$$$', desc: 'Huge enterprise security conference. High-level CTI briefings and leadership networking.' },
    { name: 'FIRST Conference', href: 'https://www.first.org/conference/', type: 'CTI / Global IR', location: 'Rotates globally', cost: '$$$', desc: 'One of the most respected IR/CTI conferences. Strong technical and operational CTI content.' },
    { name: 'SANS CTI Summit', href: 'https://www.sans.org/cyber-security-summit/cti/', type: 'CTI-Focused', location: 'Hybrid', cost: '$$–$$$', desc: 'Top-tier intel conference with practitioner-level CTI workflows, tooling, and case studies.', jenNote: "My other most favorite. LOVE LOVE LOVE." },
    { name: 'ATT&CKcon', href: 'https://attack.mitre.org/resources/attackcon/', type: 'CTI-Focused', location: 'Free / Virtual', cost: '$', desc: "MITRE's con for adversary behavior mapping and detection engineering. Very technical and free." },
    { name: 'Virus Bulletin', href: 'https://www.virusbulletin.com/conference/', type: 'Malware / CTI', location: 'Rotates globally', cost: '$$–$$$', desc: 'Research-heavy with a mix of CTI, malware analysis, and international threat sharing.' },
    { name: 'BSides (various)', href: 'https://www.securitybsides.com/', type: 'Community / Local', location: 'Nationwide / Global', cost: '$–$$', desc: "Local, low-cost conferences often with high-quality talks. Check your city's chapter." },
    { name: 'GrrCON', href: 'https://www.grrcon.com/', type: 'Community / Hacker', location: 'Grand Rapids, MI', cost: '$$', desc: 'Midwest hacker conference with a fun, laid-back vibe. Great CTI and DFIR content.', jenNote: "Love for my Michiganders 🏒" },
    { name: 'THOTCON', href: 'https://thotcon.org/', type: 'Community / Hacker', location: 'Chicago, IL', cost: '$$', desc: 'Chicago-based infosec con with a heavy red/blue team focus. Great CTI and OSINT talks.' },
    { name: 'The Diana Initiative', href: 'https://www.dianainitiative.org/', type: 'Diversity / Hybrid', location: 'Las Vegas + Virtual', cost: '$–$$', desc: 'Diversity-focused con with a wide range of security talks including OSINT and CTI tracks.' },
    { name: 'Red Hat Summit', href: 'https://www.redhat.com/en/summit', type: 'Vendor / DevSecOps', location: 'Various + Virtual', cost: '$$–$$$', desc: 'More on open-source and infrastructure security than raw CTI, but still relevant.' },
    { name: 'CCTX Events', href: 'https://cctx.ca/events/', type: 'CTI / Collaboration', location: 'Canada + Virtual', cost: '$', desc: 'Focused on Canadian cyber threat sharing and CTI workshops. Great for North American pros.' },
    { name: 'Cyber Threat Alliance Events', href: 'https://www.cyberthreatalliance.org/', type: 'CTI / Industry', location: 'Virtual / Various', cost: '$', desc: 'Not a formal conference but has excellent CTI-centric events and briefings.' },
  ];

  return (
    <>
      <PageHero
        eyebrow="CTIJen Resources"
        title="Cons &"
        titleEm="Conferences 😎"
        desc="Where the community gathers. Some of the best CTI knowledge transfer happens in hallway conversations at these events."
      />
      <GradientRule />
      <section style={{ padding: '80px 0', background: 'var(--cream)' }}>
        <div style={{ padding: '0 48px', marginBottom: '40px' }}>
          <PageContainer>
            <SectionHeader number={`${cons.length} conferences`} title="The Circuit" desc="$ = under $100  |  $$ = $100–500  |  $$$ = $500–1,500  |  $$$$ = $1,500+" />
          </PageContainer>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {cons.map((con, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '240px 140px 80px 1fr',
              borderBottom: '1px solid var(--border)',
              background: i % 2 === 0 ? 'var(--cream)' : 'var(--warm-white)',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#fff'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? 'var(--cream)' : 'var(--warm-white)'}>
              <div style={{ padding: '20px 24px 20px 48px', borderRight: '1px solid var(--border)' }}>
                <a href={con.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 700, color: 'var(--ink)', textDecoration: 'none', display: 'block', marginBottom: '4px' }}>{con.name}</a>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'var(--mid)', letterSpacing: '0.08em' }}>{con.type}</span>
              </div>
              <div style={{ padding: '20px 16px', borderRight: '1px solid var(--border)', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--mid)', fontWeight: 300 }}>{con.location}</span>
              </div>
              <div style={{ padding: '20px 16px', borderRight: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px', color: 'var(--gold-dim)' }}>{con.cost}</span>
              </div>
              <div style={{ padding: '20px 48px 20px 24px' }}>
                <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.65, fontWeight: 300 }}>{con.desc}</p>
                {con.jenNote && <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '13px', color: 'var(--dusty-pink-dim)', marginTop: '6px' }}>☞ {con.jenNote}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ClosingNote text="Missing a con that should be here? Especially looking to add more regional and diversity-focused events." linkText="Suggest a con →" linkHref="/#contact" />
    </>
  );
}