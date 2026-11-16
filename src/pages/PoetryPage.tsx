import { useState } from 'react';
import { Link } from 'react-router-dom';
import { poems, type Poem, type PoemCategory } from '../data/poems';
import './PoetryPage.css';

const CATEGORIES: PoemCategory[] = ['Life', 'Growth', 'Feelings', 'Unspoken', 'Fragments'];

export default function PoetryPage() {
  const [activeCategory, setActiveCategory] = useState<PoemCategory | 'All'>('All');

  const filtered =
    activeCategory === 'All'
      ? poems
      : poems.filter(p => p.category === activeCategory);

  return (
    <div className="poetry-page">
      {/* Skip link */}
      <a href="#poetry-main" className="skip-link">Skip to poems</a>

      {/* Header */}
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

      {/* Hero */}
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
              <p>
                Some thoughts find their way into notebooks. Some remain unfinished.
                And some become poems.
              </p>
              <p>
                This is a little corner of the internet where I keep them.
              </p>
              <p>
                Not everything here needs an explanation. Some things are simply meant
                to be felt.
              </p>
              <p className="poetry-hero__welcome">
                Welcome to my words.
              </p>
            </div>
          </div>

          {/* Decorative ink strokes */}
          <div className="poetry-hero__deco" aria-hidden="true">
            <div className="poetry-hero__ink" />
            <div className="poetry-hero__ink poetry-hero__ink--2" />
          </div>
        </div>
      </section>

      {/* Main */}
      <main id="poetry-main" className="poetry-main container" tabIndex={-1}>

        {/* Category filter — only show when there are poems with categories */}
        {poems.length > 0 && poems.some(p => p.category) && (
          <nav className="poetry-filter" aria-label="Filter poems by category">
            <ul className="poetry-filter__list" role="list">
              <li>
                <button
                  className={`poetry-filter__btn${activeCategory === 'All' ? ' poetry-filter__btn--active' : ''}`}
                  onClick={() => setActiveCategory('All')}
                  aria-pressed={activeCategory === 'All'}
                  type="button"
                >
                  All
                </button>
              </li>
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    className={`poetry-filter__btn${activeCategory === cat ? ' poetry-filter__btn--active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    type="button"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Poems or empty state */}
        {filtered.length === 0 ? (
          <EmptyState hasPoems={poems.length > 0} category={activeCategory} />
        ) : (
          <div className="poetry-poems" role="feed" aria-label="Poems">
            {filtered.map(poem => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>
        )}
      </main>

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

/* ── Poem card ────────────────────────────────────────────────────────────── */
function PoemCard({ poem }: { poem: Poem }) {
  return (
    <article
      id={poem.id}
      className="poem-card"
      aria-label={poem.title}
      tabIndex={0}
    >
      {/* Poem header */}
      <header className="poem-card__header">
        {poem.category && (
          <span className="poem-card__category">{poem.category}</span>
        )}
        <h2 className="poem-card__title">{poem.title}</h2>
        {poem.date && (
          <p className="poem-card__date">
            <time>{poem.date}</time>
          </p>
        )}
      </header>

      {/* Poem body */}
      <div className="poem-card__body" role="region" aria-label={`Text of ${poem.title}`}>
        {poem.lines.map((line, i) =>
          line === '' ? (
            <div key={i} className="poem-card__stanza-break" aria-hidden="true" />
          ) : (
            <p key={i} className="poem-card__line">{line}</p>
          ),
        )}
      </div>

      {poem.note && (
        <footer className="poem-card__note">
          <p>{poem.note}</p>
        </footer>
      )}
    </article>
  );
}

/* ── Empty state ──────────────────────────────────────────────────────────── */
function EmptyState({
  hasPoems,
  category,
}: {
  hasPoems: boolean;
  category: PoemCategory | 'All';
}) {
  if (hasPoems && category !== 'All') {
    return (
      <div className="poetry-empty">
        <p>No poems in <em>{category}</em> yet.</p>
        <p className="poetry-empty__note">
          Check back soon, or browse all categories.
        </p>
      </div>
    );
  }

  return (
    <div className="poetry-empty">
      <div className="poetry-empty__ink" aria-hidden="true" />
      <p className="poetry-empty__message">
        New words will find their way here.
      </p>
      <p className="poetry-empty__sub">
        {/* 👉 Add poems in src/data/poems.ts to populate this page */}
        Add poems in <code>src/data/poems.ts</code> and they'll appear here.
      </p>
    </div>
  );
}

/* ── Back arrow ───────────────────────────────────────────────────────────── */
function BackArrow() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
    </svg>
  );
}
