'use client';
import { PageHero, GradientRule, SectionHeader, ResourceCard, Pill, JenNote, Tag, ClosingNote } from '@/components/resource-components';
 
export default function TrainingsPage() {
  const trainings = [
    { name: 'AltFunktion', href: 'https://www.altfunktion.com/my-blog', cost: 'Free', level: 'Beginner → Advanced', desc: 'Fantastic CTI and cybersecurity resources across TikTok, YouTube, and a blog. Jennifer Funk just keeps growing this resource and it shows.', jenNote: 'I found Jennifer through TikTok and she is genuinely creating some of the best accessible CTI education out there.' },
    { name: 'Curated Intelligence Repo', href: 'https://github.com/curated-intel', cost: 'Free', level: 'Beginner → Advanced', desc: 'A one-stop shop for threat intelligence fundamentals. Their Research Guide teaches you how to collect and curate intelligence, and their Actor Profile Guide provides a blueprint for creating your own threat actor profiles.' },
    { name: 'macOS Malware Knowledge Database', href: 'https://notes.crashsecurity.io/notes/b/06C749EC-4BB5-4D23-82EF-B64444AF4C5D/Malware-Knowledge-Base', cost: 'Free', level: 'Intermediate', desc: 'Repository of OSINT for several macOS-focused malware families, maintained by Stuart Ashenbrenner at Huntress Labs.' },
    { name: 'MITRE ATT&CK Training', href: 'https://attack.mitre.org/resources/learn-more-about-attack/training/', cost: 'Free', level: 'Intermediate', desc: 'Not a structured course, but an invaluable resource. The ATT&CK framework is your best friend. Spend time here and make some flashcards.' },
    { name: 'SANS Cyber Academy', href: 'https://www.sans.org/cyber-academy/', cost: 'Free (scholarship)', level: 'Intermediate', desc: 'Career-building cybersecurity training for individuals from under-resourced communities. Highly competitive aptitude-based scholarship program. Includes GIAC certifications.' },
    { name: 'Cybrary', href: 'https://www.cybrary.it/', cost: 'Free + Paid ($50/mo+)', level: 'Beginner', desc: 'Career and skill paths including an Intro to CTI course. Their free tier includes SOC analyst training and some skill paths. CTI content requires subscription.' },
    { name: 'Ababio Apps', href: 'https://www.ababioapps.com/', cost: 'Free', level: 'Beginner → Intermediate', desc: 'Security+ quiz and modules covering general cybersecurity, packet sniffing, and other topics. Great for studying fundamentals.' },
    { name: 'Udemy', href: 'https://www.udemy.com/courses/search/?src=ukw&q=cyber+threat+intelligence', cost: 'Paid (often discounted)', level: 'Beginner', desc: 'Broad course library including CTI and cert prep. Recommend only courses with 1000+ reviews. Sign up and express interest — they will send you discount codes.', jenNote: "I haven't personally taken CTI courses on Udemy so proceed with some caution, but the cert prep courses are solid." },
    { name: 'Pluralsight', href: 'https://www.pluralsight.com/courses/threat-intelligence-big-picture', cost: '10-day free trial / Paid', level: 'Beginner → Intermediate', desc: 'Their Volt Typhoon and Sandworm course is a good deep dive into actor profiling and methodologies for more advanced audiences.' },
    { name: 'SANS', href: 'https://www.sans.org/security-resources/', cost: 'Free → $$$$', level: 'Beginner → Advanced', desc: 'The premiere cybersecurity learning standard. Free resources including their blog, all the way up to ~$10,000 for an on-demand CTI course with cert attempt included.' },
    { name: 'Mandiant Academy', href: 'https://www.mandiant.com/academy/course-registration', cost: 'Paid ($2–3K USD)', level: 'Beginner → Advanced', desc: 'The Mandiant name carries serious weight. Their Threat Intelligence Production course is phenomenal. If you can get access, do it.', jenNote: 'Google bought Mandiant for a reason and that reason was not because they suck. Their training is elite.' },
  ];
 
  return (
    <>
      <PageHero
        eyebrow="CTIJen Resources"
        title="Trainings &"
        titleEm="Learning"
        desc="Every resource on this page has been evaluated or personally used by Jen. No compensation received from any of these providers."
      />
      <GradientRule />
      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <SectionHeader
          number={`${trainings.length} resources`}
          title="Where to Learn CTI"
          desc="Sorted roughly from free/beginner-friendly to paid/advanced. The free ones at the top are genuinely excellent — don't skip them just because they're free."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
          {trainings.map((t, i) => (
            <ResourceCard key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '8px' }}>
                <a href={t.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '18px',
                  fontWeight: 700, color: 'var(--ink)', textDecoration: 'none',
                }}>
                  {t.name}
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end', flexShrink: 0 }}>
                  <Tag variant={t.cost.startsWith('Free') ? 'free' : 'paid'}>{t.cost}</Tag>
                  <Tag variant={t.level.includes('Beginner') ? 'beginner' : 'advanced'}>{t.level}</Tag>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, fontWeight: 300 }}>{t.desc}</p>
              {t.jenNote && <JenNote>{t.jenNote}</JenNote>}
            </ResourceCard>
          ))}
        </div>
      </section>
      <ClosingNote
        text="Ready to get certified? Check out the Certifications page for what's worth your time and money."
        linkText="View Certifications →"
        linkHref="/certifications"
      />
    </>
  );
}