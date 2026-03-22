import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ok, well THAT one wasn’t the repo…🤭 | Cyber Threat Intelli-Jen™',
  description: 'A sneaky detour with the actual repo link.',
  alternates: {
    canonical: '/sneaky-sneaky-prank-page',
  },
};

export default function SneakySneakyPrankPage() {
  return (
    <section
      style={{
        maxWidth: '980px',
        margin: '0 auto',
        padding: '56px 24px 72px',
      }}
    >
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(34px, 5vw, 56px)',
          color: 'var(--plum)',
          marginBottom: '18px',
          lineHeight: 1.1,
        }}
      >
        Ok, well THAT one wasn&apos;t the repo...🤭
      </h1>

      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          marginBottom: '22px',
        }}
      >
        <iframe
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
          title="Never Gonna Give You Up by Rick Astley"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
        />
      </div>

      <p
        style={{
          fontSize: '17px',
          lineHeight: 1.8,
          color: 'var(--ink)',
          maxWidth: '840px',
        }}
      >
        Thank you so much for taking the time to come to or view or watch my talk. It truly
        means the world to me and I would love to hear your thoughts and feedback! Thank you so
        much again, here is the ACTUAL link you wanted:{' '}
        <a
          href="https://github.com/CTIJen/OSINT-Processing-and-Analysis-Using-AI"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            color: 'var(--dusty-pink-dim)',
          }}
        >
          https://github.com/CTIJen/OSINT-Processing-and-Analysis-Using-AI
        </a>
      </p>
    </section>
  );
}
