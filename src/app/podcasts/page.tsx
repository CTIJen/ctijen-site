export default function PodcastsPage() {
    const ctiPodcasts = [
      { name: 'Future of Threat Intelligence', href: 'https://podcasts.apple.com/us/podcast/future-of-threat-intelligence/id1631947902', desc: 'Team Cymru explores the shift from reactive detection to proactive threat management. Top cybersecurity leaders and practitioners sharing real strategies.' },
      { name: 'Microsoft Threat Intelligence Podcast', href: 'https://podcasts.apple.com/us/podcast/microsoft-threat-intelligence-podcast/id1710656242', desc: 'Stories from the Microsoft Threat Intelligence community navigating APTs, cybercrime gangs, malware, vulnerabilities, and weird/cool tools and tactics.' },
    ];
   
    const generalPodcasts = [
      { name: 'Stats On Stats', href: 'https://www.youtube.com/@StatsOnStats', desc: 'J and Tiffiny unpack complex cybersecurity issues and IT trends in a way that\'s accessible whether you\'re a professional or enthusiast.' },
      { name: 'The Cyber Weekly', href: 'https://www.youtube.com/@thecyberweekly/videos', desc: 'Cybersecurity and all matters related to cyber. Good for staying current on what\'s happening in the field.' },
      { name: 'SANS Podcasts', href: 'https://www.sans.org/podcasts/', desc: 'A range of podcasts covering blue team operations, certification discussions, and industry threats from the SANS community.' },
      { name: 'Darknet Diaries', href: 'https://podcasts.apple.com/us/podcast/darknet-diaries/id1296350485', desc: 'In-depth interviews surrounding the dark side of the internet, hacking, and cybercriminals. Incredible storytelling.' },
      { name: 'Three Buddy Problem', href: 'https://podcasts.apple.com/us/podcast/three-buddy-problem/id1414525622', desc: 'Goes beyond industry talking points to discuss nation-state malware, attribution, cyberwar, ethics, and the messy realities of securing networks.' },
      { name: 'IT in the D', href: 'https://podcasts.apple.com/us/podcast/it-in-the-d/id839642514', desc: 'Conversations with folks in the Detroit tech scene. Great for the Michiganders in the room 🏒' },
      { name: 'Cybersecurity Defenders Podcast', href: 'https://podcasts.apple.com/us/podcast/the-cybersecurity-defenders-podcast/id1649981740', desc: 'Recent cybersecurity stories with guest perspectives from across the industry.' },
    ];
   
    return (
      <>
        <PageHero
          eyebrow="CTIJen Resources"
          title="Pod-"
          titleEm="casts"
          desc="Good listens for the commute, the gym, or whenever you need to stay current without staring at a screen. No compensation received from any of these."
        />
        <GradientRule />
        <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
          <SectionHeader number="CTI-specific" title="Threat Intelligence Podcasts" desc="Directly relevant to CTI practice and tradecraft." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px', marginBottom: '64px' }}>
            {ctiPodcasts.map((p, i) => (
              <ResourceCard key={i}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '18px',
                  fontWeight: 700, color: 'var(--ink)', textDecoration: 'none',
                  display: 'block', marginBottom: '10px',
                }}>{p.name}</a>
                <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, fontWeight: 300 }}>{p.desc}</p>
              </ResourceCard>
            ))}
          </div>
   
          <SectionHeader number="Broader cybersecurity" title="General Security Podcasts" desc="Not CTI-specific but worth your time." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
            {generalPodcasts.map((p, i) => (
              <ResourceCard key={i}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '18px',
                  fontWeight: 700, color: 'var(--ink)', textDecoration: 'none',
                  display: 'block', marginBottom: '10px',
                }}>{p.name}</a>
                <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, fontWeight: 300 }}>{p.desc}</p>
              </ResourceCard>
            ))}
          </div>
        </section>
        <ClosingNote
          text="Know a podcast that should be on this list? Send it over."
          linkText="Suggest one →"
          linkHref="/#contact"
        />
      </>
    );
  }