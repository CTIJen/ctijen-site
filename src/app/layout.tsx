import './globals.css';

export const metadata = {
  title: 'Cyber Threat Intelli-Jen™',
  description: 'Everything CTI — resources, people, tools, and community curated by Jen.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <a href="/" className="nav-logo">
            CTI<span>Jen</span>™
          </a>
          <ul className="nav-links">
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="https://ctijen.myshopify.com" target="_blank">Merch</a></li>
            <li><a href="/#contact" className="nav-cta">Contact</a></li>
          </ul>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          <div>
            <div className="footer-logo">CTI<span>Jen</span>™</div>
            <p className="footer-tagline">
              An ever-growing one-stop shop for threat intelligence resources.
            </p>
            <div className="footer-social">
              <a href="https://ctijen.myshopify.com" target="_blank">Merch</a>
              <a href="/blog">Blog</a>
              <a href="/#contact">Contact</a>
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