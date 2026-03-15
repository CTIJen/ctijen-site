'use client';
import { PageHero, GradientRule, SectionHeader, PageContainer, JenNote, Tag, ClosingNote } from '@/components/resource-components';
import React from 'react';

const Check = () => <span style={{ color: '#1a6b3a', fontSize: '16px' }}>✓</span>;
const Cross = () => <span style={{ color: 'var(--border)', fontSize: '16px' }}>–</span>;
const Maybe = () => <span style={{ color: 'var(--gold-dim)', fontSize: '16px' }}>?</span>;

function CapabilityTable({ title, rows }: {
  title: string;
  rows: { name: string; href: string; desc: string; free: boolean | null; hash?: boolean; ip?: boolean; domain?: boolean; url?: boolean; sandbox?: boolean; pdns?: boolean; enrich?: boolean }[];
}) {
  const cols = ['Free', 'Hash', 'IP', 'Domain', 'URL', 'Sandbox', 'Passive DNS', 'Enrichment'];
  const keys = ['free', 'hash', 'ip', 'domain', 'url', 'sandbox', 'pdns', 'enrich'] as const;
  return (
    <div style={{ marginBottom: '48px' }}>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px' }}>{title}</h3>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--border)' }}>
              <th style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mid)', padding: '10px 16px 10px 0', textAlign: 'left', fontWeight: 500, width: '220px' }}>Tool</th>
              {cols.map(col => (
                <th key={col} style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mid)', padding: '10px 12px', textAlign: 'center', fontWeight: 500 }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.01)' }}>
                <td style={{ padding: '14px 16px 14px 0', verticalAlign: 'top' }}>
                  <a href={row.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', display: 'block', marginBottom: '3px' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--dusty-pink-dim)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--ink)'}>
                    {row.name} ↗
                  </a>
                  <span style={{ fontSize: '12px', color: 'var(--mid)', fontWeight: 300 }}>{row.desc}</span>
                </td>
                {keys.map(key => (
                  <td key={key} style={{ padding: '14px 12px', textAlign: 'center', verticalAlign: 'middle' }}>
                    {row[key] === true ? <Check /> : row[key] === false ? <Cross /> : <Maybe />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '11px', color: 'var(--mid)', fontStyle: 'italic', marginTop: '8px', fontWeight: 300 }}>Capabilities may be limited on free versions</p>
    </div>
  );
}

