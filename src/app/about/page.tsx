'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-eyebrow">About Jen</div>
        <h1 className="page-hero-title">
          Walk the <em>Walk</em>
        </h1>
        <p className="page-hero-desc">
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
          marginBottom: '48px',
        }}>The credentials</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px',
        }}>
          {[
            {
              icon: '⚔️',
              title: '11 Years in Tech',
              desc: 'From Genius Bar to Enterprise CTI — a career built on curiosity and a genuine love for solving hard problems.',
            },
            {
              icon: '🏅',
              title: 'Certifications',
              desc: 'Mandiant Intelligence Production, GSEC, AWS Cloud Practitioner. Completed SANS FOR578 and earned the top honors challenge coin.',
            },
            {
              icon: '🎲',
              title: '4 Years in CTI',
              desc: 'Deep in threat actor tradecraft, intelligence production, and community education. Still learning every day.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--warm-white)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              padding: '28px',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '10px',
              }}>{item.title}</div>
              <p style={{
                fontSize: '13px',
                color: 'var(--mid)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}>{item.desc}</p>
            </div>
          ))}
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
          maxWidth: '520px',
          lineHeight: 1.7,
          marginBottom: '48px',
        }}>
          Cyber Threat Intelligence is nothing without the community around you sharing valuable insights. Here's some of the work Jen has done with the always fantastic CTI community.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[
            {
              org: 'Cyberjutsu',
              role: '2023 & 2024 CyberJutsu Con submission review panelist',
              icon: '🥷',
            },
            {
              org: 'Cybersecurity Cares',
              role: '2022–present panelist and participant in annual charity telethon fundraiser',
              icon: '❤️',
            },
            {
              org: 'Ellington Cyber Academy',
              role: '2023 Keystone project judge for Academy students',
              icon: '🎓',
            },
            {
              org: 'Cyversity',
              role: '2023–present Mentee and Mentor for those looking to break into or grow in cybersecurity',
              icon: '🤝',
            },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '48px 200px 1fr',
              gap: '20px',
              alignItems: 'center',
              padding: '20px 24px',
              background: 'var(--warm-white)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
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
              <span style={{ fontSize: '22px' }}>{item.icon}</span>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--ink)',
              }}>{item.org}</div>
              <div style={{
                fontSize: '13px',
                color: 'var(--mid)',
                fontWeight: 300,
                lineHeight: 1.6,
              }}>{item.role}</div>
            </div>
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
          You came here for CTI resources, but here's what makes Jen, Jen.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          {[
            {
              icon: '🏰',
              title: 'Big Disney Energy',
              desc: "I'm drawn to the Disney Parks because almost everyone is actively trying to make everyone else's day better. The kindness there is unmatched — a cast member fishing a Mickey balloon from the rafters, a millennial parent in matching outfits explaining why they love Star Wars. My dream retirement job is a travel agency that helps plan Disney trips for people with disabilities.",
            },
            {
              icon: '💪',
              title: 'Fitness',
              desc: 'I love working out despite one confirmed and one self-diagnosed torn rotator cuff. My back also breaks sometimes. It sucks getting old. 🤣',
            },
            {
              icon: '🪖',
              title: 'Makin\' Stuff & Cosplay',
              desc: "I 3D printed an entire Phasma armor set — probably my biggest accomplishment ever. I'm a proud member of the 501st Legion: movie-accurate Star Wars \"bad guy\" cosplay with a requirement to use your armor for charity once a year. It's amazing.",
            },
            {
              icon: '🎲',
              title: 'Etc.',
              desc: "I love my friends, my family, and the absolute light of my life: my dog, Yumi. Close second: Beyoncé. I'm a recovering alcoholic and celebrated my 5 year soberversary in 2024 🎉 I love all fashion and am cultivating my own goth style. Wisconsin and Michigan sports forever — Brewers baseball and DEEEETROIT BASKETBALL.",
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--warm-white)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              padding: '28px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(45,27,61,0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(201,165,90,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}>
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{item.icon}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '10px',
                lineHeight: 1.2,
              }}>{item.title}</div>
              <p style={{
                fontSize: '13px',
                color: 'var(--mid)',
                lineHeight: 1.75,
                fontWeight: 300,
              }}>{item.desc}</p>
            </div>
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