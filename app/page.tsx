import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts, formatDate } from 'app/blog/utils'

const RunGlyph = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const HockeyGlyph = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 20h3l10.5-14.5A2.5 2.5 0 0 0 14 2L3.5 16.5a2 2 0 0 0 0 2.5z" />
    <circle cx="19" cy="19" r="2" />
  </svg>
)

const ArcheryGlyph = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <line x1="22" y1="2" x2="14" y2="10" />
    <polyline points="16 2 22 2 22 8" />
  </svg>
)

const RopeGlyph = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 12c-2.66 0-3.33-2-6-2s-3.33 2-6 2-3.33-2-6-2-3.33 2-6 2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const BallGlyph = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    <path d="M2 12h20" />
  </svg>
)

const TrekGlyph = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
)
const BookGlyph = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const RECS: {
  idx: string
  name: string
  kind: string
  href: string
  glyph: React.ReactNode
}[] = [
    {
      idx: 'i.',
      name: 'Marathons and Treks',
      kind: 'Strava Stats',
      href: '/active', /* Add your Strava URL here! */
      glyph: <TrekGlyph />,
    },
    {
      idx: 'ii.',
      name: 'Field Hockey',
      kind: 'Team Sport',
      href: 'https://www.youtube.com/watch?v=k6eDHW4ULzo&pp=ygUSaW50ZXJuIG5pdCBob2NrZXkg',
      glyph: <HockeyGlyph />,
    },
    {
      idx: 'vi.',
      kind: 'Giving Back',
      name: 'I-Care',
      href: '/givingback',
      glyph: <BookGlyph />,
    },
  ]

function tagClass(tag?: string) {
  const t = (tag || '').toLowerCase()
  if (t.includes('research')) return 't-research'
  if (t.includes('tutorial')) return 't-tutorial'
  if (t.includes('life') || t.includes('personal')) return 't-life'
  if (t.includes('note')) return 't-notes'
  return 't-default'
}

function shortDate(d: string) {
  const dt = new Date(d.includes('T') ? d : `${d}T00:00:00`)
  const dd = String(dt.getDate()).padStart(2, '0')
  const mm = String(dt.getMonth() + 1).padStart(2, '0')
  const yy = String(dt.getFullYear()).slice(-2)
  return `${dd}/${mm}/${yy}`
}

function Hero() {
  return (
    <section className="hero">
      <p className="hero-intro">
        Hello there! I&rsquo;m a Pre Doc Research Intern at the BEES Lab,IISc, advised
        by Prof. Hardik J. Pandya. My research focuses on robot codesign: how a
        robot&rsquo;s mechanical design and its control policy can co-evolve
        inside a simulation environment.
      </p>
      <div className="hero-columns">
        <div className="hero-column">
          <span className="hero-column-value">Pre Doc 26</span>
        </div>
        <div className="hero-column">
          <span className="hero-column-value">BEES Lab,IISc DESE</span>
        </div>
        <div className="hero-column">
          <span className="hero-column-value">Bengaluru, 2026</span>
        </div>
      </div>
    </section>
  )
}

function SectionHead({
  num,
  title,
  right,
}: {
  num: string
  title: string
  right?: string
}) {
  return (
    <div className="section-head">
      <span className="num">§ {num}</span>
      <h2>{title}</h2>
      {right && <span className="right">{right}</span>}
    </div>
  )
}

