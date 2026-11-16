import { Link } from 'react-router-dom';
import './PoetryCard.css';

export default function PoetryCard() {
  return (
    <section
      id="poetry-link"
      className="section section-alt poetry-feature"
      aria-labelledby="poetry-feature-heading"
    >
      <div className="container">
        <div className="poetry-feature__card">
          {/* Decorative ink blot */}
          <div className="poetry-feature__bg-deco" aria-hidden="true">
            <div className="poetry-feature__ink poetry-feature__ink--1" />
            <div className="poetry-feature__ink poetry-feature__ink--2" />
          </div>

          <div className="poetry-feature__content">
            <span className="poetry-feature__eyebrow">Beyond engineering</span>
            <h2 className="poetry-feature__heading" id="poetry-feature-heading">
              Somewhere Between Words
            </h2>

            <p className="poetry-feature__body">
              Beyond engineering, there's another side of me that finds expression in words.
            </p>
            <p className="poetry-feature__body">
              I write poetry — sometimes about life, sometimes about things I can't quite
              explain, and sometimes simply because a thought deserves to exist somewhere
              beyond my mind.
            </p>
            <p className="poetry-feature__body poetry-feature__body--muted">
              A little collection of words, feelings, and fragments of myself.
            </p>

            <Link
              to="/poetry"
              className="btn btn-primary poetry-feature__cta"
              aria-label="Explore Somewhere Between Words — poetry page"
            >
              Explore My Poetry →
            </Link>
          </div>

          {/* Decorative right panel */}
          <div className="poetry-feature__side" aria-hidden="true">
            <div className="poetry-feature__lines">
              {['                 ', '—', '                 ', '                 ', '—'].map(
                (_, i) => (
                  <div
                    key={i}
                    className={`poetry-feature__line poetry-feature__line--${i + 1}`}
                  />
                ),
              )}
            </div>
            <p className="poetry-feature__side-quote">
              "Some thoughts find their way into poems."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
