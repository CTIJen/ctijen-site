'use client';

import Image from 'next/image';

export default function AboutPage() {
  const experienceSnapshot = [
    { label: 'Cybersecurity Experience', value: '8+ years' },
    { label: 'Dedicated CTI Focus', value: '6+ years' },
    { label: 'Current Role', value: 'Senior Threat Intelligence Analyst' },
  ];

  const communityItems = [
    {
      org: 'Stats on Stats',
      role: 'Podcast guest discussing cybersecurity and career growth in the field',
      icon: '🎙️',
      detailTitle: 'Podcast feature',
      details:
        'Featured on Stats on Stats to talk through practical cybersecurity growth, field experience, and helping others break into and grow in cyber.',
      href: 'https://www.youtube.com/@StatsOnStats',
      hrefLabel: 'Watch on YouTube',
      photoSrc: '/community-work/stats-on-stats.JPG',
      photoAlt:
        'Jen on the Stats on Stats podcast recording in Austin during IntelliCON.',
    },
    {
      org: 'Intellic0n 2026',
      role: 'Conference speaker',
      icon: '🎤',
      detailTitle: 'Speaker spotlight',
      details:
        "Spoke at Intellic0n 2026: 'AI + Human Eyes: How We've Processed Our OSINT Using Automation and Good Old Fashioned Double Checking.'",
      previewIcon: '🏛️',
      href: 'https://www.intelliguards.com/intellic0n',
      hrefLabel: 'Intellic0n Homepage',
      photoSrc: '/community-work/intellic0nspeaking.png',
      photoAlt:
        'Jen delivering her presentation on AI and CTI.',
    },
    {
      org: 'The Cyber Weekly',
      role: 'Podcast guest appearance (latest episode now live)',
      icon: '📺',
      detailTitle: 'Latest episode',
      details:
        'Joined The Cyber Weekly for a conversation on social engineering in the AI era, cloud security as a frontline challenge, and why balancing community with technology creates stronger security outcomes.',
      href: 'https://open.spotify.com/episode/6K46hEHoQns2MqB5VJzPHS?si=50541c5e76054a6c',
      hrefLabel: 'Episode on Spotify',
      secondaryHref:
        'https://podcasts.apple.com/us/podcast/the-cyber-weekly/id1715165647?i=1000754820347',
      secondaryHrefLabel: 'Apple Podcasts',
      photoSrc: '/community-work/the-cyber-weekly.png',
      photoAlt:
        'Jen on The Cyber Weekly podcast.',
      previewIcon: '🎬',
    },
    {
      org: 'Cybersecurity Cares',
      role: '2022–present panelist and participant in annual charity telethon fundraiser',
      icon: '❤️',
      detailTitle: 'Annual telethon participant',
      details:
        'Participates in the Cybersecurity Cares telethon to support nonprofit organizations and help raise funds for causes that strengthen the cybersecurity community.',
      href: 'https://www.cybersecurity-cares.com/',
      hrefLabel: 'Cybersecurity Cares',
      photoSrc: '/community-work/cybersecurity-cares-pictionary.jpg',
      photoAlt:
        'Cybersecurity Cares telethon game session with a cybersecurity Pictionary round.',
    },
    {
      org: 'Cyversity',
      role: '2023–present Mentee and Mentor for those looking to break into or grow in cybersecurity',
      icon: '🤝',
      detailTitle: 'Mentee and mentor',
      details:
        'Supports Cyversity as both mentee and mentor, contributing to career growth and community development for current and aspiring cybersecurity professionals.',
      href: 'https://www.cyversity.org/',
      hrefLabel: 'Visit Cyversity',
      photoSrc: '/community-work/cyversity-logo-for-light-backgrounds.png',
      photoAlt:
        'Cyversity logo with the words Diversify, Educate, Empower.',
      photoFit: 'contain',
    },
    {
      org: 'Cyberjutsu',
      role: '2023 & 2024 CyberJutsu Con submission review panelist',
      icon: '🥷',
      detailTitle: 'CyberJutsu Con reviewer',
      details:
        'Served as a reviewer for CyberJutsu Con talk submissions, helping evaluate community presentations and shape conference content.',
      href: 'https://womenscyberjutsu.org/page/cyberjutsu-con',
      hrefLabel: 'CyberJutsu Con',
      photoSrc: '/community-work/cyberjutsu-reviewers.jpg',
      photoAlt:
        'Group photo of CyberJutsu Con reviewers, including Jen.',
    },
    {
      org: 'Ellington Cyber Academy',
      role: '2023 Keystone project judge for Academy students',
      icon: '🎓',
      detailTitle: 'Previous Keystone project judge',
      details:
        'Sat on a panel of industry experts providing feedback and guidance to students on their keystoneprojects.',
      href: 'https://kenneth-ellington-s-school.teachable.com/',
      hrefLabel: 'Ellington Cyber Academy',
      photoSrc: '/community-work/ECA-screengrab.png',
      photoAlt:
        'Ellington Cyber Academy chat with founder Kenneth Ellington about cyber threat intelligence.',
      secondaryHref: 'https://youtu.be/yrJYkaGzPrQ?si=kw23JVt5MVEs5aCs',
      secondaryHrefLabel: 'Jen\'s Interview with Kenneth Ellington',
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-eyebrow">About Jen</div>
        <h1 className="page-hero-title">
          Walk the <em>Walk</em>
        </h1>
        <p className="page-hero-desc" style={{ maxWidth: '620px' }}>
          Who am I to be running my mouth like this? Very valid question. Here's the full picture.
        </p>
        <div style={{
          display: 'flex',
          gap: '4px',
          marginTop: '36px',
          flexWrap: 'wrap',
        }}>
          {[
            { label: 'Experience', href: '#experience' },
            { label: 'Community Work', href: '#community' },
            { label: 'Beyond CTI', href: '#beyond' },
          ].map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,242,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '3px',
              padding: '8px 14px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--gold)';
              e.currentTarget.style.borderColor = 'rgba(201,165,90,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(250,247,242,0.5)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
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

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          Experience
          <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          marginBottom: '12px',
        }}>The highlights</h2>
        <p style={{
          fontSize: '14px',
          color: 'var(--mid)',
          fontWeight: 300,
          maxWidth: '620px',
          lineHeight: 1.75,
          marginBottom: '42px',
        }}>
          My day-to-day work is building and operationalizing threat intelligence that creates measurable outcomes: sharper detections, faster incident response, and clearer executive decision support.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '10px',
          marginBottom: '10px',
        }}>
          {experienceSnapshot.map((item, i) => (
            <div key={i} style={{
              background: 'var(--warm-white)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              padding: '18px',
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold-dim)',
                marginBottom: '8px',
              }}>
                {item.label}
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--ink)',
                lineHeight: 1.25,
              }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '24px' }}>
          <a href="/experience" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--gold-dim)',
            border: '1px solid rgba(201,165,90,0.35)',
            borderRadius: '3px',
            padding: '10px 14px',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            View full experience details →
          </a>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, var(--cream), var(--border), var(--cream))' }} />

      {/* ── COMMUNITY WORK ── */}
      <section id="community" style={{ padding: '80px 48px', background: 'var(--warm-white)' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          Community Work
          <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          marginBottom: '12px',
        }}>Giving back</h2>
        <p style={{
          fontSize: '14px',
          color: 'var(--mid)',
          fontWeight: 300,
          maxWidth: '620px',
          lineHeight: 1.7,
          marginBottom: '48px',
        }}>
          Cyber Threat Intelligence is nothing without the community around you sharing valuable insights. Here's some of the work Jen has done with the always fantastic CTI community.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '14px',
        }}>
          {communityItems.map((item, i) => (
            <article key={i} style={{
              background: 'var(--warm-white)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.18s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,165,90,0.4)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(45,27,61,0.07)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{
                width: '100%',
                aspectRatio: '16 / 9',
                background: 'rgba(201,165,90,0.06)',
                borderBottom: '1px solid var(--border)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {item.photoSrc ? (
                  <Image
                    src={item.photoSrc}
                    alt={item.photoAlt || `${item.org} highlight`}
                    width={800}
                    height={450}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: item.photoFit === 'contain' ? 'contain' : 'cover',
                      background: item.photoFit === 'contain' ? 'var(--warm-white)' : 'transparent',
                    }}
                  />
                ) : (
                  <span style={{ fontSize: '42px', opacity: 0.75 }}>{item.previewIcon || item.icon}</span>
                )}
              </div>

              <div style={{ padding: '18px 20px 20px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                }}>
                  <span style={{ fontSize: '17px', lineHeight: 1 }}>{item.icon}</span>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    lineHeight: 1.2,
                  }}>
                    {item.org}
                  </h3>
                </div>

                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-dim)',
                  marginBottom: '10px',
                }}>
                  {item.role}
                </div>

                {item.details && (
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--mid)',
                    lineHeight: 1.65,
                    fontWeight: 300,
                    marginBottom: '10px',
                  }}>
                    {item.details}
                  </p>
                )}

                {(item.href || item.secondaryHref) && (
                  <div style={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap',
                  }}>
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: '10px',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--gold-dim)',
                          textDecoration: 'none',
                        }}
                      >
                        {item.hrefLabel || 'View'} ↗
                      </a>
                    )}
                    {item.secondaryHref && (
                      <a
                        href={item.secondaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: '10px',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--gold-dim)',
                          textDecoration: 'none',
                        }}
                      >
                        {item.secondaryHrefLabel || 'Learn more'} ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, var(--warm-white), var(--border), var(--warm-white))' }} />

      {/* ── BEYOND CTI ── */}
      <section id="beyond" style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          Beyond CTI
          <span style={{ display: 'block', width: '28px', height: '1px', background: 'var(--gold)', opacity: 0.4 }} />
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          marginBottom: '12px',
        }}>The full picture</h2>
        <p style={{
          fontSize: '14px',
          color: 'var(--mid)',
          fontWeight: 300,
          maxWidth: '520px',
          lineHeight: 1.7,
          marginBottom: '56px',
        }}>
          You came here for CTI resources, but here's what makes me, me.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}>
          {[
            {
              icon: '💪',
              title: 'Fitness',
              photos: [
                { src: '/About/Gym.JPG', alt: 'Jen coaching and training in the gym.' },
                { src: '/About/snatch.png', alt: 'Jen olympic lifting at the gym.' },
              ],
              desc: 'I Love lifting and coaching at my local gym. With one actually diagnosed and one self-diagnosed torn rotator cuff, I\'m not as fit as I once was, but it\'s still a huge part of my life.',
            },
            {
              icon: '🪖',
              title: 'Cosplay & 3D Printing',
              photos: [
                { src: '/About/501st-weird-al.JPG', alt: 'Jen in 501st Legion cosplay at an event.' },
                { src: '/About/Captain-Phasma.JPG', alt: 'Jen in Captain Phasma armor.' },
              ],
              desc: "I have 3D printed a full Captain Phasma armor set and am a proud member of the 501st Legion of Star Wars cosplayers (with a DIFFERENT stormtrooper cosplay 😅). I love using fandom for good through charity troops, and San Diego Comic Con is a yearly highlight whenever I can get tickets.",
            },
            {
              icon: '🏰',
              title: 'Big Disney Energy',
              photos: [
                { src: '/About/adam-and-i.jpg', alt: 'Jen enjoying a Disney Parks trip.' },
                { src: '/About/Disney.JPG', alt: 'Jen at Disney with a big smile.' },
              ],
              desc: "One of the biggest reasons I am drawn to Disney is because people are intentionally kind there. Seeing someone go out of their way to make anoter person's day magical makes me cry every time I'm there. My retirement dream is an agency that plans and staffs Disney trips for families and travelers with disabilities.",
            },
            {
              icon: '🖤',
              title: 'Style, Music, and Nerd Culture',
              photos: [
                { src: '/About/When-We-Were-Young.png', alt: 'Jen at the When We Were Young music festival.' },
                { src: '/About/Fashion.png', alt: 'Jen in latex top.' },
                { src: '/About/SDCCDND.jpeg', alt: 'Jen in latex top.' },
              ],
              desc: "You wouldn't know it by looking at me, but I LOVE fashion and am curating my own spooky style as I go. I LOVE Alexander McQueen, Stella McCartney's sustainability, Robert Wun, and I just got this amazing John Hardy dragon ring! They say comedians what to be rock stars and rock stars want to be comedians. I'd be happy with either. Comedy and music run through my veins. I played violin for years and long for more live music in my life. But seeing Brandi Carlile live that time we sat on the floor of SNL with Steve Martin and Martin Short hosting the Christmas episode, that was awesome.  I love RuPaul's Drag Race, I love musicals, I love Baldur's Gate 3 and Dungeons and Dragons but am still looking for my first real campaign if anyone is interested!"},
            {
              icon: '🏀',
              title: 'Family, Recovery, and Home Teams',
              photos: [
                { src: '/About/Detroit-Basketball-3.png', alt: 'Jen representing Detroit basketball spirit.' },
                { src: '/About/Packers.png', alt: 'Jen representing Green Bay Packers spirit.' },
                { src: '/About/sdcc2025.png', alt: 'Jen cheering for Detroit basketball.' },
              ],
              desc: "This is where people tend to get confused. I grew up in Wisconsin. I went to the University of Wisconsin. I love all Wisconsin sports teams. HOWEVER, I also love the Detroit Pistons. The Tigers, Lions, and Red Wings are fine, but I'll always be Brewers, Packers, ... ok I guess the Red Wings win that one. I'm also incredibly proud of my sobriety. I am a recovering alcoholic (always will be) and am proud to be sober since 2018! Finally and probably most importantly, my family and friends bring me more joy than anything and I constantly wish I was spending more time with them <3",
            },
          ].map((item, i) => (
            <article key={i} style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '24px',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '18px',
                alignItems: 'start',
              }}>
                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                  }}>
                    <span style={{ fontSize: '24px', lineHeight: 1 }}>{item.icon}</span>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '30px',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      lineHeight: 1.1,
                    }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--mid)',
                    lineHeight: 1.78,
                    fontWeight: 300,
                    maxWidth: '58ch',
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                  <div style={{
                    display: 'grid',
                    gap: '8px',
                    gridTemplateColumns: item.photos.length > 1 ? '1.2fr 1fr' : '1fr',
                  }}>
                    <div style={{
                      aspectRatio: i % 2 === 0 ? '4 / 3' : '3 / 4',
                      overflow: 'hidden',
                      borderRadius: '14px',
                      border: '1px solid rgba(201,165,90,0.24)',
                      background: 'rgba(201,165,90,0.06)',
                    }}>
                      <Image
                        src={item.photos[0].src}
                        alt={item.photos[0].alt}
                        width={900}
                        height={675}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>

                    {item.photos.length > 1 && (
                      <div style={{
                        display: 'grid',
                        gap: '8px',
                        gridTemplateRows: item.photos.length > 2 ? '1fr 1fr' : '1fr',
                      }}>
                        {item.photos.slice(1, 3).map((photo) => (
                          <div key={photo.src} style={{
                            aspectRatio: item.photos.length > 2 ? '4 / 3' : (i % 2 === 0 ? '3 / 4' : '4 / 3'),
                            overflow: 'hidden',
                            borderRadius: '14px',
                            border: '1px solid rgba(201,165,90,0.2)',
                            background: 'rgba(201,165,90,0.05)',
                          }}>
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              width={600}
                              height={800}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* closing note */}
        <div style={{
          marginTop: '48px',
          padding: '28px 32px',
          background: 'var(--plum)',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}>
          <span style={{ fontSize: '28px', flexShrink: 0 }}>☠</span>
          <p style={{
            fontSize: '15px',
            color: 'rgba(250,247,242,0.7)',
            fontWeight: 300,
            lineHeight: 1.75,
            fontStyle: 'italic',
            fontFamily: "'Cormorant Garamond', serif",
          }}>
            "I could go on and on, but you came here for CTI resources, not me yappin'." — Jen
          </p>
        </div>
      </section>
    </>
  );
}