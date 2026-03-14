import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Blog — CTIJen™',
  description: 'Thoughts, analysis, and writing on cyber threat intelligence from Jen.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-eyebrow">CTIJen™ Writing</div>
        <h1 className="page-hero-title">
          From the <em>Scroll</em>
        </h1>
        <p className="page-hero-desc">
          Thoughts, analysis, and writing on cyber threat intelligence. Longer form than a tweet, shorter than a whitepaper.
        </p>
      </section>

      {/* GRADIENT RULE */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(to right, var(--plum), var(--gold), var(--dusty-pink), var(--gold), var(--plum))',
      }} />

      {/* POSTS */}
      <section style={{ padding: '80px 0', background: 'var(--cream)', minHeight: '60vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 48px' }}>
        {posts.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px 0',
            color: 'var(--mid)',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>📜</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '24px',
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: '8px',
            }}>No posts yet</div>
            <p style={{ fontSize: '14px', fontWeight: 300 }}>
              Check back soon — the scroll is being prepared.
            </p>
          </div>
        ) : (
          <div style={{ maxWidth: '760px' }}>
            {/* post count header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              paddingBottom: '24px',
              borderBottom: '1px solid var(--border)',
              marginBottom: '0',
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}>
                {posts.length} {posts.length === 1 ? 'post' : 'posts'}
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--mid)',
              }}>Most recent first</div>
            </div>

            {/* post list */}
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '32px',
                alignItems: 'start',
                padding: '32px 0',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'background 0.2s',
              }}>
                {/* date */}
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--mid)',
                  letterSpacing: '0.06em',
                  paddingTop: '4px',
                }}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>

                {/* content */}
                <div>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--ink)',
                    lineHeight: 1.2,
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s',
                  }}>
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--mid)',
                      lineHeight: 1.7,
                      fontWeight: 300,
                      marginBottom: '14px',
                    }}>
                      {post.excerpt}
                    </p>
                  )}
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    Read post <span style={{ fontSize: '14px' }}>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
       </div>
      </section>
    </>
  );
}