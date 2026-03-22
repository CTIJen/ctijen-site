import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Cyber Threat Intelli-Jen™',
  description: 'Accessibility statement and WCAG alignment details for ctijen.com.',
  alternates: {
    canonical: '/accessibility',
  },
};

export default function AccessibilityPage() {
  return (
    <section
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '56px 24px 80px',
        lineHeight: 1.8,
      }}
    >
      <p
        className="eyebrow"
        style={{ marginBottom: '16px' }}
      >
        Accessibility
      </p>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(34px, 5vw, 54px)',
          color: 'var(--plum)',
          marginBottom: '14px',
          lineHeight: 1.1,
        }}
      >
        Accessibility Statement
      </h1>
      <p style={{ color: 'var(--mid)', marginBottom: '28px' }}>
        Last updated: March 22, 2026
      </p>

      <p style={{ marginBottom: '18px' }}>
        Cyber Threat Intelli-Jen strives to provide an inclusive experience for all visitors.
        This site is designed and maintained with the goal of aligning to WCAG 2.2 Level AA.
      </p>
      <p style={{ marginBottom: '18px' }}>
        Current accessibility practices include keyboard navigability, visible focus indicators,
        semantic markup, scalable text, and color contrast checks for primary UI patterns.
      </p>
      <p style={{ marginBottom: '18px' }}>
        Accessibility is an ongoing effort. If you encounter a barrier, please reach out so it can
        be fixed quickly.
      </p>

      <div
        style={{
          marginTop: '28px',
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <Link href="/#contact" className="pill pill-gold">
          Report an accessibility issue
        </Link>
        <Link href="/" className="pill">
          Back to home
        </Link>
      </div>
    </section>
  );
}
