'use client';

export default function PeopleOrgsPage() {
  const people = [
    {
      initials: 'KN',
      name: 'Katie Nickels',
      title: 'Director of Intelligence, Red Canary',
      bio: 'SANS instructor, CTI advocate, and supporter of Cyberjutsu Girls Academy. Katie has a rare ability to make complex intelligence concepts genuinely accessible without dumbing them down.',
      why: 'If you follow one person in CTI, make it Katie.',
      links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/katie-nickels/' }],
    },
    {
      initials: 'WT',
      name: 'Will Thomas',
      title: 'Senior TI Advisor, Team Cymru · aka Bushido',
      bio: 'SANS co-author and founder of BushidoToken Threat Intel and Curated Intelligence. Will produces some of the most consistently rigorous open-source threat research in the field.',
      why: 'Follow for deep technical tracking of threat actor infrastructure.',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/william-t/' },
        { label: 'Website', href: 'https://bushidotoken.net/' },
        { label: 'Twitter', href: 'https://twitter.com/BushidoToken' },
      ],
    },
    {
      initials: 'JS',
      name: 'Joe Slowik',
      title: 'CTI Consultant, Paralus LLC',
      bio: 'MITRE ATT&CK lead with former roles at Dragos, DomainTools, Huntress, and Gigamon. Joe brings a level of analytical rigor to threat intelligence that is genuinely rare.',
      why: 'Essential reading for anyone doing ICS/OT or attribution work.',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joe-slowik/' },
        { label: 'Twitter', href: 'https://x.com/jfslowik' },
      ],
    },
    {
      initials: 'BT',
      name: 'Brett Tolbert',
      title: 'Principal CTI Analyst, Exelon',
      bio: 'Community educator and Cyversity mentor who gives back to the field in ways that go well beyond his day job.',
      why: 'A model for what community-minded CTI practice looks like.',
      links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/brett-tolbert-9abb01235/' }],
    },
    {
      initials: 'JF',
      name: 'Jennifer Funk',
      title: 'CTI Analyst · aka Alt Funktion',
      bio: 'Content creator sharing CTI education through TikTok and her website. Background in military and marketing — she brings an angle on communication that most analysts never develop.',
      why: 'Proof that CTI education doesn\'t have to be dry.',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jenniferfunk1/' },
        { label: 'Website', href: 'https://altfunktion.com' },
      ],
    },
    {
      initials: 'MJ',
      name: 'Matt Johansen',
      title: 'Security Educator · Creator of Vulnerable U',
      bio: 'Speaker and infosec community advocate who has built one of the most genuinely useful security newsletters out there.',
      why: 'Vulnerable U is required reading. Full stop.',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthewjohansen/' },
        { label: 'Twitter', href: 'https://x.com/mattjay/' },
        { label: 'Vulnerable U', href: 'https://www.vulnu.com/' },
      ],
    },
    {
      initials: 'JE',
      name: 'Jen Easterly',
      title: 'Former Director, CISA',
      bio: 'Cybersecurity leader focused on public-private partnerships and cyber resilience. Helped shape the modern US cyber posture during a pivotal era.',
      why: 'For the big picture on how policy and intelligence intersect.',
      links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jen-easterly/' }],
    },
    {
      initials: 'CL',
      name: 'Christopher Luft',
      title: 'Co-founder, LimaCharlie',
      bio: 'Organizer of the Cybersecurity Cares annual charity telethon and one of the most quietly impactful people in the security community.',
      why: 'Building tools and community in equal measure.',
      links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/christopherluft/' }],
    },
    {
      initials: 'GC',
      name: 'Grace C',
      title: 'Cofounder & COO, Pulsedive',
      bio: 'CTI platform builder and community extraordinaire. Grace brings both technical depth and genuine warmth to everything she does in this space.',
      why: 'An incredible human being and CTI extraordinaire.',
      links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/graceschi/' }],
    },
  ];

  const orgs = [
    {
      name: 'The Citizen Lab',
      tags: ['Research', 'Human Rights'],
      desc: 'Interdisciplinary research hub at the University of Toronto investigating the intersection of technology, human rights, and global security. Some of the most important surveillance and spyware research comes out of here.',
      links: [
        { label: 'Website', href: 'https://citizenlab.ca/' },
        { label: 'Bluesky', href: 'https://bsky.app/profile/citizenlab.ca' },
      ],
    },
    {
      name: 'Curated Intelligence',
      tags: ['Community', 'Threat Tracking'],
      desc: 'A collective of CTI professionals sharing intelligence, insights, and collaboratively tracking threats. The collective model means the output is consistently broader than any single vendor can produce.',
      links: [
        { label: 'Website', href: 'https://curatedintel.org/' },
        { label: 'Twitter', href: 'https://twitter.com/curatedintel' },
      ],
    },
    {
      name: 'Tracking Ransomware',
      tags: ['Ransomware', 'Nonprofit'],
      desc: 'Nonprofit watchdog monitoring ransomware actors and leak sites in near real-time. An invaluable free resource for anyone tracking financially motivated threat actors.',
      links: [
        { label: 'Website', href: 'https://ransomware.live' },
        { label: 'Bluesky', href: 'https://bsky.app/profile/ransomware.live' },
      ],
    },
    {
      name: 'DFIR Report',
      tags: ['Incident Response', 'TTPs'],
      desc: 'Detailed, technical breakdowns of real-world intrusions by incident responders. If you want to stay current on how threat actors actually operate inside networks, this is your primary source.',
      links: [{ label: 'Website', href: 'https://thedfirreport.com/' }],
    },
    {
      name: 'MITRE ATT&CK',
      tags: ['Framework', 'Foundational'],
      desc: "The globally used framework for describing and categorizing adversary behavior. If you work in CTI and aren't fluent in ATT&CK, start here. MITRE's research and tooling are foundational to the entire field.",
      links: [{ label: 'Website', href: 'https://attack.mitre.org/' }],
    },
  ];

  const communities = [
    {
      type: 'Community',
      name: 'LimaCharlie Community',
      desc: 'Security-focused Slack group for detection engineers and CTI professionals. Great conversations, genuinely good people, no noise.',
      href: 'https://community.limacharlie.io/',
      cta: 'Join the Slack',
    },
    {
      type: 'Community',
      name: 'CYA Security',
      desc: 'Cyber security awareness in plain language. Daily news, tips, and career guidance for those breaking into cyber. Welcoming to newcomers in a way not every corner of this field is.',
      href: 'https://cyasecurity.carrd.co/',
      cta: 'Visit',
    },
  ];

  const newsletters = [
    {
      type: 'Newsletter',
      name: 'CyberThreat.Cafe',
      desc: 'Written for CTI professionals and researchers. Stays focused, stays practical, respects your time. Exactly what a good newsletter should do.',
      href: 'https://www.cyberseccafe.com/about',
      cta: 'Subscribe',
    },
    {
      type: 'Newsletter',
      name: 'Thomas Roccia — Security Break',
      desc: 'Books, trainings, coaching, and a newsletter from a seasoned CTI practitioner. Thomas brings a thoughtful, practitioner-first perspective that\'s worth your inbox space.',
      href: 'https://store.securitybreak.io/',
      cta: 'Subscribe',
    },
  ];

  const colorCycle = [
    '#7c3a6e',
    'var(--plum)',
    'var(--gold-dim)',
    '#4a7c6f',
    'var(--plum-light)',
    '#5c4a8a',
    'var(--dusty-pink-dim)',
    '#3d5a80',
    'var(--plum)',
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero" style={{ paddingBottom: '0' }}>
        <div className="page-hero-eyebrow">CTIJen Resources</div>
        <h1 className="page-hero-title">
          People, Orgs<br />&amp; <em>Communities</em>
        </h1>
        <p className="page-hero-desc" style={{ marginBottom: '40px' }}>
          This isn't a database pull — it's a curated list of practitioners, organizations, and communities that I
          have learned from, worked alongside, or recommend without hesitation.🙌
        </p>

        {/* sticky chapter tabs */}
        <div style={{
          display: 'flex',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: '16px',
        }}>
          {[
            { label: '01 — People', href: '#people' },
            { label: '02 — Organizations', href: '#orgs' },
            { label: '03 — Communities', href: '#communities' },
            { label: '04 — Newsletters', href: '#newsletters' },
          ].map((link, i) => (
            <a key={i} href={link.href} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,242,0.45)',
              textDecoration: 'none',
              padding: '16px 24px',
              borderRight: '1px solid rgba(255,255,255,0.08)',
              transition: 'color 0.2s, background 0.2s',
              display: 'block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--gold)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(250,247,242,0.45)';
              e.currentTarget.style.background = 'transparent';
            }}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* GRADIENT RULE */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(to right, var(--plum), var(--gold), var(--dusty-pink), var(--gold), var(--plum))',
      }} />

      {/* ── PEOPLE ── */}
      <section id="people" style={{ padding: '80px 0', background: 'var(--cream)' }}>
        {/* section header */}
        <div style={{ padding: '0 48px', marginBottom: '48px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border)',
          }}>
            <div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '10px',
              }}>01 — People</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                marginBottom: '10px',
              }}>People to Follow</h2>
              <p style={{
                fontSize: '14px',
                color: 'var(--mid)',
                fontWeight: 300,
                maxWidth: '560px',
                lineHeight: 1.75,
              }}>
                These are the practitioners I'd point any CTI analyst toward on day one —
                educators, builders, and community leaders who consistently put out work worth your attention.
              </p>
            </div>
          </div>
        </div>

        {/* people list — full width alternating rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {people.map((person, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '64px 260px 1fr auto',
              gap: '0',
              alignItems: 'stretch',
              borderBottom: '1px solid var(--border)',
              background: i % 2 === 0 ? 'var(--cream)' : 'var(--warm-white)',
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = i % 2 === 0 ? 'var(--cream)' : 'var(--warm-white)';
            }}>
              {/* index + avatar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px 0 24px 48px',
                borderRight: '1px solid var(--border)',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '4px',
                  background: colorCycle[i % colorCycle.length],
                  color: '#fff',
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  letterSpacing: '0.05em',
                  flexShrink: 0,
                }}>
                  {person.initials}
                </div>
              </div>

              {/* name + title */}
              <div style={{
                padding: '24px 24px 24px 20px',
                borderRight: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  lineHeight: 1.2,
                }}>{person.name}</div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  color: 'var(--mid)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.4,
                }}>{person.title}</div>
              </div>

              {/* bio + why */}
              <div style={{
                padding: '24px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '8px',
              }}>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--mid)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>{person.bio}</p>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  color: 'var(--dusty-pink-dim)',
                  lineHeight: 1.5,
                }}>☞ {person.why}</p>
              </div>

              {/* links */}
              <div style={{
                padding: '24px 48px 24px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '6px',
              }}>
                {person.links.map((link, j) => (
                  <a key={j} href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--plum)',
                      textDecoration: 'none',
                      border: '1px solid rgba(45,27,61,0.2)',
                      borderRadius: '2px',
                      padding: '4px 10px',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--plum)';
                      e.currentTarget.style.color = 'var(--cream)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--plum)';
                    }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ORGS ── */}
      <section id="orgs" style={{ padding: '80px 48px', background: 'var(--plum)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'end',
          paddingBottom: '32px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '10px',
            }}>02 — Organizations</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: 'var(--cream)',
              marginBottom: '10px',
            }}>Groups &amp; Orgs to Know</h2>
            <p style={{
              fontSize: '14px',
              color: 'rgba(250,247,242,0.5)',
              fontWeight: 300,
              maxWidth: '560px',
              lineHeight: 1.75,
            }}>
              Organizations producing valuable CTI research, frameworks, and tooling that I regularly
              reference and recommend.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {orgs.map((org, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '240px 1fr auto',
              gap: '0',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '5px',
              overflow: 'hidden',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.borderColor = 'rgba(201,165,90,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}>
              <div style={{
                padding: '20px 24px',
                borderRight: '1px solid rgba(255,255,255,0.08)',
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--cream)',
                  marginBottom: '8px',
                }}>{org.name}</div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {org.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '9px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      border: '1px solid rgba(201,165,90,0.25)',
                      borderRadius: '2px',
                      padding: '2px 7px',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{
                padding: '20px 28px',
                fontSize: '13px',
                color: 'rgba(250,247,242,0.55)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}>{org.desc}</div>
              <div style={{
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                alignItems: 'flex-end',
              }}>
                {org.links.map((link, j) => (
                  <a key={j} href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      textDecoration: 'none',
                      border: '1px solid rgba(201,165,90,0.25)',
                      borderRadius: '2px',
                      padding: '4px 10px',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--gold)';
                      e.currentTarget.style.color = 'var(--plum)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--gold)';
                    }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMMUNITIES & NEWSLETTERS ── */}
      <section id="communities" style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'end',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--border)',
          marginBottom: '48px',
        }}>
          <div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '10px',
            }}>03 & 04 — Communities &amp; Newsletters</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              marginBottom: '10px',
            }}>Where to Gather</h2>
            <p style={{
              fontSize: '14px',
              color: 'var(--mid)',
              fontWeight: 300,
              maxWidth: '560px',
              lineHeight: 1.75,
            }}>
              Places to hang out, stay informed, and find your people in the CTI and broader security community.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
        }}>
          {/* Communities column */}
          <div id="communities-col">
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--plum)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{
                background: 'var(--plum)',
                color: 'var(--cream)',
                padding: '3px 8px',
                borderRadius: '2px',
                fontSize: '9px',
              }}>Community</span>
              Places to gather
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {communities.map((item, i) => (
                <div key={i} style={{
                  background: 'var(--warm-white)',
                  border: '1px solid var(--border)',
                  borderRadius: '5px',
                  padding: '24px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(45,27,61,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(45,27,61,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '8px',
                  }}>{item.name}</div>
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--mid)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: '16px',
                  }}>{item.desc}</p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--plum)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'gap 0.2s',
                    border: '1px solid rgba(45,27,61,0.2)',
                    borderRadius: '2px',
                    padding: '6px 12px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--plum)';
                    e.currentTarget.style.color = 'var(--cream)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--plum)';
                  }}>
                    {item.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletters column */}
          <div id="newsletters">
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold-dim)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{
                background: 'rgba(201,165,90,0.15)',
                color: 'var(--gold-dim)',
                padding: '3px 8px',
                borderRadius: '2px',
                fontSize: '9px',
                border: '1px solid rgba(201,165,90,0.25)',
              }}>Newsletters</span>
              Worth your inbox
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {newsletters.map((item, i) => (
                <div key={i} style={{
                  background: 'var(--warm-white)',
                  border: '1px solid var(--border)',
                  borderRadius: '5px',
                  padding: '24px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(45,27,61,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(201,165,90,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '8px',
                  }}>{item.name}</div>
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--mid)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: '16px',
                  }}>{item.desc}</p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-dim)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: '1px solid rgba(201,165,90,0.3)',
                    borderRadius: '2px',
                    padding: '6px 12px',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--gold-dim)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--gold-dim)';
                  }}>
                    {item.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING NOTE ── */}
      <div style={{
        background: 'var(--plum)',
        padding: '32px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '16px',
          fontStyle: 'italic',
          color: 'rgba(250,247,242,0.5)',
          lineHeight: 1.6,
          maxWidth: '560px',
        }}>
          Know someone or something that should be on this list? I'm always looking to expand it!
          Reach out and make the case.
        </p>
        <a href="/#contact" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          textDecoration: 'none',
          border: '1px solid rgba(201,165,90,0.3)',
          borderRadius: '3px',
          padding: '12px 24px',
          whiteSpace: 'nowrap',
          transition: 'all 0.2s',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--gold)';
          e.currentTarget.style.color = 'var(--plum)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--gold)';
        }}>
          Suggest someone →
        </a>
      </div>
    </>
  );
}