function Featured({
  post,
}: {
  post: {
    slug: string
    title: string
    summary?: string
    publishedAt: string
    image?: string
    readingTime?: number
  }
}) {
  return (
    <section className="section" id="featured">
      <SectionHead
        num="01"
        title="Recent Logs"
        right={`Updated ${formatDate(post.publishedAt)}`}
      />
      <div className="featured">
        <Link
          href={`/blog/${post.slug}`}
          className="img-frame"
          aria-label={post.title}
        >
          <span className="stamp">Featured</span>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1240px) 50vw, 100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          ) : null}
          <span className="corner">Fig. 01</span>
        </Link>
        <div className="copy">
          <h3>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          {post.summary && <p className="dek">{post.summary}</p>}
          <div className="meta">
            <span>{formatDate(post.publishedAt)}</span>
            {post.readingTime !== undefined && (
              <span>· {post.readingTime} min read</span>
            )}
          </div>
          <Link href={`/blog/${post.slug}`} className="read-on">
            Read the dispatch
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function PostsList({
  posts,
}: {
  posts: {
    slug: string
    title: string
    publishedAt: string
    readingTime?: number
    tags?: string[]
  }[]
}) {
  if (posts.length === 0) return null
  return (
    <section className="section" id="blog">
      <SectionHead
        num="02"
        title="From the Blog"
        right={`Archive · ${posts.length} ${posts.length === 1 ? 'entry' : 'entries'}`}
      />
      <div className="posts">
        {posts.map((p) => {
          const primary = p.tags && p.tags.length > 0 ? p.tags[0] : undefined
          return (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="post-row">
              <span className="date">{shortDate(p.publishedAt)}</span>
              <span className="title">
                <span
                  className={`tag-dot ${tagClass(primary)}`}
                  aria-hidden="true"
                />
                {p.title}
              </span>
              <span className="read">
                {p.readingTime !== undefined ? `${p.readingTime} min` : ''}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

function FrontPackage() {
  return (
    <section className="section" id="inside-the-paper">
      <SectionHead num="03" title="Quick Tour" right="Three pages" />
      <div className="front-package">
        
        {/* The Big Left Box (Now ABOUT) */}
        <Link href="/about" className="fp-lead">
          <div className="fp-lead-photo">
            <Image
              src="/about/profile.png"
              alt="Shrisharva at IISc"
              fill
              sizes="(min-width: 960px) 60vw, 100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>
          <h3>About</h3>
          <p className="dek">
            I am a Pre Doc Research Intern at the BEES Lab, IISc, advised by Prof. Hardik J. Pandya. Before diving into robot codesign and simulations, what was I doing? I’m glad you asked.
          </p>
          <span className="more">
            Full bio
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>

        {/* The Right Side Stack */}
        <div className="fp-side">
          
          {/* Top Right Box (Now PROJECTS) */}
          <Link href="/projects" className="fp-story fp-story-photo">
            <h3>Projects</h3>
            <p className="dek">
              Hardware and software toolchains for robotics research, featuring custom PCB designs, ESP32 integrations, and simulation environments.
            </p>
            <span className="more">
              All projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          
          {/* Bottom Right Box (Remains PUBLICATIONS) */}
          <Link href="/publications" className="fp-story">
            <h3>Publications</h3>
            <p className="dek">
              Most recent: Research and findings from my work in the BEES Lab on mechanical design and control policy co-evolution.
            </p>
            <span className="more">
              All publications
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          
        </div>
      </div>
    </section>
  )
}

function Recommendations() {
  return (
    <section className="section" id="recommendations">
      <SectionHead num="04" title="Off the Desk" right="Active Life" />      <div className="rec-grid">
        {RECS.map((r) => (
          <a
            key={r.idx}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rec-cell"
          >
            <div className="rec-meta">
              <span className="rec-kind">{r.kind}</span>
              <span className="rec-glyph">{r.glyph}</span>
            </div>
            <span className="rec-name">{r.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  const posts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )

  const featured = posts[0]
  const rest = posts.slice(1, 6)

  return (
    <>
      <Hero />
      {featured && (
        <Featured
          post={{
            slug: featured.slug,
            title: featured.metadata.title,
            summary: featured.metadata.summary,
            publishedAt: featured.metadata.publishedAt,
            image: featured.metadata.image,
            readingTime: featured.metadata.readingTime,
          }}
        />
      )}
      <PostsList
        posts={rest.map((p) => ({
          slug: p.slug,
          title: p.metadata.title,
          publishedAt: p.metadata.publishedAt,
          readingTime: p.metadata.readingTime,
          tags: p.metadata.tags,
        }))}
      />
      <FrontPackage />
      <Recommendations />
    </>
  )
}
