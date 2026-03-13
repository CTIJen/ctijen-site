'use client';
import { PageHero, GradientRule, SectionHeader, PageContainer, JenNote, ClosingNote } from '@/components/resource-components';

export default function WhereToStartPage() {
  return (
    <>
      <PageHero
        eyebrow="CTIJen Resources"
        title="Where to"
        titleEm="Start"
        desc="New to CTI? This is the page. Don't overcomplicate it — start here, read everything, then branch out."
      />
      <GradientRule />
      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <PageContainer>
          <SectionHeader
            number="The most important resource"
            title="Katie Nickels' CTI Self-Study Plan"
            desc="Start here. Full stop."
          />
          <div style={{
            background: 'var(--warm-white)', border: '1px solid var(--border)',
            borderRadius: '5px', padding: '32px', maxWidth: '760px',
          }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '2px', background: 'rgba(26,107,58,0.1)', color: '#1a6b3a', border: '1px solid rgba(26,107,58,0.2)' }}>Free</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '2px', background: 'rgba(37,99,168,0.1)', color: '#2563a8', border: '1px solid rgba(37,99,168,0.2)' }}>Beginner → Advanced</span>
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>
              A Cyber Threat Intelligence Self-Study Plan
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.75, fontWeight: 300, marginBottom: '20px' }}>
              The best, most comprehensive overview of Cyber Threat Intelligence in existence. From its history and beginnings
              to the philosophical discussion around attribution — this is where anyone interested in CTI should start.
            </p>
            <JenNote>
              I'm not exaggerating when I say this is the single best resource for anyone entering CTI. Katie Nickels is one
              of the most respected practitioners in the field and this self-study plan reflects that. Read it. Then read it again.
            </JenNote>
            <div style={{ marginTop: '20px' }}>
              <a href="https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-1-968b5a8daf9a"
                target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--gold)', color: 'var(--plum)', padding: '12px 24px', borderRadius: '3px', textDecoration: 'none', fontWeight: 500, display: 'inline-block' }}>
                Read the self-study plan →
              </a>
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <SectionHeader number="Also worth reading" title="Getting Started in CTI: 4 Pieces of Advice" />
            <div style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '5px', padding: '28px', maxWidth: '760px' }}>
              <p style={{ fontSize: '14px', color: 'var(--mid)', lineHeight: 1.75, fontWeight: 300, marginBottom: '16px' }}>
                Another Katie Nickels piece from Red Canary — practical, actionable advice on breaking into the field.
                Pairs perfectly with the self-study plan above.
              </p>
              <a href="https://redcanary.com/blog/opinions-insights/getting-started-in-cyber-threat-intelligence/"
                target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-dim)', textDecoration: 'none', border: '1px solid rgba(201,165,90,0.3)', borderRadius: '3px', padding: '10px 20px', display: 'inline-block' }}>
                Read the article →
              </a>
            </div>
          </div>
        </PageContainer>
      </section>
      <ClosingNote
        text="Ready to keep going? Check out the Trainings & Learning page for courses, or the Tools page for your first analyst toolkit."
        linkText="Explore Trainings →"
        linkHref="/trainings"
      />
    </>
  );
}