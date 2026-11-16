import { Link } from 'react-router-dom';
import { siteConfig } from '../data/config';
import './Footer.css';

const FOOTER_LINKS = [
  { label: 'About',              href: '/#about' },
  { label: 'Projects',           href: '/#projects' },
  { label: 'Experience',         href: '/#experience' },
  { label: 'Beyond Engineering', href: '/#beyond' },
  { label: 'Contact',            href: '/#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        {/* Top row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Back to top">
              Vrushali Parmar
            </Link>
            <p className="footer__tagline">
              Electronics &amp; Telecommunication Engineering student.<br />
              Building software. Exploring AI/ML and VLSI.
            </p>
            <div className="footer__social">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub (opens in new tab)"
              >
                GitHub
              </a>
              <span className="footer__social-sep" aria-hidden="true">·</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn (opens in new tab)"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Nav links */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <p className="footer__nav-heading">Sections</p>
            <ul className="footer__nav-list" role="list">
              {FOOTER_LINKS.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="footer__nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Poetry */}
          <div className="footer__poetry-col">
            <p className="footer__nav-heading">Words</p>
            <Link to="/poetry" className="footer__poetry-link">
              Somewhere Between Words ↗
            </Link>
            <p className="footer__poetry-desc">
              A quiet corner for poems and fragments.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="footer__bottom">
          <p className="footer__copy">
            Designed and built by Vrushali Parmar · &copy; {year}
          </p>
          <p className="footer__made-with">
            Built with React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
