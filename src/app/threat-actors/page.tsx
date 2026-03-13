'use client';
import { PageHero, GradientRule, SectionHeader, PageContainer, JenNote, ClosingNote } from '@/components/resource-components';

export default function ThreatActorsPage() {
  return (
    <>
      <PageHero eyebrow="CTIJen Resources" title="Cyber Threat" titleEm="Actors" desc="Know your adversaries. Jen doesn't like to reinvent the wheel, and on this one, she doesn't have to." />
      <GradientRule />
      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <PageContainer>
          <div style={{ maxWidth: '760px' }}>
            <SectionHeader number="The best resource" title="ETDA Threat Actor Database" />
            <div style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '5px', padding: '32px' }}>
              <p style={{ fontSize: '15px', color: 'var(--mid)', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                The Electronic Transactions Development Agency out of Thailand has created what Jen considers the best database of cyber threat actors. It coalesces several OSINT sources you'd typically check for research into a single, well-maintained reference.
              </p>
              <JenNote>If you know me, you know I don't like to reinvent the wheel. This database does everything I'd want a threat actor reference to do, and it's free.</JenNote>
              <div style={{ marginTop: '24px' }}>
                <a href="https://apt.etda.or.th/cgi-bin/listgroups.cgi" target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--plum)', padding: '12px 24px', borderRadius: '3px', textDecoration: 'none', fontWeight: 500, display: 'inline-block' }}>
                  Open the ETDA Database →
                </a>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <SectionHeader number="Also useful" title="Other Actor References" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'MITRE ATT&CK Groups', href: 'https://attack.mitre.org/groups/', desc: "ATT&CK's actor database with TTP mappings. Essential for understanding how specific groups operate." },
                  { name: 'Malpedia', href: 'https://malpedia.caad.fkie.fraunhofer.de/', desc: 'Malware-focused library with actor associations. Great for tracking tooling to threat groups.' },
                  { name: 'CISA Known Exploited Vulnerabilities', href: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog', desc: 'Not actor-specific, but critical for understanding what threat actors are actively exploiting in the wild.' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '5px', padding: '20px 24px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px', alignItems: 'center' }}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', fontWeight: 700, color: 'var(--ink)', textDecoration: 'none' }}>{item.name}</a>
                    <p style={{ fontSize: '13px', color: 'var(--mid)', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
      <ClosingNote text="Want to learn how to build your own threat actor profiles? Check out the Trainings page." linkText="View Trainings →" linkHref="/trainings" />
    </>
  );
}