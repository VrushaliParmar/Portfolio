import { siteConfig } from '../data/config';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__layout">
          {/* Text */}
          <div className="contact__text">
            <span className="section-label">Get in touch</span>
            <h2 className="section-title" id="contact-heading">
              Let's connect.
            </h2>
            <p className="contact__invite">
              I'm always glad to connect with people who are curious about technology,
              thoughtful engineering, and ideas worth building.
            </p>
            <p className="contact__sub">
              Whether you'd like to discuss a project, talk about AI/ML, exchange ideas,
              or simply say hello — feel free to reach out.
            </p>
          </div>

          {/* Contact card */}
          <div className="contact__card card">
            <h3 className="contact__card-heading">Ways to reach me</h3>

            <ul className="contact__links" role="list">
              {/* Email */}
              <li className="contact__link-item">
                <div className="contact__link-icon" aria-hidden="true">
                  <EmailIcon />
                </div>
                <div className="contact__link-content">
                  <span className="contact__link-label">Email</span>
                  {siteConfig.email ? (
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="contact__link"
                      aria-label={`Send email to ${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  ) : (
                    <span className="contact__placeholder">
                      {/* 👉 Add your email to src/data/config.ts */}
                      Add your email in <code>src/data/config.ts</code>
                    </span>
                  )}
                </div>
              </li>

              {/* GitHub */}
              <li className="contact__link-item">
                <div className="contact__link-icon" aria-hidden="true">
                  <GitHubIcon />
                </div>
                <div className="contact__link-content">
                  <span className="contact__link-label">GitHub</span>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                    aria-label="GitHub profile (opens in new tab)"
                  >
                    @VrushaliParmar
                  </a>
                </div>
              </li>

              {/* LinkedIn */}
              <li className="contact__link-item">
                <div className="contact__link-icon" aria-hidden="true">
                  <LinkedInIcon />
                </div>
                <div className="contact__link-content">
                  <span className="contact__link-label">LinkedIn</span>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                    aria-label="LinkedIn profile (opens in new tab)"
                  >
                    vrushali-parmar-259669397
                  </a>
                </div>
              </li>
            </ul>

            <div className="contact__card-note">
              <p>
                I typically respond within a few days. For the fastest reply,
                LinkedIn or email works best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Icons ────────────────────────────────────────────────────────────────── */
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

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
