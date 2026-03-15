import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: 'var(--plum)',
        padding: '96px 48px 80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {[500, 700, 900].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${size}px`, height: `${size}px`,
            borderRadius: '50%',
            border: '1px solid rgba(201,165,90,0.06)',
            pointerEvents: 'none',
          }}/>
        ))}

        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '480px',
          opacity: 0.025,
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>☠</div>

        <div style={{position:'relative', zIndex:1}}>
          <div className="fade-1" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <span style={{display:'block',width:'40px',height:'1px',background:'var(--gold)',opacity:0.4}}/>
            Cyber Threat Intelligence
            <span style={{display:'block',width:'40px',height:'1px',background:'var(--gold)',opacity:0.4}}/>
          </div>

          <h1 className="fade-2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(56px, 9vw, 120px)',
            fontWeight: 700,
            color: 'var(--cream)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '36px',
          }}>
            Hey,<br/>
            I'm <em style={{fontStyle:'italic', color:'var(--dusty-pink)'}}>Jen.</em>
          </h1>

          <div className="fade-3" style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 36px',
            border: '3px solid rgba(201,165,90,0.3)',
            boxShadow: '0 0 0 8px rgba(201,165,90,0.06), 0 24px 48px rgba(0,0,0,0.4)',
            position: 'relative',
            flexShrink: 0,
          }}>
            <Image
              src="/TJS_5103(1).jpg"
              alt="Jen — Cyber Threat Intelli-Jen"
              fill
              style={{objectFit:'cover', objectPosition:'center top'}}
              priority
            />
          </div>

          <p className="fade-3" style={{
            fontSize: '17px',
            fontWeight: 300,
            color: 'rgba(250,247,242,0.58)',
            lineHeight: 1.8,
            maxWidth: '520px',
            margin: '0 auto 40px',
          }}>
            I love researching threat actors and their tradecraft to share with the community
            and anyone interested in the field. This site is an ever-growing
            one-stop shop for CTI. Check out the resources and let me know what to add!
          </p>

          <div className="fade-4" style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="/where-to-start" style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              background: 'var(--gold)',
              color: 'var(--plum)',
              padding: '15px 32px',
              borderRadius: '3px',
              textDecoration: 'none',
              fontWeight: 500,
            }}>
              Explore Resources →
            </a>
            <a href="/about" style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              border: '1px solid rgba(250,247,242,0.18)',
              color: 'rgba(250,247,242,0.65)',
              padding: '15px 32px',
              borderRadius: '3px',
              textDecoration: 'none',
            }}>
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* ── GRADIENT RULE ── */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(to right, var(--plum), var(--gold), var(--dusty-pink), var(--gold), var(--plum))',
      }}/>

      {/* ── RESOURCES ── */}
      <section style={{
        padding: '96px 48px',
        background: 'var(--cream)',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}>
          <span style={{display:'block',width:'40px',height:'1px',background:'var(--gold)',opacity:0.4}}/>
          The Compendium
          <span style={{display:'block',width:'40px',height:'1px',background:'var(--gold)',opacity:0.4}}/>
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 700,
          marginBottom: '12px',
          letterSpacing: '-0.01em',
          color: 'var(--ink)',
        }}>
          Everything CTI, in one place
        </h2>

        <p style={{
          fontSize: '15px',
          color: 'var(--mid)',
          fontWeight: 300,
          maxWidth: '480px',
          margin: '0 auto 60px',
          lineHeight: 1.8,
        }}>
          Whether you're just starting out or deep in the weeds,
          there's something for every level of your CTI journey
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '12px',
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'left',
        }}>
          {[
            { emoji: '🗺️', title: 'Where to Start', desc: 'New to CTI? Start here.', href: '/where-to-start', tag: 'Beginner' },
            { emoji: '🎓', title: 'Trainings & Learning', desc: 'Courses, certs, and self-study paths.', href: '/trainings', tag: 'Learn' },
            { emoji: '🛠️', title: 'Tools', desc: 'The analyst toolkit, curated.', href: '/tools', tag: 'Tooling' },
            { emoji: '👥', title: 'People & Communities', desc: 'Who to follow, where to gather.', href: '/people-orgs-communities', tag: 'Community' },
            { emoji: '🏅', title: 'Certifications', desc: 'Certs worth your time and money.', href: '/certifications', tag: 'Career' },
            { emoji: '🎤', title: 'Cons & Conferences', desc: 'Where the community convenes.', href: '/conferences', tag: 'Events' },
            { emoji: '🎙️', title: 'Podcasts', desc: 'Good listens for the commute.', href: '/podcasts', tag: 'Audio' },
            { emoji: '💼', title: 'Jobs', desc: 'CTI roles worth knowing about.', href: '/jobs', tag: 'Career' },
            { emoji: '🦹', title: 'Threat Actors', desc: 'Know your adversaries.', href: '/threat-actors', tag: 'Intel' },
            { emoji: '🤝', title: 'Mentorship', desc: 'Opportunities to learn and give back.', href: '/mentorship', tag: 'Community' },
          ].map((item, i) => (
            <a key={i} href={item.href} style={{
              background: 'var(--warm-white)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              padding: '24px',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              transition: 'all 0.22s',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
              }}>
                <span style={{fontSize:'22px'}}>{item.emoji}</span>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--mid)',
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  padding: '2px 7px',
                }}>{item.tag}</span>
              </div>
              <div style={{
                fontSize: '15px',
                fontWeight: 500,
                marginBottom: '6px',
                color: 'var(--ink)',
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: '0.01em',
              }}>{item.title}</div>
              <div style={{
                fontSize: '12px',
                color: 'var(--mid)',
                fontWeight: 300,
                lineHeight: 1.6,
              }}>{item.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── BLOG TEASER ── */}
      <div style={{height:'1px', background:'linear-gradient(to right, var(--cream), var(--border), var(--cream))'}}/>
      <section style={{
        padding: '80px 48px',
        background: 'var(--cream)',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '10px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}>
          <span style={{display:'block',width:'40px',height:'1px',background:'var(--gold)',opacity:0.4}}/>
          From the Scroll
          <span style={{display:'block',width:'40px',height:'1px',background:'var(--gold)',opacity:0.4}}/>
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          fontWeight: 700,
          marginBottom: '48px',
          color: 'var(--ink)',
          letterSpacing: '-0.01em',
        }}>
          Latest from the blog
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
          maxWidth: '960px',
          margin: '0 auto 40px',
          textAlign: 'left',
        }}>
          {latestPosts.length === 0 ? (
            <div style={{
              background: 'var(--warm-white)',
              border: '1px solid var(--border)',
              borderRadius: '5px',
              padding: '28px',
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--dusty-pink)',
                marginBottom: '12px',
              }}>Coming soon</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--ink)',
                marginBottom: '10px',
                lineHeight: 1.3,
              }}>Your posts will appear here</div>
              <div style={{
                fontSize: '13px',
                color: 'var(--mid)',
                fontWeight: 300,
                lineHeight: 1.65,
              }}>Once we migrate your blog posts, they'll show up right in this section on the homepage.</div>
            </div>
          ) : (
            latestPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} style={{
                background: 'var(--warm-white)',
                border: '1px solid var(--border)',
                borderRadius: '5px',
                padding: '28px',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--dusty-pink)',
                  marginBottom: '12px',
                }}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}>{post.title}</div>
                {post.excerpt && (
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--mid)',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    marginBottom: '14px',
                  }}>{post.excerpt}</div>
                )}
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-dim)',
                }}>
                  Read post →
                </span>
              </a>
            ))
          )}
        </div>

        <a href="/blog" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          textDecoration: 'none',
          border: '1px solid rgba(201,165,90,0.3)',
          padding: '12px 28px',
          borderRadius: '3px',
          display: 'inline-block',
        }}>
          Read the blog →
        </a>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        background: 'var(--plum)',
        padding: '96px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {[400, 600].map((size, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${size}px`, height: `${size}px`,
            borderRadius: '50%',
            border: '1px solid rgba(201,165,90,0.06)',
            pointerEvents: 'none',
          }}/>
        ))}

        <div style={{position:'relative', zIndex:1, maxWidth:'560px', margin:'0 auto'}}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
          }}>
            <span style={{display:'block',width:'40px',height:'1px',background:'var(--gold)',opacity:0.4}}/>
            Get in touch
            <span style={{display:'block',width:'40px',height:'1px',background:'var(--gold)',opacity:0.4}}/>
          </div>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 700,
            color: 'var(--cream)',
            marginBottom: '16px',
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
          }}>
            Let's <em style={{fontStyle:'italic', color:'var(--dusty-pink)'}}>chat</em>
          </h2>

          <p style={{
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(250,247,242,0.5)',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}>
            Questions, suggestions, or just want to say hi.
          </p>

          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(250,247,242,0.4)',
            marginBottom: '18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
          }}>
            <span style={{ color: 'rgba(250,247,242,0.35)' }}>Prefer socials?</span>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
            }}>
              {[
                { label: 'LinkedIn |', href: 'https://www.linkedin.com/in/ctijen/' },
                { label: 'X |', href: 'https://x.com/CTIJen_' },
                { label: 'GitHub |', href: 'https://github.com/CTIJen' },
                { label: 'TikTok |', href: 'https://www.tiktok.com/@ctijen' },
                { label: 'Facebook |', href: 'https://facebook.com/ctijen1/' },
                { label: 'Instagram', href: 'https://www.instagram.com/cti_jen/' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--gold-dim)',
                    textDecoration: 'none',
                  }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            style={{display:'flex', flexDirection:'column', gap:'12px', textAlign:'left'}}
          >
            <input type="hidden" name="form-name" value="contact" />
            {[
              {name:'name', placeholder:'Your name', type:'text'},
              {name:'email', placeholder:'Your email', type:'email'},
            ].map(field => (
              <input key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '3px',
                  padding: '14px 16px',
                  color: 'var(--cream)',
                  fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                  width: '100%',
                }}
              />
            ))}
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '3px',
                padding: '14px 16px',
                color: 'var(--cream)',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                outline: 'none',
                resize: 'vertical',
                width: '100%',
              }}
            />
            <button type="submit" style={{
              background: 'var(--gold)',
              color: 'var(--plum)',
              border: 'none',
              borderRadius: '3px',
              padding: '15px 32px',
              fontFamily: "'DM Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 500,
              width: '100%',
            }}>
              Send it →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}