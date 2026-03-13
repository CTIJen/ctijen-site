'use client';
import React from 'react';

// ── Shared styles ──────────────────────────────────────────────
export const sectionPad = { padding: '80px 48px' };
export const cream = { background: 'var(--cream)' };
export const warmWhite = { background: 'var(--warm-white)' };
export const plumBg = { background: 'var(--plum)' };

export function GradientRule() {
  return (
    <div style={{
      height: '3px',
      background: 'linear-gradient(to right, var(--plum), var(--gold), var(--dusty-pink), var(--gold), var(--plum))',
    }} />
  );
}

export function ThinRule() {
  return <div style={{ height: '1px', background: 'linear-gradient(to right, var(--cream), var(--border), var(--cream))' }} />;
}

export function PageHero({ eyebrow, title, titleEm, desc }: {
  eyebrow: string;
  title: string;
  titleEm?: string;
  desc: string;
}) {
  return (
    <section style={{
      background: 'var(--plum)',
      padding: '80px 48px 64px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: '48px', top: '32px',
        fontSize: '130px', opacity: 0.04, lineHeight: 1, pointerEvents: 'none',
      }}>☠</div>
      <div style={{ maxWidth: '760px' }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px', letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px',
        }}>{eyebrow}</div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700,
          color: 'var(--cream)', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '16px',
        }}>
          {title}{titleEm && <> <em style={{ fontStyle: 'italic', color: 'var(--dusty-pink)' }}>{titleEm}</em></>}
        </h1>
        <p style={{
          fontSize: '15px', fontWeight: 300,
          color: 'rgba(250,247,242,0.5)', maxWidth: '480px', lineHeight: 1.75,
        }}>{desc}</p>
      </div>
    </section>
  );
}

export function SectionHeader({ number, title, desc, light = false }: {
  number: string; title: string; desc?: string; light?: boolean;
}) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <div style={{
        fontFamily: "'DM Mono', monospace", fontSize: '10px',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--gold)', marginBottom: '10px',
      }}>{number}</div>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700,
        letterSpacing: '-0.01em', marginBottom: desc ? '10px' : '0',
        color: light ? 'var(--cream)' : 'var(--ink)',
      }}>{title}</h2>
      {desc && <p style={{
        fontSize: '14px', color: light ? 'rgba(250,247,242,0.5)' : 'var(--mid)',
        fontWeight: 300, maxWidth: '560px', lineHeight: 1.75,
      }}>{desc}</p>}
    </div>
  );
}

export function ResourceCard({ children, hover = true }: { children: React.ReactNode; hover?: boolean }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        background: 'var(--warm-white)',
        border: `1px solid ${hovered ? 'rgba(201,165,90,0.4)' : 'var(--border)'}`,
        borderRadius: '5px', padding: '24px',
        transition: 'all 0.2s',
        boxShadow: hovered ? '0 6px 24px rgba(45,27,61,0.08)' : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}>
      {children}
    </div>
  );
}

export function Pill({ href, children, variant = 'default' }: {
  href: string; children: React.ReactNode; variant?: 'default' | 'gold' | 'plum';
}) {
  const [hovered, setHovered] = React.useState(false);
  const colors = {
    default: { base: 'var(--mid)', hover: 'var(--ink)', border: 'var(--border)', hoverBg: 'var(--ink)', hoverColor: 'var(--cream)' },
    gold: { base: 'var(--gold-dim)', hover: 'var(--gold-dim)', border: 'rgba(201,165,90,0.3)', hoverBg: 'var(--gold-dim)', hoverColor: '#fff' },
    plum: { base: 'var(--plum)', hover: 'var(--plum)', border: 'rgba(45,27,61,0.2)', hoverBg: 'var(--plum)', hoverColor: 'var(--cream)' },
  }[variant];

  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'DM Mono', monospace", fontSize: '10px',
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: hovered ? colors.hoverColor : colors.base,
        textDecoration: 'none',
        border: `1px solid ${colors.border}`,
        borderRadius: '2px', padding: '4px 10px',
        display: 'inline-block', transition: 'all 0.15s',
        background: hovered ? colors.hoverBg : 'transparent',
        whiteSpace: 'nowrap' as const,
      }}>
      {children}
    </a>
  );
}

export function JenNote({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      marginTop: '12px',
      padding: '10px 14px',
      background: 'rgba(201,165,90,0.07)',
      borderLeft: '2px solid var(--gold)',
      borderRadius: '0 3px 3px 0',
    }}>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: '9px',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--gold-dim)', display: 'block', marginBottom: '4px',
      }}>Jen's note</span>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
        fontSize: '14px', color: 'var(--plum)', lineHeight: 1.6,
      }}>{children}</p>
    </div>
  );
}

export function Tag({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'free' | 'paid' | 'default' | 'beginner' | 'advanced' }) {
  const styles = {
    free: { bg: 'rgba(26,107,58,0.1)', color: '#1a6b3a', border: 'rgba(26,107,58,0.2)' },
    paid: { bg: 'rgba(180,83,9,0.1)', color: '#b45309', border: 'rgba(180,83,9,0.2)' },
    beginner: { bg: 'rgba(37,99,168,0.1)', color: '#2563a8', border: 'rgba(37,99,168,0.2)' },
    advanced: { bg: 'rgba(45,27,61,0.1)', color: 'var(--plum)', border: 'rgba(45,27,61,0.2)' },
    default: { bg: 'rgba(201,165,90,0.1)', color: 'var(--gold-dim)', border: 'rgba(201,165,90,0.2)' },
  }[variant];

  return (
    <span style={{
      fontFamily: "'DM Mono', monospace", fontSize: '9px',
      letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '3px 8px', borderRadius: '2px',
      background: styles.bg, color: styles.color,
      border: `1px solid ${styles.border}`,
      display: 'inline-block',
    }}>{children}</span>
  );
}

export function ClosingNote({ text, linkText, linkHref }: { text: string; linkText: string; linkHref: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div style={{
      background: 'var(--plum)', padding: '32px 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '24px', borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: '15px',
        fontStyle: 'italic', color: 'rgba(250,247,242,0.5)', lineHeight: 1.6, maxWidth: '560px',
      }}>{text}</p>
      <a href={linkHref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "'DM Mono', monospace", fontSize: '10px',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: hovered ? 'var(--plum)' : 'var(--gold)',
          textDecoration: 'none',
          border: '1px solid rgba(201,165,90,0.3)',
          borderRadius: '3px', padding: '12px 24px',
          whiteSpace: 'nowrap' as const, transition: 'all 0.2s', flexShrink: 0,
          background: hovered ? 'var(--gold)' : 'transparent',
        }}>
        {linkText}
      </a>
    </div>
  );
}