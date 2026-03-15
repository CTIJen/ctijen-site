'use client';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
    { label: 'Merch', href: 'https://ctijen.myshopify.com', external: true },
    { label: 'Contact', href: '/#contact', cta: true },
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jen-k-3920b2b4/',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.94 8.5v9.56M6.94 5.93a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM11.67 18.06V8.5h4.2a3.1 3.1 0 0 1 3.1 3.1v6.46M11.67 12.7a3.65 3.65 0 0 1 3.65-3.65" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/cti_jen/',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.3" />
          <circle cx="12" cy="12" r="3.7" />
          <circle cx="17" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@ctijen',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 5.2v8.4a3.2 3.2 0 1 1-2.5-3.1" />
          <path d="M13 7.1c1 1.7 2.2 2.6 4 2.8" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/share/19zDXpmzxw/',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13.4 20v-7h2.4l.4-3h-2.8V8.4c0-.9.3-1.5 1.6-1.5h1.4V4.2A15.2 15.2 0 0 0 15 4c-2.6 0-4.3 1.6-4.3 4.4V10H8.3v3h2.4v7" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: scrolled ? 'rgba(29,17,42,0.97)' : 'var(--plum)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '62px',
        transition: 'background 0.3s',
      }}>
        {/* Logo */}
        <a href="/" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '20px', fontWeight: 600,
          color: 'var(--cream)', textDecoration: 'none',
          letterSpacing: '0.01em', flexShrink: 0,
        }}>
          CTI<span style={{ color: 'var(--gold)' }}>Jen</span>™
        </a>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', alignItems: 'center', gap: '2px',
          listStyle: 'none', margin: 0, padding: 0,
        }} className="desktop-nav">
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px', letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: link.cta ? 'var(--gold)' : 'rgba(250,247,242,0.55)',
                  textDecoration: 'none',
                  padding: '8px 14px', borderRadius: '3px',
                  border: link.cta ? '1px solid rgba(201,165,90,0.3)' : 'none',
                  marginLeft: link.cta ? '8px' : '0',
                  transition: 'color 0.2s, background 0.2s',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  if (link.cta) {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(201,165,90,0.1)';
                  } else {
                    (e.currentTarget as HTMLElement).style.color = 'var(--cream)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = link.cta ? 'var(--gold)' : 'rgba(250,247,242,0.55)';
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none',
            cursor: 'pointer', padding: '8px',
            display: 'none', flexDirection: 'column',
            gap: '5px', alignItems: 'center',
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--cream)', borderRadius: '2px',
            transition: 'all 0.25s',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--cream)', borderRadius: '2px',
            transition: 'all 0.25s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--cream)', borderRadius: '2px',
            transition: 'all 0.25s',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(15,10,22,0.6)',
        backdropFilter: 'blur(4px)',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.25s',
      }}
      onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '280px', zIndex: 100,
        background: 'var(--plum)',
        borderLeft: '1px solid rgba(255,255,255,0.08)',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex', flexDirection: 'column',
        padding: '80px 32px 48px',
        gap: '4px',
      }}>
        {/* skull watermark */}
        <div style={{
          position: 'absolute', bottom: '24px', right: '24px',
          fontSize: '80px', opacity: 0.05, lineHeight: 1,
          pointerEvents: 'none', userSelect: 'none',
        }}>☠</div>

        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '9px', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--gold)',
          marginBottom: '24px',
        }}>Navigation</div>

        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '28px', fontWeight: 600,
              color: link.cta ? 'var(--gold)' : 'var(--cream)',
              textDecoration: 'none', lineHeight: 1.2,
              padding: '10px 0',
              borderBottom: i < links.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              transition: 'color 0.15s',
              display: 'block',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = link.cta ? 'var(--cream)' : 'var(--gold)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = link.cta ? 'var(--gold)' : 'var(--cream)';
            }}
          >
            {link.label}
          </a>
        ))}

        <div style={{ marginTop: 'auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px',
          }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                onClick={() => setMenuOpen(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(250,247,242,0.55)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  const element = e.currentTarget as HTMLElement;
                  element.style.color = 'var(--gold)';
                  element.style.borderColor = 'rgba(201,165,90,0.45)';
                  element.style.background = 'rgba(201,165,90,0.08)';
                }}
                onMouseLeave={e => {
                  const element = e.currentTarget as HTMLElement;
                  element.style.color = 'rgba(250,247,242,0.55)';
                  element.style.borderColor = 'rgba(255,255,255,0.12)';
                  element.style.background = 'transparent';
                }}
              >
                <span style={{ width: '16px', height: '16px', display: 'inline-flex' }}>
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px', color: 'rgba(250,247,242,0.3)',
            letterSpacing: '0.06em', lineHeight: 1.6,
          }}>
            inquiries@ctijen.com
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
}