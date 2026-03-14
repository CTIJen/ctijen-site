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
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
    { label: 'Merch', href: 'https://ctijen.myshopify.com', external: true },
    { label: 'Contact', href: '/#contact', cta: true },
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