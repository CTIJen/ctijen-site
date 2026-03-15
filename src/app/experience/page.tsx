import Link from 'next/link';

export const metadata = {
  title: 'Experience - CTIJen',
  description: 'Detailed professional experience, impact, tools, and speaking work for Jen Kwas.',
};

export default function ExperiencePage() {
  const profileSummary =
    'Senior Threat Intelligence Analyst with 8+ years in cybersecurity and 6+ years focused on CTI, specializing in full-lifecycle intelligence programs, AI-assisted automation, and translating threat intelligence into measurable defensive outcomes.';

  const impactHighlights = [
    'Operationalized ThreatConnect workflows and LLM-assisted filtering that reduced low-signal OSINT analysis by 3-5 hours per week.',
    'Led ATT&CK integration and coverage maturity work across 200+ detections with multi-quarter remediation planning.',
    'Implemented cross-functional incident process improvements, including an Andon Cord mechanism that reduced incident creation time by 20%.',
    'Delivered intelligence reports and threat briefings to director and C-staff audiences with business impact framing.',
  ];

  const roles = [
    {
      title: 'Senior Threat Intelligence Analyst',
      org: 'Zendesk (Remote)',
      dates: 'March 2017 - Present',
      bullets: [
        'Own full CTI lifecycle: stakeholder planning, collection, analysis, dissemination, and iterative feedback loops.',
        'Partner across Detection Engineering, Incident Response, Red Team, Compliance, and Vulnerability Management to operationalize intelligence.',
        'Built and maintained TIP workflows to evaluate feeds, automate triage, and route high-fidelity findings into defensive actions.',
        'Translate intelligence into ATT&CK-aligned guidance for detection, hunting, and simulation teams.',
        'Track high-risk actor landscape with recurring reporting and leadership-ready impact summaries.',
      ],
    },
    {
      title: 'IT Global Service Desk Specialist',
      org: 'Zendesk',
      dates: 'March 2017 - 2018',
      bullets: [
        'Resolved enterprise endpoint, SaaS, telephony, and collaboration platform issues in high-volume environments.',
        'Partnered with IAM to support identity provisioning and access control workflows across Okta and OneLogin.',
      ],
    },
    {
      title: 'Genius (Hardware and Software Technician)',
      org: 'Apple - Madison, WI',
      dates: 'January 2014 - March 2017',
      bullets: [
        'Performed certified hardware diagnostics and repair for macOS and iOS devices.',
        'Built strong customer communication habits that now inform clear executive and stakeholder security reporting.',
      ],
    },
  ];

  const tools = [
    'ThreatConnect, Recorded Future, TruSTAR, Pulsedive, ZeroFox, MISP',
    'Splunk, DataDog, Anvilogic',
    'CrowdStrike, Carbon Black, Umbrella, Netskope, Mimecast, AWS',
    'Python, Terraform, Atlantis, GitHub, XSOAR, Torq, Cursor, MCPs, Anthropic/OpenAI models',
    'VirusTotal, DomainTools, Shodan, Talos, URLScan, Jira, Zendesk',
    'MITRE ATT&CK, MITRE DeTT&CT, MITRE INFORM, Diamond Model, Cyber Kill Chain, NIST, CIS, OWASP',
  ];

  const certs = [
    'GIAC GSEC',
    'Recorded Future Certified Analyst',
    'Mandiant Cyber Intelligence Production',
    'SANS FOR578 Cyber Threat Intelligence Class Challenge Coin Recipient',
    'Splunk User Certified',
    'AWS Cloud Practitioner',
    'Zendesk Support Administrator',
    'Python3 - Codecademy',
  ];

  const openSourceProject = {
    title: 'AI-Assisted CTI OSINT Pipeline',
    detail:
      'Open-source Python workflow for CTI triage combining feed ingestion, adversary-aware filtering, LLM validation, deduplication clustering, and analyst-ready outputs (HTML/JSON/Markdown/STIX 2.1).',
    bullets: [
      'Supports configurable RSS/JSON sources and threat actor-focused triage logic.',
      'Includes substantive validation and confidence scoring to improve analyst signal quality.',
      'Originally built as ThreatConnect automation and later open-sourced as a portable community tool.',
    ],
    link: 'https://github.com/ctijen',
  };

  const education = 'B.S. Rehabilitation Psychology - University of Wisconsin-Madison (December 2013)';

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-eyebrow">Experience</div>
        <h1 className="page-hero-title">
          Real-world <em>CTI impact</em>
        </h1>
        <p className="page-hero-desc">
          Detailed background for hiring teams, collaborators, and leaders evaluating practical threat intelligence program experience.
        </p>
        <p
          style={{
            marginTop: '20px',
            maxWidth: '880px',
            color: 'rgba(250,247,242,0.62)',
            lineHeight: 1.75,
            fontSize: '15px',
            fontWeight: 300,
          }}
        >
          {profileSummary}
        </p>
      </section>

      <div
        style={{
          height: '3px',
          background:
            'linear-gradient(to right, var(--plum), var(--gold), var(--dusty-pink), var(--gold), var(--plum))',
        }}
      />

      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div className="eyebrow">Impact Highlights</div>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            marginBottom: '24px',
          }}
        >
          What I deliver
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px' }}>
          {impactHighlights.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'var(--warm-white)',
                border: '1px solid var(--border)',
                borderRadius: '5px',
                padding: '22px',
                color: 'var(--mid)',
                lineHeight: 1.7,
                fontSize: '14px',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: 'linear-gradient(to right, var(--cream), var(--border), var(--cream))' }} />

      <section style={{ padding: '80px 48px', background: 'var(--warm-white)' }}>
        <div className="eyebrow">Professional Timeline</div>
        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            marginBottom: '24px',
          }}
        >
          Roles and responsibilities
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {roles.map((role, i) => (
            <article
              key={i}
              style={{
                background: 'var(--warm-white)',
                border: '1px solid var(--border)',
                borderRadius: '5px',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600 }}>
                  {role.title} <span style={{ color: 'var(--gold-dim)' }}>- {role.org}</span>
                </h3>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--mid)',
                  }}
                >
                  {role.dates}
                </div>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--mid)', lineHeight: 1.75, fontSize: '14px' }}>
                {role.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div style={{ height: '1px', background: 'linear-gradient(to right, var(--warm-white), var(--border), var(--warm-white))' }} />

      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <div className="eyebrow">Open Source Work</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px' }}>Built for CTI teams</h2>
        <article
          style={{
            background: 'var(--warm-white)',
            border: '1px solid var(--border)',
            borderRadius: '5px',
            padding: '22px',
            marginBottom: '28px',
          }}
        >
          <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{openSourceProject.title}</h3>
          <p style={{ color: 'var(--mid)', lineHeight: 1.75, fontSize: '14px', marginBottom: '12px' }}>{openSourceProject.detail}</p>
          <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--mid)', lineHeight: 1.75, fontSize: '14px', marginBottom: '12px' }}>
            {openSourceProject.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <a
            href={openSourceProject.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--gold-dim)',
              textDecoration: 'none',
            }}
          >
            View project on GitHub ↗
          </a>
        </article>

        <div className="eyebrow">Tools and Credentials</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: '24px' }}>Execution stack</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          <div style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '5px', padding: '22px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Tools and Frameworks</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--mid)', lineHeight: 1.75, fontSize: '14px' }}>
              {tools.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '5px', padding: '22px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Certifications and Trainings</h3>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--mid)', lineHeight: 1.75, fontSize: '14px' }}>
              {certs.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: '14px',
            fontSize: '13px',
            color: 'var(--mid)',
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Education:</strong> {education}
        </div>

        <div style={{ marginTop: '28px' }}>
          <Link
            href="/about#community"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--gold-dim)',
              textDecoration: 'none',
              border: '1px solid rgba(201,165,90,0.35)',
              borderRadius: '3px',
              padding: '10px 16px',
              display: 'inline-block',
            }}
          >
            View speaking and community work
          </Link>
        </div>
      </section>
    </>
  );
}
