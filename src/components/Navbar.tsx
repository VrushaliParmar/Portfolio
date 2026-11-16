import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/config';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home',               href: '/#home' },
  { label: 'About',              href: '/#about' },
  { label: 'Projects',           href: '/#projects' },
  { label: 'Experience',         href: '/#experience' },
  { label: 'Beyond Engineering', href: '/#beyond' },
  { label: 'Contact',            href: '/#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const location                  = useLocation();
  const isPoetryPage              = location.pathname === '/poetry';

  // Shadow after scrolling 20 px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Smooth-scroll helper: works for same-page anchors and cross-page anchors
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('/#')) {
        const id = href.slice(2);
        if (!isPoetryPage) {
          e.preventDefault();
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          closeMenu();
        }
        // If on poetry page, let the link navigate normally (React Router Link handles it)
      }
      closeMenu();
    },
    [isPoetryPage, closeMenu],
  );

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Logo / wordmark */}
        <Link to="/" className="navbar__logo" aria-label="Vrushali Parmar — home">
          <span className="navbar__logo-name">Vrushali Parmar</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__list" role="list">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="navbar__link"
                  onClick={e => handleNavClick(e, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/poetry"
                className="navbar__link navbar__link--poetry"
                aria-label="Somewhere Between Words — poetry page (opens in this tab)"
              >
                Poetry
                <span className="navbar__poetry-arrow" aria-hidden="true">↗</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social icons — desktop only */}
        <div className="navbar__social" aria-label="Social links">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__social-link"
            aria-label="GitHub profile (opens in new tab)"
          >
            <GitHubIcon />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__social-link"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="navbar__bar" />
          <span className="navbar__bar" />
          <span className="navbar__bar" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-list" role="list">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="navbar__mobile-link"
                  onClick={e => handleNavClick(e, item.href)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/poetry"
                className="navbar__mobile-link navbar__mobile-link--poetry"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                Poetry ↗
              </Link>
            </li>
          </ul>

          <div className="navbar__mobile-social">
            <a href={siteConfig.github}  target="_blank" rel="noopener noreferrer" aria-label="GitHub" tabIndex={menuOpen ? 0 : -1}>GitHub</a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" tabIndex={menuOpen ? 0 : -1}>LinkedIn</a>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

/* ── Inline SVG icons ─────────────────────────────────────────────────────── */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
