import { useReveal } from '../hooks/useReveal';
import './Beyond.css';

interface Interest {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: () => JSX.Element;
}

const INTERESTS: Interest[] = [
  {
    id: 'poetry',
    title: 'Poetry',
    description: 'Writing thoughts, emotions, and little pieces of life into words.',
    color: 'sage',
    icon: QuillIcon,
  },
  {
    id: 'mandala',
    title: 'Mandala & Rangoli',
    description: 'Finding creativity, patience, and expression in patterns and colors.',
    color: 'warm',
    icon: MandalaIcon,
  },
  {
    id: 'cooking',
    title: 'Cooking',
    description: 'Experimenting with flavors, enjoying the process, and creating something from scratch.',
    color: 'earth',
    icon: CulinaryIcon,
  },
];

export default function Beyond() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="beyond" className="section beyond" aria-labelledby="beyond-heading">
      <div className="container">
        <div ref={ref} className="beyond__header reveal">
          <span className="section-label">Beyond the lab</span>
          <h2 className="section-title" id="beyond-heading">
            Beyond the Circuits &amp; Code
          </h2>
        </div>

        <div className="beyond__intro">
          <p>
            Not everything I enjoy involves solving problems with technology.
          </p>
          <p>
            I find joy in creativity, quiet moments, and expressing things that sometimes
            don't fit into words.
          </p>
        </div>

        <div className="beyond__cards" role="list">
          {INTERESTS.map(interest => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.id}
                className={`beyond__card beyond__card--${interest.color}`}
                role="listitem"
              >
                <div className="beyond__card-icon" aria-hidden="true">
                  <Icon />
                </div>
                <div className="beyond__card-content">
                  <h3 className="beyond__card-title">{interest.title}</h3>
                  <p className="beyond__card-desc">{interest.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="beyond__closing">
          These are the little things that make me feel like myself beyond being an
          engineering student.
        </p>
      </div>
    </section>
  );
}

function QuillIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m18 2 4 4-12 12H6v-4L18 2z"/>
      <path d="M14.5 5.5 18.5 9.5"/>
      <path d="M4 20h16"/>
    </svg>
  );
}

function MandalaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2a4 4 0 0 1 4 4c0 3-4 6-4 6s-4-3-4-6a4 4 0 0 1 4-4z"/>
      <path d="M12 22a4 4 0 0 1-4-4c0-3 4-6 4-6s4 3 4 6a4 4 0 0 1-4 4z"/>
      <path d="M2 12a4 4 0 0 1 4-4c3 0 6 4 6 4s-3 4-6 4a4 4 0 0 1-4-4z"/>
      <path d="M22 12a4 4 0 0 1-4 4c-3 0-6-4-6-4s3-4 6-4a4 4 0 0 1 4 4z"/>
    </svg>
  );
}

function CulinaryIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4M8.5 3.5l2 3.5M15.5 3.5l-2 3.5"/>
      <path d="M4 11h16a8 8 0 0 1-16 0z"/>
      <path d="M6 19h12"/>
    </svg>
  );
}
