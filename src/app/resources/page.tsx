'use client';
import { PageHero, GradientRule, PageContainer, ClosingNote } from '@/components/resource-components';
import { useState } from 'react';

const resources = [
  {
    emoji: '🗺️',
    tag: 'Start Here',
    title: 'Where to Start with CTI',
    desc: "New to CTI? This is the first page you should read. Katie Nickels' self-study plan and the foundational resources to get you oriented.",
    href: '/where-to-start',
    highlight: true,
  },
  {
    emoji: '🎓',
    tag: 'Learn',
    title: 'Trainings & Learning',
    desc: 'Free and paid courses, self-study resources, and vendor trainings evaluated by Jen. From beginner-friendly to advanced.',
    href: '/trainings',
    highlight: false,
  },
  {
    emoji: '🛠️',
    tag: 'Tooling',
    title: 'Tools',
    desc: 'The analyst toolkit — TIPs, IOC enrichment, sandboxes, and more. Includes a full capability matrix so you know exactly what each tool does.',
    href: '/tools',
    highlight: false,
  },
  {
    emoji: '👥',
    tag: 'Community',
    title: 'People, Orgs & Communities',
    desc: 'Who to follow, which organizations produce the best research, and where to find your people in the CTI community.',
    href: '/people-orgs-communities',
    highlight: false,
  },
  {
    emoji: '🏅',
    tag: 'Career',
    title: 'Certifications',
    desc: "CTI certifications worth knowing about, what they cost, and Jen's honest take on when you should and shouldn't pursue them.",
    href: '/certifications',
    highlight: false,
  },
  {
    emoji: '🎤',
    tag: 'Events',
    title: 'Cons & Conferences 😎',
    desc: "Where the community convenes — from DEF CON to SANS CTI Summit to local BSides. Includes pricing tiers and Jen's personal favorites.",
    href: '/conferences',
    highlight: false,
  },
  {
    emoji: '🎙️',
    tag: 'Audio',
    title: 'Podcasts',
    desc: 'CTI-specific and general security podcasts worth your commute. Curated for signal, not just volume.',
    href: '/podcasts',
    highlight: false,
  },
  {
    emoji: '💼',
    tag: 'Career',
    title: 'Jobs',
    desc: 'Where to find CTI and cybersecurity roles, plus a note on job titles — because CTI positions go by a lot of different names.',
    href: '/jobs',
    highlight: false,
  },
  {
    emoji: '🦹',
    tag: 'Intel',
    title: 'Cyber Threat Actors',
    desc: "Know your adversaries. Jen's recommended threat actor databases and references — no reinventing the wheel.",
    href: '/threat-actors',
    highlight: false,
  },
  {
    emoji: '🤝',
    tag: 'Community',
    title: 'Mentorship Opportunities',
    desc: 'Programs Jen has personally participated in or recommends for breaking into CTI and growing in the field.',
    href: '/mentorship',
    highlight: false,
  },
  {
    emoji: '❓',
    tag: 'Reference',
    title: 'FAQs',
    desc: 'The questions Jen gets asked most often — what CTI actually is, how to break in, which certs to get, and more.',
    href: '/faqs',
    highlight: false,
  },
];

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={resource.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        background: resource.highlight ? 'var(--plum)' : 'var(--warm-white)',
        border: `1px solid ${hovered
          ? resource.highlight ? 'rgba(201,165,90,0.5)' : 'rgba(201,165,90,0.4)'
          : resource.highlight ? 'rgba(201,165,90,0.2)' : 'var(--border)'}`,
        borderRadius: '5px',
        padding: '28px',
        transition: 'all 0.2s',
        boxShadow: hovered ? '0 8px 32px rgba(45,27,61,0.1)' : 'none',
        transform: hovered ? 'translateY(-3px)' : 'none',
        position: 'relative' as const,
        overflow: 'hidden',
      }}
    >
      {resource.highlight && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(to right, var(--gold), var(--dusty-pink))',
        }} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <span style={{ fontSize: '28px', lineHeight: 1 }}>{resource.emoji}</span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '3px 8px', borderRadius: '2px',
          background: resource.highlight ? 'rgba(201,165,90,0.15)' : 'rgba(45,27,61,0.07)',
          color: resource.highlight ? 'var(--gold)' : 'var(--mid)',
          border: `1px solid ${resource.highlight ? 'rgba(201,165,90,0.25)' : 'var(--border)'}`,
        }}>{resource.tag}</span>
      </div>

      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '19px', fontWeight: 700,
        color: resource.highlight ? 'var(--cream)' : 'var(--ink)',
        marginBottom: '10px', lineHeight: 1.2,
      }}>
        {resource.title}
      </div>

      <p style={{
        fontSize: '13px', fontWeight: 300, lineHeight: 1.7,
        color: resource.highlight ? 'rgba(250,247,242,0.6)' : 'var(--mid)',
        marginBottom: '16px',
      }}>
        {resource.desc}
      </p>

      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase',
        color: resource.highlight ? 'var(--gold)' : 'var(--gold-dim)',
        display: 'flex', alignItems: 'center', gap: hovered ? '10px' : '6px',
        transition: 'gap 0.2s',
      }}>
        Explore <span style={{ fontSize: '14px' }}>→</span>
      </span>
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="CTIJen Resources"
        title="The"
        titleEm="Compendium"
        desc="An ever-growing, one-stop shop for CTI resources. New to the field or deep in the weeds, there's something here for you."
      />
      <GradientRule />

      <section style={{ padding: '80px 0', background: 'var(--cream)' }}>
        <PageContainer>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            marginBottom: '48px', paddingBottom: '32px',
            borderBottom: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: '32px', flexShrink: 0 }}>☠</div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontSize: '17px',
              color: 'var(--mid)', fontWeight: 300, lineHeight: 1.75,
            }}>
              None of these are sponsored. No affiliate links. No compensation received.
              Just resources I've used, evaluated, or recommend!
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '12px',
          }}>
            {resources.map((resource, i) => (
              <ResourceCard key={i} resource={resource} />
            ))}
          </div>
        </PageContainer>
      </section>

      <ClosingNote
        text="Something missing from the compendium? I'm always looking to add more!"
        linkText="Make a suggestion →"
        linkHref="/#contact"
      />
    </>
  );
}