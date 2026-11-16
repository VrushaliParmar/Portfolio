import { useState } from 'react';
import { projects, type Project } from '../data/projects';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

export default function Projects() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="container">
        <div ref={headerRef} className="reveal">
          <span className="section-label">What I've built</span>
          <h2 className="section-title" id="projects-heading">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of things I've built to explore ideas, learn new skills, and
            solve interesting problems.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef   = useReveal<HTMLElement>();
  const [expanded, setExpanded] = useState(false);
  const detailsId = `project-details-${project.id}`;

  return (
    <article
      ref={cardRef}
      className="project-card reveal"
      style={{ transitionDelay: `${index * 70}ms` }}
      aria-label={project.title}
    >
      {/* Top accent bar */}
      <div className="project-card__bar" aria-hidden="true" />

      <div className="project-card__body">
        {/* Header */}
        <div className="project-card__header">
          <div className="project-card__meta">
            <span className="project-card__status">{project.statusLabel}</span>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
        </div>

        {/* Problem */}
        <div className="project-card__section">
          <p className="project-card__section-label">The problem</p>
          <p className="project-card__text">{project.problem}</p>
        </div>

        {/* Description */}
        <div className="project-card__section">
          <p className="project-card__section-label">What I built</p>
          <p className="project-card__text">{project.description}</p>
        </div>

        {/* Technologies */}
        <div className="project-card__tags" role="list" aria-label="Technologies used">
          {project.technologies.map(tech => (
            <span key={tech} className="tag" role="listitem">{tech}</span>
          ))}
        </div>

        {/* Expandable: evaluation + reflection — no warning boxes */}
        <div
          id={detailsId}
          className={`project-card__details${expanded ? ' project-card__details--open' : ''}`}
          hidden={!expanded}
          aria-live="polite"
        >
          <div className="project-card__section">
            <p className="project-card__section-label">Evaluation</p>
            <p className="project-card__text">{project.evaluation}</p>
            {project.evaluationDetailsUrl && (
              <a
                href={project.evaluationDetailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__inline-link"
                aria-label={`View evaluation details for ${project.title} (opens in new tab)`}
              >
                View evaluation details ↗
              </a>
            )}
          </div>

          <div className="project-card__section">
            <p className="project-card__section-label">What I learned</p>
            <p className="project-card__text project-card__text--serif">
              {project.learningReflection}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="project-card__actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary project-card__btn"
            aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
          >
            <GitHubIcon /> View code
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent project-card__btn"
              aria-label={`Visit ${project.title} live site (opens in new tab)`}
            >
              <ExternalIcon /> Visit live site
            </a>
          )}

          <button
            className="btn btn-ghost project-card__expand-btn"
            onClick={() => setExpanded(o => !o)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            type="button"
          >
            {expanded ? 'Show less ↑' : 'Evaluation & reflection ↓'}
          </button>
        </div>
      </div>
    </article>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
    </svg>
  );
}
