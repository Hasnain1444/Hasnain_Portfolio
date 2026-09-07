import { useState, useRef, useEffect } from 'react'
import project_1 from '../assets/project-1.jpeg'
import project_2 from '../assets/project-2.jpeg'

const projects = [
  {
    title: 'PKCERT SecureHire',
    category: 'GenAI / LLM',
    image: '',
    description:
      'AI recruitment and CV-screening platform for PKCERT using a locally hosted LLM (Ollama). Auto-scores CVs against job requirements, extracts skills/education/experience, and flags red flags with confidence ratings — fully self-hosted so no candidate data leaves infrastructure. Includes RBAC, encrypted CNIC duplicate detection, transcript verification, admin score overrides with audit history, bias/fairness analytics, and Docker Compose deployment.',
    technologies: ['Ollama (Local LLM)', 'React', 'Node.js/Express', 'MySQL', 'Docker', 'Prompt Engineering'],
    liveUrl: '',
    githubUrl: 'https://github.com/Hasnain1444',
    gradient: ['#3b82f6', '#06b6d4'],
  },
  {
    title: 'Docutect AI',
    category: 'AI Product Design',
    image: project_2,
    description:
      'Designed the complete UX for an AI-powered document intelligence platform that helps users process, analyze, and interact with documents. Focused on clear information hierarchy, accessibility, and interfaces that make complex AI workflows understandable for developers and enterprise users.',
    technologies: ['Figma', 'AI Product Design', 'User Flows', 'Wireframing', 'Prototyping'],
    liveUrl: 'https://www.docutect.com/',
    githubUrl: '',
    gradient: ['#8b5cf6', '#ec4899'],
  },
  {
    title: 'Machine Learning Lab',
    category: 'AI / ML',
    image: '',
    description:
      'Hands-on machine learning experiments covering classic ML pipelines, data preparation, and model evaluation. Built as a learning portfolio alongside IBM certifications in Generative AI & LLMs, Machine Learning with Python, and Deep Learning with Keras.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'ML Fundamentals'],
    liveUrl: '',
    githubUrl: 'https://github.com/Hasnain1444/Machine_Learning',
    gradient: ['#f59e0b', '#ef4444'],
  },
  {
    title: 'Skill Exchange Hub',
    category: 'Full Stack / APIs',
    image: '',
    description:
      'Full-stack networking platform connecting students and professionals for skill sharing and collaborative projects. Implements authentication, RESTful APIs, PostgreSQL, and dynamic project matching — solid backend foundations transferable to AI service integration.',
    technologies: ['ReactJS', 'Node.js', 'PostgreSQL', 'REST APIs', 'Authentication'],
    liveUrl: '',
    githubUrl: 'https://github.com/Hasnain1444',
    gradient: ['#22c55e', '#0ea5e9'],
  },
  {
    title: 'Quranic App',
    category: 'Mobile Development',
    image: project_1,
    description:
      'Feature-rich Quran mobile app with Surah navigation, search, and bookmarking. Built with React Native at CMGL — demonstrates shipping polished product features on a cross-functional team.',
    technologies: ['React Native', 'Expo', 'JavaScript', 'Figma'],
    liveUrl: 'https://quranic-ap.netlify.app/',
    githubUrl: 'https://github.com/Hasnain1444/Quranic_App',
    gradient: ['#22c55e', '#14b8a6'],
  },
]

/* ---------- small inline icons (no extra dependency) ---------- */
const ArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)
const ExternalLink = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.627 0 12 0z" />
  </svg>
)

/* ---------- gradient placeholder shown when no image is provided ---------- */
const BrowserMock = ({ project, large }) => (
  <div style={{ width: '100%', height: '100%', borderRadius: large ? 16 : 12, overflow: 'hidden', background: '#0b1220' }}>
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: large ? '12px 16px' : '8px 10px', background: '#111a2b',
    }}>
      <span style={{ width: 9, height: 9, borderRadius: 99, background: '#ff5f57' }} />
      <span style={{ width: 9, height: 9, borderRadius: 99, background: '#febc2e' }} />
      <span style={{ width: 9, height: 9, borderRadius: 99, background: '#28c840' }} />
    </div>
    <div style={{
      height: large ? 'calc(100% - 41px)' : 'calc(100% - 33px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: `radial-gradient(120% 120% at 30% 20%, ${project.gradient[0]} 0%, ${project.gradient[1]} 60%, #0b1220 130%)`,
    }}>
      <span style={{
        color: 'rgba(255,255,255,0.92)', fontWeight: 700,
        fontSize: large ? 32 : 17, letterSpacing: '-0.02em', textAlign: 'center', padding: '0 16px',
      }}>
        {project.title}
      </span>
    </div>
  </div>
)

