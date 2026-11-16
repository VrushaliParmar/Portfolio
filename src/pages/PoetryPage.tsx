import { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { poems, type PoemCategory } from '../data/poems';
import './PoetryPage.css';

const CATEGORIES: PoemCategory[] = ['Life', 'Growth', 'Feelings', 'Unspoken', 'Fragments'];

// Subtle per-category mood palettes — oatmeal/pine/lilac variants
const MOOD: Record<PoemCategory | 'default', { bg: string; accent: string; ink: string }> = {
  Feelings: { bg: '#F5EEF8', accent: '#CBB3E8', ink: '#3A2460' },
  Growth:   { bg: '#EBF4EE', accent: '#8BB89A', ink: '#1F3B2E' },
  Life:     { bg: '#F7F3EC', accent: '#C8A96E', ink: '#3B2A14' },
  Unspoken: { bg: '#EDF0F4', accent: '#90A4B8', ink: '#1E2D3A' },
  Fragments:{ bg: '#F4EEE8', accent: '#C4A882', ink: '#3B2A14' },
  default:  { bg: '#F5F0E8', accent: '#CBB3E8', ink: '#1F3B2E' },
};

export default function PoetryPage() {
  const [activeCategory, setActiveCategory] = useState<PoemCategory | 'All'>('All');
  const [index, setIndex] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

  const collection = activeCategory === 'All'
    ? poems
    : poems.filter(p => p.category === activeCategory);

  const total    = collection.length;
  const current  = collection[index] ?? null;
  const hasPrev  = index > 0;
  const hasNext  = index < total - 1;

  // Reset to first poem when category changes
  const handleCategory = useCallback((cat: PoemCategory | 'All') => {
    setActiveCategory(cat);
    setIndex(0);
  }, []);

  const goNext = useCallback(() => {
    if (hasNext) setIndex(i => i + 1);
  }, [hasNext]);

  const goPrev = useCallback(() => {
    if (hasPrev) setIndex(i => i - 1);
  }, [hasPrev]);

  // Keyboard left/right arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Only fire if focus is not inside an interactive element
      const tag = (e.target as HTMLElement).tagName;
      if (['INPUT', 'BUTTON', 'A', 'TEXTAREA', 'SELECT'].includes(tag)) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  // Scroll article into view on poem change (smooth on desktop)
  useEffect(() => {
    articleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [index, activeCategory]);

  const mood = current?.category ? (MOOD[current.category] ?? MOOD.default) : MOOD.default;

  return (
    <div className="poetry-page">
      <a href="#poetry-main" className="skip-link">Skip to poem</a>

      {/* ── Header ── */}
      <header className="poetry-header" role="banner">
        <div className="poetry-header__inner container">
          <Link to="/" className="poetry-back" aria-label="Back to portfolio">
            <BackArrow />
            <span>Back to portfolio</span>
          </Link>
          <Link to="/" className="poetry-site-name" aria-label="Vrushali Parmar — portfolio">
            Vrushali Parmar
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="poetry-hero" aria-labelledby="poetry-page-title">
        <div className="container poetry-hero__inner">
          <div className="poetry-hero__content">
            <span className="poetry-hero__label">Words &amp; fragments</span>
            <h1 className="poetry-hero__title" id="poetry-page-title">
              Somewhere Between Words
            </h1>
            <p className="poetry-hero__subtitle">
              Things I couldn't always say out loud.
            </p>
            <div className="poetry-hero__intro">
              <p>Some thoughts find their way into notebooks. Some remain unfinished. And some become poems.</p>
              <p>Not everything here needs an explanation. Some things are simply meant to be felt.</p>
              <p className="poetry-hero__welcome">Welcome to my words.</p>
            </div>
          </div>
          <div className="poetry-hero__deco" aria-hidden="true">
            <div className="poetry-hero__ink" />
            <div className="poetry-hero__ink poetry-hero__ink--2" />
          </div>
        </div>
      </section>

      {/* ── Main ── */}
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

        {/* One-at-a-time reader or empty state */}
        {total === 0 ? (
          <EmptyState hasPoems={poems.length > 0} category={activeCategory} />
        ) : (
          <div className="poetry-reader" role="region" aria-label="Poem reader">

            {/* Progress indicator */}
            <div className="poetry-progress" aria-live="polite" aria-atomic="true">
              <span className="poetry-progress__count">
                {index + 1} of {total}
              </span>
              <div className="poetry-progress__bar" aria-hidden="true">
                <div
                  className="poetry-progress__fill"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </div>
            </div>

            {/* Poem stage — left nav | poem | right nav */}
            <div className="poetry-stage">

              {/* Previous */}
              <button
                className="poetry-nav poetry-nav--prev"
                onClick={goPrev}
                disabled={!hasPrev}
                aria-label={hasPrev ? `Previous poem: ${collection[index - 1]?.title}` : 'No previous poem'}
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
                    '--poem-ink':    mood.ink,
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
                    {/* Decorative accent line */}
                    <div className="poem-card__accent-line" aria-hidden="true" />
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
                aria-label={hasNext ? `Next poem: ${collection[index + 1]?.title}` : 'No next poem'}
                type="button"
              >
                <span className="poetry-nav__label">Next</span>
                <ChevronRight />
              </button>
            </div>

            {/* Mobile bottom navigation */}
            <div className="poetry-nav-mobile" aria-label="Poem navigation">
              <button
                className="poetry-nav-mobile__btn"
                onClick={goPrev}
                disabled={!hasPrev}
                aria-label={hasPrev ? `Previous poem` : 'No previous poem'}
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
                aria-label={hasNext ? `Next poem` : 'No next poem'}
                type="button"
              >
                Next <ChevronRight />
              </button>
            </div>

            {/* Keyboard hint */}
            <p className="poetry-keyboard-hint" aria-hidden="true">
              ← → arrow keys to navigate
            </p>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
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
      <div className="poetry-empty__ink" aria-hidden="true" />
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
