import './globals.css';
import Nav from '@/components/Nav';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jen-k-3920b2b4/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5v9.56M6.94 5.93a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM11.67 18.06V8.5h4.2a3.1 3.1 0 0 1 3.1 3.1v6.46M11.67 12.7a3.65 3.65 0 0 1 3.65-3.65" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cti_jen/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 5.2v8.4a3.2 3.2 0 1 1-2.5-3.1" />
        <path d="M13 7.1c1 1.7 2.2 2.6 4 2.8" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/share/19zDXpmzxw/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.4 20v-7h2.4l.4-3h-2.8V8.4c0-.9.3-1.5 1.6-1.5h1.4V4.2A15.2 15.2 0 0 0 15 4c-2.6 0-4.3 1.6-4.3 4.4V10H8.3v3h2.4v7" />
      </svg>
    ),
  },
];

export const metadata = {
  title: 'Cyber Threat Intelli-Jen™',
  description: 'Everything CTI: resources, people, tools, and community',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>

        <footer className="footer">
          <div>
            <div className="footer-logo">CTI<span>Jen</span>™</div>
            <p className="footer-tagline">
              An ever-growing one-stop shop for threat intelligence resources.
            </p>
            <div className="footer-links">
              <a href="https://ctijen.myshopify.com" target="_blank" rel="noopener noreferrer">Merch</a>
              <a href="/blog">Blog</a>
              <a href="/#contact">Contact</a>
            </div>
            <div className="footer-social" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-right">
            <span className="footer-skull">☠</span>
            <p>I do not represent or speak for my employer.</p>
            <p>All opinions are my own.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}