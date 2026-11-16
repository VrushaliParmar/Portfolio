import { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { poems, type PoemCategory } from '../data/poems';
import './PoetryPage.css';

const CATEGORIES: PoemCategory[] = ['Life', 'Growth', 'Feelings', 'Unspoken', 'Fragments'];

/* Per-category subtle mood — oatmeal/pine/lilac variants, never jarring */
const MOOD: Record<PoemCategory | 'default', { bg: string; accent: string }> = {
  Feelings:  { bg: '#F4EEF8', accent: '#9B7CC8' },
  Growth:    { bg: '#EDF3EF', accent: '#3D6B52' },
  Life:      { bg: '#F5F0E6', accent: '#8B6C3A' },
  Unspoken:  { bg: '#EEF0F4', accent: '#4A6680' },
  Fragments: { bg: '#F3EFEB', accent: '#8B6C3A' },
  default:   { bg: '#FDFAF5', accent: '#8B6CC4' },
};

export default function PoetryPage() {
  const [activeCategory, setActiveCategory] = useState<PoemCategory | 'All'>('All');
  const [index, setIndex] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

  const collection =
    activeCategory === 'All' ? poems : poems.filter(p => p.category === activeCategory);
  const total   = collection.length;
  const current = collection[index] ?? null;
  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  const handleCategory = useCallback((cat: PoemCategory | 'All') => {
    setActiveCategory(cat);
    setIndex(0);
  }, []);

  const goNext = useCallback(() => { if (hasNext) setIndex(i => i + 1); }, [hasNext]);
  const goPrev = useCallback(() => { if (hasPrev) setIndex(i => i - 1); }, [hasPrev]);

  /* Keyboard left/right navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'BUTTON', 'A', 'TEXTAREA'].includes(tag)) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  /* Scroll poem into view on change */
  useEffect(() => {
    articleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [index, activeCategory]);

  const mood = current?.category ? (MOOD[current.category] ?? MOOD.default) : MOOD.default;

  return (
    <div className="poetry-page">
      <a href="#poetry-main" className="skip-link">Skip to poem</a>

      {/* ── Header ── */}
      <header className="poetry-header" role="banner">
        <div className="container poetry-header__inner">
          <Link to="/" className="poetry-back" aria-label="Back to portfolio">
            <BackArrow />
            <span>Back to portfolio</span>
          </Link>
          <Link to="/" className="poetry-site-name" aria-label="Vrushali Parmar — portfolio">
            Vrushali Parmar
          </Link>
        </div>
      </header>

      {/* ── Hero with lotus botanical composition ── */}
      <section className="poetry-hero" aria-labelledby="poetry-page-title">
        {/* Lotus SVG background — confined to poetry page, never touches photo */}
        <LotusComposition />

        <div className="container poetry-hero__inner">
          <div className="poetry-hero__content">
            <span className="poetry-hero__label">Words &amp; fragments</span>
            <h1 className="poetry-hero__title" id="poetry-page-title">My Poetry</h1>
            <p className="poetry-hero__subtitle">
              Things I couldn't always say out loud.
            </p>
            <div className="poetry-hero__intro">
              <p>Some thoughts find their way into notebooks. Some remain unfinished. And some become poems.</p>
              <p>Not everything here needs an explanation. Some things are simply meant to be felt.</p>
              <p className="poetry-hero__welcome">Welcome to my words.</p>
            </div>
          </div>
          {/* Decorative ink spot — right column, no image involvement */}
          <div className="poetry-hero__deco" aria-hidden="true">
            <div className="poetry-hero__ink" />
            <div className="poetry-hero__ink poetry-hero__ink--2" />
          </div>
        </div>

        {/* Water surface bar */}
        <div className="poetry-hero__water" aria-hidden="true">
          <WaterSurface />
        </div>
      </section>

      {/* ── Reader ── */}
      <main id="poetry-main" className="poetry-main container" tabIndex={-1}>

        {/* Category filter */}
        {poems.length > 0 && poems.some(p => p.category) && (
          <nav className="poetry-filter" aria-label="Filter poems by category">
            <ul className="poetry-filter__list" role="list">
              <li>
                <button
                  className={`poetry-filter__btn${activeCategory === 'All' ? ' poetry-filter__btn--active' : ''}`}
                  onClick={() => handleCategory('All')}
                  aria-pressed={activeCategory === 'All'}
                  type="button"
                >All</button>
              </li>
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    className={`poetry-filter__btn${activeCategory === cat ? ' poetry-filter__btn--active' : ''}`}
                    onClick={() => handleCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    type="button"
                  >{cat}</button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {total === 0 ? (
          <EmptyState hasPoems={poems.length > 0} category={activeCategory} />
        ) : (
          <div className="poetry-reader">
            {/* Progress indicator */}
            <div className="poetry-progress" aria-live="polite" aria-atomic="true">
              <span className="poetry-progress__count">{index + 1} of {total}</span>
              <div className="poetry-progress__bar" aria-hidden="true">
                <div
                  className="poetry-progress__fill"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            {/* Stage: prev · poem · next */}
            <div className="poetry-stage">

              {/* Previous */}
              <button
                className="poetry-nav poetry-nav--prev"
                onClick={goPrev}
                disabled={!hasPrev}
                aria-label={hasPrev ? `Previous: ${collection[index - 1]?.title}` : 'No previous poem'}
                type="button"
              >
                <ChevronLeft />
                <span className="poetry-nav__label">Prev</span>
              </button>

              {/* Poem card */}
              {current && (
                <article
                  ref={articleRef}
                  key={current.id}
                  id={current.id}
                  className="poem-card"
                  aria-label={current.title}
                  style={{
                    '--poem-bg':     mood.bg,
                    '--poem-accent': mood.accent,
                  } as React.CSSProperties}
                >
                  <header className="poem-card__header">
                    {current.category && (
                      <span className="poem-card__category">{current.category}</span>
                    )}
                    <h2 className="poem-card__title">{current.title}</h2>
                    {current.date && (
                      <p className="poem-card__date"><time>{current.date}</time></p>
                    )}
                    <div className="poem-card__rule" aria-hidden="true" />
                  </header>

                  <div
                    className="poem-card__body"
                    role="region"
                    aria-label={`Text of ${current.title}`}
                  >
                    {current.lines.map((line, i) =>
                      line === '' ? (
                        <div key={i} className="poem-card__stanza-break" aria-hidden="true" />
                      ) : (
                        <p key={i} className="poem-card__line">{line}</p>
                      ),
                    )}
                  </div>

                  {current.note && (
                    <footer className="poem-card__note">
                      <p>{current.note}</p>
                    </footer>
                  )}
                </article>
              )}

              {/* Next */}
              <button
                className="poetry-nav poetry-nav--next"
                onClick={goNext}
                disabled={!hasNext}
                aria-label={hasNext ? `Next: ${collection[index + 1]?.title}` : 'No next poem'}
                type="button"
              >
                <span className="poetry-nav__label">Next</span>
                <ChevronRight />
              </button>
            </div>

            {/* Mobile bottom nav */}
            <div className="poetry-nav-mobile" aria-label="Poem navigation">
              <button
                className="poetry-nav-mobile__btn"
                onClick={goPrev}
                disabled={!hasPrev}
                aria-label="Previous poem"
                type="button"
              >
                <ChevronLeft /> Previous
              </button>
              <span className="poetry-nav-mobile__count" aria-hidden="true">
                {index + 1} / {total}
              </span>
              <button
                className="poetry-nav-mobile__btn"
                onClick={goNext}
                disabled={!hasNext}
                aria-label="Next poem"
                type="button"
              >
                Next <ChevronRight />
              </button>
            </div>

            <p className="poetry-keyboard-hint" aria-hidden="true">← → arrow keys to navigate</p>
          </div>
        )}
      </main>

      {/* Lotus divider above footer */}
      <div className="poetry-footer-lotus" aria-hidden="true">
        <LotusDivider />
      </div>

      {/* Footer */}
      <footer className="poetry-footer" role="contentinfo">
        <div className="container poetry-footer__inner">
          <Link to="/" className="poetry-back poetry-back--footer" aria-label="Back to portfolio">
            <BackArrow />
            <span>Back to portfolio</span>
          </Link>
          <p className="poetry-footer__copy">
            &copy; {new Date().getFullYear()} Vrushali Parmar
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   LOTUS BOTANICAL COMPOSITION SVG
   Confined strictly to the poetry page hero background.
   Lotus flowers are lilac (#CBB3E8), leaves are pine (#1F3B2E / #2A4F3C).
   Water lines are subtle horizontal strokes at the bottom.
   All floats/sways driven by CSS animation classes in PoetryPage.css.
   ══════════════════════════════════════════════════════════════════════════ */
function LotusComposition() {
  return (
    <div className="lotus-bg" aria-hidden="true">
      <svg
        className="lotus-svg"
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        focusable="false"
      >
        {/* ── Water surface lines ── */}
        <g>
          <line x1="0" y1="410" x2="1440" y2="410"
            stroke="#CBB3E8" strokeWidth="1"   className="water-ripple"   opacity="0.2"/>
          <line x1="0" y1="422" x2="1440" y2="422"
            stroke="#1F3B2E" strokeWidth="0.6" className="water-ripple-2" opacity="0.09"
            strokeDasharray="80,40"/>
          <line x1="0" y1="432" x2="1440" y2="432"
            stroke="#CBB3E8" strokeWidth="0.8" className="water-ripple-3" opacity="0.15"
            strokeDasharray="60,50"/>
          <line x1="0" y1="442" x2="1440" y2="442"
            stroke="#1F3B2E" strokeWidth="0.5" className="water-ripple"   opacity="0.07"
            strokeDasharray="40,70"/>
          <line x1="0" y1="452" x2="1440" y2="452"
            stroke="#CBB3E8" strokeWidth="0.6" className="water-ripple-2" opacity="0.12"
            strokeDasharray="90,30"/>
          <line x1="0" y1="462" x2="1440" y2="462"
            stroke="#1F3B2E" strokeWidth="0.4" className="water-ripple-3" opacity="0.06"/>
          <line x1="0" y1="472" x2="1440" y2="472"
            stroke="#CBB3E8" strokeWidth="0.5" className="water-ripple"   opacity="0.1"/>
          <line x1="0" y1="482" x2="1440" y2="482"
            stroke="#1F3B2E" strokeWidth="0.3" className="water-ripple-2" opacity="0.05"/>
        </g>

        {/* ── Left cluster ── */}
        <g transform="translate(110, 240)">
          {/* Large leaf — sways gently */}
          <ellipse cx="-25" cy="90" rx="75" ry="24"
            fill="#1F3B2E" opacity="0.16" transform="rotate(-16,-25,90)"
            className="leaf-sway"/>
          {/* Smaller leaf */}
          <ellipse cx="45" cy="100" rx="55" ry="17"
            fill="#2A4F3C" opacity="0.11" transform="rotate(14,45,100)"
            className="leaf-sway-2"/>
          {/* Lotus bloom — floats */}
          <g className="lotus-float-1">
            <LotusBloom scale={0.9} />
          </g>
        </g>

        {/* ── Right cluster ── */}
        <g transform="translate(1270, 220)">
          <ellipse cx="18" cy="95" rx="68" ry="21"
            fill="#1F3B2E" opacity="0.14" transform="rotate(13,18,95)"
            className="leaf-sway-2"/>
          <ellipse cx="-28" cy="104" rx="50" ry="16"
            fill="#2A4F3C" opacity="0.10" transform="rotate(-9,-28,104)"
            className="leaf-sway"/>
          <g className="lotus-float-2">
            <LotusBloom scale={0.78} />
          </g>
        </g>

        {/* ── Centre-right small bloom ── */}
        <g transform="translate(880, 310)">
          <ellipse cx="0" cy="58" rx="42" ry="13"
            fill="#1F3B2E" opacity="0.12" transform="rotate(-7,0,58)"
            className="leaf-sway"/>
          <g className="lotus-float-3">
            <LotusBloom scale={0.55} />
          </g>
        </g>

        {/* ── Far-left small bloom ── */}
        <g transform="translate(360, 320)">
          <line x1="0" y1="82" x2="0" y2="8"
            stroke="#1F3B2E" strokeWidth="1.2" opacity="0.35"/>
          <g className="lotus-float-4">
            <LotusBloom scale={0.42} />
          </g>
        </g>

        {/* ── Lily pads floating on water ── */}
        <ellipse cx="620" cy="435" rx="58" ry="17"
          fill="#1F3B2E" opacity="0.065" transform="rotate(-4,620,435)"/>
        <ellipse cx="780" cy="448" rx="40" ry="12"
          fill="#1F3B2E" opacity="0.055" transform="rotate(7,780,448)"/>
        <ellipse cx="290" cy="452" rx="47" ry="14"
          fill="#2A4F3C" opacity="0.055" transform="rotate(-11,290,452)"/>
        <ellipse cx="1050" cy="440" rx="35" ry="11"
          fill="#1F3B2E" opacity="0.05"  transform="rotate(5,1050,440)"/>
      </svg>
    </div>
  );
}

/* Individual lotus bloom — petals are soft lilac, stem is pine */
function LotusBloom({ scale }: { scale: number }) {
  return (
    <g transform={`scale(${scale})`}>
      {/* Outer petal ring — wider spread, low opacity */}
      {[-60, -30, 0, 30, 60].map((rot, i) => (
        <ellipse key={`o${i}`} cx={0} cy={-54}
          rx={13} ry={28}
          fill="#CBB3E8" opacity={0.32}
          transform={`rotate(${rot},0,0)`}/>
      ))}
      {/* Inner petal ring — tighter, higher opacity */}
      {[-40, -20, 0, 20, 40].map((rot, i) => (
        <ellipse key={`i${i}`} cx={0} cy={-40}
          rx={9.5} ry={21}
          fill="#CBB3E8" opacity={0.52}
          transform={`rotate(${rot},0,0)`}/>
      ))}
      {/* Centre */}
      <circle cx={0} cy={-20} r={8}  fill="#E8DCC6" opacity={0.72}/>
      <circle cx={0} cy={-20} r={4.5} fill="#CBB3E8" opacity={0.78}/>
      {/* Stem */}
      <line x1={0} y1={-13} x2={0} y2={82}
        stroke="#1F3B2E" strokeWidth={1.4} opacity={0.42}/>
    </g>
  );
}

/* Calm water surface — thin animated SVG lines at hero bottom */
function WaterSurface() {
  return (
    <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
      <line x1="0" y1="8"  x2="1440" y2="8"
        stroke="#CBB3E8" strokeWidth="1"   opacity="0.22" className="water-ripple"/>
      <line x1="0" y1="18" x2="1440" y2="18"
        stroke="#1F3B2E" strokeWidth="0.6" opacity="0.08" className="water-ripple-2"
        strokeDasharray="80,40"/>
      <line x1="0" y1="28" x2="1440" y2="28"
        stroke="#CBB3E8" strokeWidth="0.8" opacity="0.14" className="water-ripple-3"
        strokeDasharray="60,50"/>
    </svg>
  );
}

/* Thin lotus divider between content and footer */
function LotusDivider() {
  return (
    <svg viewBox="0 0 400 50" xmlns="http://www.w3.org/2000/svg"
      className="lotus-divider-svg" aria-hidden="true" focusable="false">
      <line x1="0"   y1="38" x2="160" y2="38"
        stroke="#CBB3E8" strokeWidth="0.8" opacity="0.4"/>
      <line x1="240" y1="38" x2="400" y2="38"
        stroke="#CBB3E8" strokeWidth="0.8" opacity="0.4"/>
      {/* Centre mini bloom */}
      <g transform="translate(200,34) scale(0.4)">
        {[-40,-20,0,20,40].map((rot, i) => (
          <ellipse key={i} cx={0} cy={-36} rx={9} ry={20}
            fill="#CBB3E8" opacity={0.55} transform={`rotate(${rot},0,0)`}/>
        ))}
        <circle cx={0} cy={-18} r={6}  fill="#E8DCC6" opacity={0.8}/>
        <circle cx={0} cy={-18} r={3}  fill="#CBB3E8" opacity={0.9}/>
        <line x1={0} y1={-11} x2={0} y2={22}
          stroke="#1F3B2E" strokeWidth={1.3} opacity={0.35}/>
      </g>
    </svg>
  );
}

/* ── Empty state ──────────────────────────────────────────────────────────── */
function EmptyState({ hasPoems, category }: { hasPoems: boolean; category: PoemCategory | 'All' }) {
  if (hasPoems && category !== 'All') {
    return (
      <div className="poetry-empty">
        <p>No poems in <em>{category}</em> yet.</p>
        <p className="poetry-empty__note">Browse all, or check back soon.</p>
      </div>
    );
  }
  return (
    <div className="poetry-empty">
      <div className="poetry-empty__lotus" aria-hidden="true">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="90" height="90">
          <g transform="translate(60,62)">
            {[-40,-20,0,20,40].map((rot, i) => (
              <ellipse key={i} cx={0} cy={-36} rx={9} ry={22}
                fill="#CBB3E8" opacity={0.38} transform={`rotate(${rot},0,0)`}/>
            ))}
            <circle cx={0} cy={-18} r={7}  fill="#E8DCC6" opacity={0.65}/>
            <circle cx={0} cy={-18} r={3.5} fill="#CBB3E8" opacity={0.75}/>
          </g>
        </svg>
      </div>
      <p className="poetry-empty__message">New words will find their way here.</p>
      <p className="poetry-empty__sub">
        Add poems in <code>src/data/poems.ts</code> and they'll appear here.
      </p>
    </div>
  );
}

/* ── Icons ────────────────────────────────────────────────────────────────── */
function BackArrow() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
    </svg>
  );
}
