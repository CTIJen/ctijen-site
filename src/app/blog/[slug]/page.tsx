import { getPostBySlug, getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata(props: any) {
    const { slug } = await props.params;
    const post = await getPostBySlug(slug);
    if (!post) return {};
    return {
      title: `${post.title} — CTIJen™`,
      description: post.excerpt,
    };
  }
  
  export default async function PostPage(props: any) {
    const { slug } = await props.params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();

  return (
    <>
      {/* POST HERO */}
      <section style={{
        background: 'var(--plum)',
        padding: '80px 48px 64px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          right: '48px', top: '32px',
          fontSize: '130px',
          opacity: 0.04,
          lineHeight: 1,
          pointerEvents: 'none',
        }}>☠</div>

        <div style={{ maxWidth: '760px' }}>
          <Link href="/blog" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(250,247,242,0.4)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '32px',
          }}>
            ← Back to blog
          </Link>

          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '16px',
          }}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            color: 'var(--cream)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: '20px',
          }}>
            {post.title}
          </h1>

          {post.excerpt && (
            <p style={{
              fontSize: '16px',
              fontWeight: 300,
              color: 'rgba(250,247,242,0.55)',
              lineHeight: 1.75,
              maxWidth: '560px',
              fontStyle: 'italic',
              fontFamily: "'Cormorant Garamond', serif",
            }}>
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* GRADIENT RULE */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(to right, var(--plum), var(--gold), var(--dusty-pink), var(--gold), var(--plum))',
      }} />

     {/* POST CONTENT */}
<section style={{ 
  padding: '64px 0 96px', 
  background: 'var(--cream)',
  width: '100%',
}}>
  <div style={{ 
    maxWidth: '760px', 
    margin: '0 auto',
    padding: '0 24px',
  }}>
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: post.content }}
    />

    <div style={{
      marginTop: '64px',
      paddingTop: '32px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Link href="/blog" style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--gold-dim)',
        textDecoration: 'none',
        border: '1px solid rgba(201,165,90,0.3)',
        borderRadius: '3px',
        padding: '10px 20px',
      }}>
        ← All posts
      </Link>
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        color: 'var(--mid)',
        letterSpacing: '0.1em',
      }}>CTIJen™</span>
    </div>
  </div>
</section>
    </>
  );
}