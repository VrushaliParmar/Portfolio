import { siteConfig } from '../data/config';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Subtle background texture */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-shape hero__bg-shape--1" />
        <div className="hero__bg-shape hero__bg-shape--2" />
        <div className="hero__bg-shape hero__bg-shape--3" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Greeting */}
          <p className="hero__greeting" aria-hidden="true">Hello, world.</p>

          {/* Name */}
          <h1 className="hero__name">
            Hi, I'm{' '}
            <span className="hero__name-accent">Vrushali.</span>
          </h1>

          {/* Identity */}
          <p className="hero__identity">
            Electronics &amp; Telecommunication Engineering student exploring{' '}
            <strong>AI/ML</strong>, <strong>software development</strong>, and <strong>VLSI</strong>.
          </p>

          {/* Supporting copy */}
          <p className="hero__supporting">
            I enjoy learning by building — turning ideas into thoughtful software and
            exploring how intelligent systems can solve practical problems.
          </p>

          {/* CTA row */}
          <div className="hero__cta" role="group" aria-label="Quick navigation">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo('projects')}
              type="button"
            >
              Explore my projects
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollTo('contact')}
              type="button"
            >
              Get in touch
            </button>
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                className="btn btn-ghost"
                download
                aria-label="Download resume (PDF)"
              >
                <DownloadIcon /> Resume
              </a>
            )}
          </div>

          {/* Social links */}
          <div className="hero__social" aria-label="Social profiles">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="View GitHub profile (opens in new tab)"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <span className="hero__social-divider" aria-hidden="true" />
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="View LinkedIn profile (opens in new tab)"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Decorative right panel */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-card">
            <div className="hero__visual-line" />
            <div className="hero__visual-tags">
              {[
                'Python', 'React', 'TensorFlow',
                'FastAPI', 'Flutter', 'LangChain',
                'scikit-learn', 'Cadence Virtuoso',
              ].map(tag => (
                <span key={tag} className="hero__visual-tag">{tag}</span>
              ))}
            </div>
            <div className="hero__visual-quote">
              <span className="hero__visual-quote-mark">"</span>
              <span>Learning by building.</span>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="hero__scroll-hint">
            <div className="hero__scroll-dot" />
            <span>scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
