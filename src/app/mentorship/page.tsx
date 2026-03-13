'use client';
import { PageHero, GradientRule, SectionHeader, ResourceCard, Pill, JenNote, Tag, ClosingNote } from '@/components/resource-components';

export default function MentorshipPage() {
    const orgs = [
      {
        name: 'Cyversity', href: 'https://www.cyversity.org/', cost: '$100/year ($20 for students/veterans)',
        format: '16-week 1:1 mentorship',
        desc: 'Founded to address the lack of diversity in cybersecurity, rebranded from ICMCP in 2021. Excellent program for building diverse, inclusive cybersecurity talent.',
        jenNote: "I've been through 4 rounds of Cyversity mentorship: as a group mentee, as a 1:1 mentee twice, and as a mentor. I've really grown through it and met some incredible people. Your mentor may not be in CTI specifically, but the program is worth it for the community and events alone. Highly recommend.",
      },
      {
        name: 'WiCyS — Women in Cybersecurity', href: 'https://www.wicys.org/initiatives/mentor/mentor-mentee-program/',
        cost: 'Up to $95/year (varies by occupation)', format: '9-month 1:many mentorship',
        desc: 'Group cohort mentorship (3–5 mentees per mentor). Covers career advancement, branding, negotiation, leadership, work-life balance, and more. Includes CyberGEN.IQ Assessment.',
      },
      {
        name: 'The Diana Initiative', href: 'https://www.dianainitiative.org/annual-event/mentorship-programs',
        cost: 'Free (unclear)', format: 'CFP and presentation mentorship',
        desc: 'Mentorship focused on helping new and prospective speakers craft strong CFPs and improve their presentation skills. Skills applicable to any conference.',
      },
      {
        name: 'Career Village', href: 'https://www.careervillage.org/',
        cost: 'Free', format: 'Community Q&A',
        desc: 'Crowdsourced career advice for underrepresented people. A massive open-access reference with 190,000+ volunteer professionals answering career questions.',
      },
    ];
   
    return (
      <>
        <PageHero
          eyebrow="CTIJen Resources"
          title="Mentorship"
          titleEm="Opportunities"
          desc="Breaking into CTI is easier with guidance. These are the programs Jen has personally participated in or recommends."
        />
        <GradientRule />
        <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
          <SectionHeader number={`${orgs.length} programs`} title="Programs Worth Your Time" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '900px' }}>
            {orgs.map((org, i) => (
              <div key={i} style={{
                background: 'var(--warm-white)', border: '1px solid var(--border)',
                borderRadius: '5px', padding: '28px',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', marginBottom: '12px' }}>
                  <div>
                    <a href={org.href} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: '20px',
                      fontWeight: 700, color: 'var(--ink)', textDecoration: 'none',
                      display: 'block', marginBottom: '4px',
                    }}>{org.name}</a>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'var(--gold-dim)', letterSpacing: '0.06em' }}>{org.format}</span>
                  </div>
                  <Tag variant={org.cost.startsWith('Free') ? 'free' : 'paid'}>{org.cost}</Tag>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, fontWeight: 300 }}>{org.desc}</p>
                {org.jenNote && <JenNote>{org.jenNote}</JenNote>}
              </div>
            ))}
          </div>
        </section>
        <ClosingNote
          text="Want more tailored advice on breaking into CTI? Reach out directly."
          linkText="Get in touch →"
          linkHref="/#contact"
        />
      </>
    );
  }