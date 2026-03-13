'use client';
import { PageHero, GradientRule, SectionHeader, PageContainer, ResourceCard, ClosingNote } from '@/components/resource-components';

export default function JobsPage() {
  const boards = [
    { name: 'LinkedIn Jobs', href: 'https://www.linkedin.com/jobs/search/?keywords=cyber%20threat%20intelligence', desc: 'The most comprehensive job board for CTI roles. Set up alerts for "Threat Intelligence Analyst" and similar titles.' },
    { name: 'Indeed', href: 'https://www.indeed.com/jobs?q=cyber+threat+intelligence', desc: 'Broad job board with good CTI coverage. Useful for smaller companies that may not post on LinkedIn.' },
    { name: 'CyberSecJobs', href: 'https://www.cybersecjobs.com/', desc: 'Cybersecurity-specific job board. Better signal-to-noise than general job sites for security roles.' },
    { name: 'CISA Careers', href: 'https://www.cisa.gov/careers', desc: 'Government CTI roles. CISA is one of the most important employers in the space for threat intelligence work.' },
    { name: 'USAJobs', href: 'https://www.usajobs.gov/', desc: 'Federal government positions including many CTI analyst and intelligence roles across agencies.' },
    { name: 'Dice', href: 'https://www.dice.com/jobs?q=threat+intelligence', desc: 'Tech-focused job board with solid coverage of security and intelligence roles.' },
  ];

  return (
    <>
      <PageHero eyebrow="CTIJen Resources" title="CTI" titleEm="Jobs" desc="Where to find CTI and cybersecurity roles. Don't forget — your network is your most powerful job search tool." />
      <GradientRule />
      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <PageContainer>
          <div style={{ background: 'var(--plum)', borderRadius: '5px', padding: '28px 32px', maxWidth: '760px', marginBottom: '48px' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>A note on job titles</div>
            <p style={{ fontSize: '15px', color: 'rgba(250,247,242,0.7)', lineHeight: 1.8, fontWeight: 300 }}>
              CTI roles go by many names: Threat Intelligence Analyst, Cyber Threat Analyst, Intelligence Analyst, Threat Researcher, Detection Engineer, and more. Search broadly. Also search for roles at companies known for CTI work — Mandiant, CrowdStrike, Recorded Future, Red Canary, Team Cymru, and the major banks all have dedicated CTI teams.
            </p>
          </div>
          <SectionHeader number="Job boards" title="Where to Look" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {boards.map((board, i) => (
              <ResourceCard key={i}>
                <a href={board.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 700, color: 'var(--ink)', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>{board.name}</a>
                <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.65, fontWeight: 300 }}>{board.desc}</p>
              </ResourceCard>
            ))}
          </div>
        </PageContainer>
      </section>
      <ClosingNote text="Want advice on breaking into CTI specifically? Reach out — happy to give more tailored guidance." linkText="Get in touch →" linkHref="/#contact" />
    </>
  );
}