const Media = ({ project, large }) =>
  project.image
    ? <img src={project.image} alt={project.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: large ? 16 : 12 }} />
    : <BrowserMock project={project} large={large} />

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const [active, setActive] = useState(null)
  const [canHover, setCanHover] = useState(false)

  const previewRef = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  useEffect(() => {
    if (!canHover) return
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.16
      pos.current.y += (target.current.y - pos.current.y) * 0.16
      if (previewRef.current) {
        previewRef.current.style.left = pos.current.x + 'px'
        previewRef.current.style.top = pos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf.current)
  }, [canHover])

  const handleMove = (e) => { target.current = { x: e.clientX, y: e.clientY } }

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  const showPreview = canHover && hovered !== null && active === null

  // title colour matches portfolio: gradient on hovered, dim on others
  const titleClass = (i) => {
    if (active !== null || hovered === null) return 'text-white'
    return hovered === i ? 'text-gradient' : 'text-white/30'
  }

  return (
    <section
      id="projects"
      onMouseMove={handleMove}
      className="py-20 lg:py-32 px-6 lg:px-8 relative overflow-hidden"
    >
      <style>{`
        #projects *, #projects *::before, #projects *::after { box-sizing: border-box; }

        @keyframes projGlow { 0%,100% { opacity:.4; transform:translateX(-50%) scale(1);} 50% { opacity:.7; transform:translateX(-50%) scale(1.08);} }
        @keyframes projRowIn { from { opacity:0; transform:translateY(28px);} to { opacity:1; transform:translateY(0);} }
        @keyframes projDetailIn { from { opacity:0; transform:translateY(24px);} to { opacity:1; transform:translateY(0);} }
        @keyframes projFade { from { opacity:0;} to { opacity:1;} }

        .proj-row { animation: projRowIn .7s cubic-bezier(.16,1,.3,1) both; }
        .proj-title { transition: transform .5s cubic-bezier(.16,1,.3,1), color .4s ease; will-change: transform; }
        .proj-row:hover .proj-title { transform: translateX(20px); }
        .proj-arrow { transition: opacity .4s ease, transform .5s cubic-bezier(.16,1,.3,1); }
        .proj-cat { transition: color .4s ease; }
        .proj-row:hover .proj-cat { color: #fff; }

        .proj-pill { transition: transform .3s ease, box-shadow .3s ease; }
        .proj-pill:hover { transform: translateY(-2px); box-shadow: 0 0 15px rgba(59,130,246,.3); }

        .proj-backbtn { transition: transform .3s ease, box-shadow .3s ease; }
        .proj-backbtn:hover { transform: translateY(-2px); box-shadow: 0 0 15px rgba(59,130,246,.3); }
        .proj-live { transition: transform .3s ease, background .3s ease; }
        .proj-live:hover { transform: translateY(-2px); }

        @media (max-width: 768px) {
          .proj-row:hover .proj-title { transform: none; }
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* ================= LIST VIEW ================= */}
        {active === null && (
          <div style={{ animation: 'projFade .4s ease both' }}>
            {/* header (sized to match your other sections) */}
            <div className="relative text-center mb-16 lg:mb-20">
              <div style={{
                position: 'absolute', top: '-40px', left: '50%', width: 240, height: 300,
                background: 'radial-gradient(closest-side, rgba(59,130,246,.45), rgba(59,130,246,0))',
                filter: 'blur(40px)', animation: 'projGlow 5s ease-in-out infinite', pointerEvents: 'none',
              }} />
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Featured <span className="text-gradient">Projects</span>
              </h2>
            </div>

            {/* rows */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  className="proj-row"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => { setHovered(null); setActive(i) }}
                  style={{
                    position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 24, padding: '28px 4px', borderBottom: '1px solid rgba(255,255,255,.1)',
                    cursor: 'pointer', animationDelay: `${i * 0.08}s`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                    <h3
                      className={`proj-title font-bold leading-tight ${titleClass(i)}`}
                      style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', letterSpacing: '-0.02em', margin: 0 }}
                    >
                      {p.title}
                    </h3>
                    <ArrowLeft
                      className="proj-arrow text-accent-blue"
                      style={{
                        width: 28, height: 28, marginLeft: 18, flexShrink: 0,
                        transform: hovered === i ? 'rotate(135deg)' : 'rotate(135deg) translateX(-10px)',
                        opacity: hovered === i ? 1 : 0,
                      }}
                    />
                  </div>
                  <span className="proj-cat text-gray-500 text-sm md:text-base" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {p.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= DETAIL VIEW ================= */}
        {active !== null && (
          <div style={{ maxWidth: 980, margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <button
              className="proj-backbtn glass border border-accent-blue/20 text-white"
              onClick={() => setActive(null)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 22px',
                borderRadius: 99, fontSize: 16, fontWeight: 500, cursor: 'pointer', marginBottom: 48,
                animation: 'projDetailIn .5s cubic-bezier(.16,1,.3,1) both',
              }}
            >
              <ArrowLeft style={{ width: 18, height: 18 }} /> Back to Projects
            </button>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight"
              style={{ margin: '0 0 44px', animation: 'projDetailIn .6s cubic-bezier(.16,1,.3,1) .05s both' }}
            >
              {projects[active].title}
            </h2>

            <div
              className="border border-accent-blue/20"
              style={{
                width: '100%', aspectRatio: '16 / 9', borderRadius: 16, overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0,0,0,.5)',
                animation: 'projDetailIn .6s cubic-bezier(.16,1,.3,1) .1s both',
              }}
            >
              <Media project={projects[active]} large />
            </div>

            <p
              className="text-gray-400 text-base lg:text-lg leading-relaxed"
              style={{ maxWidth: 760, margin: '40px auto 0', textAlign: 'center', animation: 'projDetailIn .6s cubic-bezier(.16,1,.3,1) .15s both' }}
            >
              {projects[active].description}
            </p>

            <div
              className="flex flex-wrap justify-center gap-3"
              style={{ marginTop: 36, animation: 'projDetailIn .6s cubic-bezier(.16,1,.3,1) .2s both' }}
            >
              {projects[active].technologies.map((t) => (
                <span key={t} className="proj-pill px-4 py-2 rounded-full glass text-sm text-gray-300 border border-accent-blue/20">
                  {t}
                </span>
              ))}
            </div>

            <div
              className="flex justify-center flex-wrap gap-4"
              style={{ marginTop: 44, animation: 'projDetailIn .6s cubic-bezier(.16,1,.3,1) .25s both' }}
            >
              {projects[active].liveUrl ? (
                <a
                  className="proj-live bg-accent-blue text-white"
                  href={projects[active].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 34px',
                    borderRadius: 99, fontSize: 16, fontWeight: 600, textDecoration: 'none',
                  }}
                >
                  View Live <ExternalLink style={{ width: 18, height: 18 }} />
                </a>
              ) : null}
              {projects[active].githubUrl ? (
                <a
                  className="proj-live glass border border-accent-blue/30 text-white"
                  href={projects[active].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 34px',
                    borderRadius: 99, fontSize: 16, fontWeight: 600, textDecoration: 'none',
                  }}
                >
                  View on GitHub <GithubIcon style={{ width: 18, height: 18 }} />
                </a>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {/* ================= CURSOR-FOLLOW PREVIEW ================= */}
      {canHover && active === null && (
        <div
          ref={previewRef}
          style={{
            position: 'fixed', left: 0, top: 0, zIndex: 60, pointerEvents: 'none',
            width: 340, height: 215, transform: 'translate(-50%, -50%)',
            opacity: showPreview ? 1 : 0,
            scale: showPreview ? '1' : '0.7',
            transition: 'opacity .35s ease, scale .35s cubic-bezier(.16,1,.3,1)',
            willChange: 'left, top, opacity',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {hovered !== null && <Media project={projects[hovered]} />}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{
                width: 92, height: 92, borderRadius: 99, background: '#3b82f6',
                boxShadow: '0 0 50px 16px rgba(59,130,246,.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 17, fontWeight: 600,
              }}>
                View
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
