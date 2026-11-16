import { experienceEntries } from '../data/experience';
import './Experience.css';

const TYPE_LABEL: Record<string, string> = {
  internship:  'Internship',
  research:    'Research',
  employment:  'Employment',
  volunteer:   'Volunteer',
  other:       'Other',
};

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-heading">
      <div className="container">
        <span className="section-label">Professional background</span>
        <h2 className="section-title" id="experience-heading">Experience</h2>
        <p className="section-subtitle">
          I'm building my experience through engineering projects, internships, and
          continued learning. Here's where I've had the chance to apply and grow.
        </p>

        {experienceEntries.length === 0 ? (
          <div className="experience__empty">
            <p>
              I'm building my experience through engineering projects and continued learning.
            </p>
            <p className="experience__empty-note">
              {/* 👉 Add your experience entries in src/data/experience.ts */}
              Add real entries in <code>src/data/experience.ts</code> to populate this section.
            </p>
          </div>
        ) : (
          <div className="experience__timeline" role="list">
            {experienceEntries.map((entry, i) => (
              <article
                key={entry.id}
                className="experience__entry"
                role="listitem"
                aria-label={`${entry.role} at ${entry.organisation}`}
              >
                {/* Timeline dot */}
                <div className="experience__timeline-col" aria-hidden="true">
                  <div className={`experience__dot${entry.current ? ' experience__dot--current' : ''}`} />
                  {i < experienceEntries.length - 1 && (
                    <div className="experience__connector" />
                  )}
                </div>

                {/* Content */}
                <div className="experience__content">
                  <div className="experience__header">
                    <div className="experience__header-top">
                      <span className="experience__type-badge">
                        {TYPE_LABEL[entry.type]}
                      </span>
                      {entry.current && (
                        <span className="experience__current-badge">Current</span>
                      )}
                    </div>
                    <h3 className="experience__role">{entry.role}</h3>
                    <div className="experience__org-row">
                      <span className="experience__org">{entry.organisation}</span>
                      <span className="experience__sep" aria-hidden="true">·</span>
                      <span className="experience__location">{entry.location}</span>
                    </div>
                    <p className="experience__dates">
                      <time>{entry.startDate}</time>
                      {' – '}
                      <time>{entry.endDate}</time>
                    </p>
                  </div>

                  {entry.highlights.length > 0 && (
                    <ul className="experience__highlights" aria-label="Key contributions">
                      {entry.highlights.map((h, hi) => (
                        <li key={hi}>{h}</li>
                      ))}
                    </ul>
                  )}

                  {entry.technologies && entry.technologies.length > 0 && (
                    <div className="experience__tech" role="list" aria-label="Technologies">
                      {entry.technologies.map(t => (
                        <span key={t} className="tag" role="listitem">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