export default function ToolsPage() {
  const tips = [
    { name: 'MISP', href: 'https://www.misp-project.org/', cost: 'Free + paid', effort: 'Easiest', desc: 'Open source threat data sharing platform. Perfect for beginners to see what a TIP is, how to correlate data, and practice collection and processing.', jenNote: "I may catch heat for saying it's easy to implement but I feel MISP is perfect for beginners. Tell me if you disagree!" },
    { name: 'OpenCTI', href: 'https://filigran.io/platforms/opencti/', cost: 'Free + paid', effort: 'Intermediate', desc: 'Great platform, but will take some technical know-how to install if going the free/self-hosted route. Very capable once running.' },
    { name: 'TheHive', href: 'https://github.com/TheHive-Project/TheHive', cost: 'Free', effort: 'Intermediate / Difficult', desc: "TheHive 🤝 MISP. Requires technical know-how to set up, but once it is, it's MISP's best friend and really shines ingesting MISP events.", jenNote: 'TheHive + MISP together is a genuinely powerful combo once you\'ve got them talking to each other.' },
  ];

  return (
    <>
      <PageHero
        eyebrow="CTIJen Resources"
        title="The Analyst"
        titleEm="Toolkit"
        desc="Every tool on this page has been used or evaluated by Jen. No sponsorships, no affiliate links — just the real ones."
      />
      <GradientRule />

      <section style={{ padding: '80px 48px', background: 'var(--cream)' }}>
        <PageContainer>
          <SectionHeader number="01 — Threat Intelligence Platforms" title="TIPs" desc="Ordered by ease of implementation — Jen's opinion." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tips.map((tip, i) => (
              <div key={i} style={{ background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: '5px', display: 'grid', gridTemplateColumns: '200px 140px 1fr', overflow: 'hidden' }}>
                <div style={{ padding: '20px 24px', borderRight: '1px solid var(--border)' }}>
                  <a href={tip.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 700, color: 'var(--ink)', textDecoration: 'none', display: 'block', marginBottom: '6px' }}>{tip.name} ↗</a>
                  <Tag variant="free">{tip.cost}</Tag>
                </div>
                <div style={{ padding: '20px 16px', borderRight: '1px solid var(--border)', display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'var(--mid)', letterSpacing: '0.04em' }}>{tip.effort}</span>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <p style={{ fontSize: '13px', color: 'var(--mid)', lineHeight: 1.7, fontWeight: 300 }}>{tip.desc}</p>
                  {tip.jenNote && (
                    <div style={{ marginTop: '10px', padding: '8px 12px', background: 'rgba(201,165,90,0.07)', borderLeft: '2px solid var(--gold)', borderRadius: '0 3px 3px 0' }}>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '13px', color: 'var(--plum)', lineHeight: 1.6 }}>{tip.jenNote}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <div style={{ height: '1px', background: 'linear-gradient(to right, var(--cream), var(--border), var(--cream))' }} />

      <section style={{ padding: '80px 48px', background: 'var(--warm-white)' }}>
        <PageContainer>
          <SectionHeader number="02 — IOC & Analysis Tools" title="Capability Reference" desc="Quick-reference matrix for what each tool can handle. Great for bookmarking." />
          <CapabilityTable title="IOC Query & Enrichment" rows={[
            { name: 'VirusTotal', href: 'https://www.virustotal.com/gui/home/upload', desc: 'Malware and URL scanning and threat intelligence', free: true, hash: true, ip: true, domain: true, url: true, sandbox: true, pdns: true, enrich: true },
            { name: 'Pulsedive', href: 'https://www.pulsedive.com/', desc: 'Enrich and research IOCs and threats', free: true, hash: false, ip: true, domain: true, url: true, sandbox: false, pdns: true, enrich: true },
            { name: 'Shodan', href: 'https://www.shodan.io/', desc: 'Search engine for internet-connected devices', free: true, hash: false, ip: true, domain: true, url: false, sandbox: false, pdns: true, enrich: true },
            { name: 'AlienVault OTX', href: 'https://otx.alienvault.com/', desc: 'Community-powered threat intel sharing. Noisy — proceed with caution.', free: true, hash: true, ip: true, domain: true, url: true, sandbox: false, pdns: true, enrich: true },
            { name: 'GreyNoise', href: 'https://viz.greynoise.io/', desc: 'Context for IPs scanning the internet', free: true, hash: false, ip: true, domain: false, url: false, sandbox: false, pdns: true, enrich: true },
            { name: 'AbuseIPDB', href: 'https://www.abuseipdb.com/', desc: 'Inspect and report malicious IPs', free: true, hash: false, ip: true, domain: true, url: false, sandbox: false, pdns: false, enrich: true },
          ]} />
          <CapabilityTable title="Malware Analysis & Sandboxes" rows={[
            { name: 'Hybrid Analysis', href: 'https://www.hybrid-analysis.com/', desc: 'Community malware analysis service', free: true, hash: true, ip: true, domain: true, url: true, sandbox: true, pdns: false, enrich: true },
            { name: 'Any.Run', href: 'https://app.any.run/#register', desc: 'Interactive malware sandbox', free: null, hash: true, ip: true, domain: true, url: true, sandbox: true, pdns: false, enrich: true },
            { name: 'Browserling', href: 'https://www.browserling.com/', desc: 'Run and test URLs in live browser sandboxes', free: true, hash: false, ip: false, domain: false, url: false, sandbox: true, pdns: false, enrich: false },
            { name: 'Joe Sandbox', href: 'https://www.joesandbox.com/', desc: 'Advanced malware analysis and threat detection', free: false, hash: true, ip: true, domain: true, url: true, sandbox: true, pdns: true, enrich: true },
            { name: 'Cuckoo Sandbox', href: 'https://cuckoosandbox.org/', desc: 'Open-source automated malware analysis', free: true, hash: false, ip: true, domain: true, url: true, sandbox: true, pdns: false, enrich: true },
          ]} />
          <CapabilityTable title="More Tools Jen Uses Sometimes" rows={[
            { name: 'Maltego', href: 'https://www.maltego.com/', desc: 'Graph-based link analysis for OSINT investigations', free: true, hash: true, ip: false, domain: true, url: true, sandbox: false, pdns: false, enrich: true },
            { name: 'SpiderFoot', href: 'https://github.com/smicallef/spiderfoot', desc: 'Automated OSINT collection and correlation', free: true, hash: true, ip: true, domain: true, url: true, sandbox: false, pdns: false, enrich: true },
            { name: 'urlscan.io', href: 'https://urlscan.io/', desc: 'Scan and visually inspect URLs for threats', free: true, hash: true, ip: false, domain: true, url: true, sandbox: true, pdns: false, enrich: true },
            { name: 'Cisco Talos', href: 'https://talosintelligence.com/', desc: 'Threat intelligence and reputation data', free: true, hash: false, ip: true, domain: true, url: true, sandbox: true, pdns: false, enrich: true },
            { name: 'deobfuscate.relative.im', href: 'https://deobfuscate.relative.im/', desc: 'Lightweight tool to deobfuscate malicious JavaScript', free: true, hash: false, ip: false, domain: false, url: false, sandbox: false, pdns: false, enrich: true },
            { name: 'MXToolbox', href: 'https://mxtoolbox.com/', desc: 'Domain/IP reputation, mail server checks, and DNS tools', free: true, hash: true, ip: false, domain: true, url: true, sandbox: false, pdns: true, enrich: true },
            { name: 'Ghidra', href: 'https://ghidra-sre.org/', desc: "NSA's open-source software reverse engineering framework", free: true, hash: false, ip: true, domain: false, url: false, sandbox: false, pdns: false, enrich: true },
          ]} />
        </PageContainer>
      </section>
      <ClosingNote text="Missing a tool that should be here? Jen's always looking to expand this list." linkText="Suggest a tool →" linkHref="/#contact" />
    </>
  );
}