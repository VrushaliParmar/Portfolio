import { useReveal } from '../hooks/useReveal';
import './Clubs.css';

interface Club {
  id: string;
  name: string;
  nameExpanded?: string;
  role: string;
  tagline: string;
  about: string;
  responsibilities: string[];
  skills: string[];
  accent: 'lilac' | 'pine';
  icon: () => JSX.Element;
}

const CLUBS: Club[] = [
  {
    id: 'happy-hours',
    name: 'The Happy Hours',
    role: 'Activity Coordinator & Social Media Management',
    tagline: 'Mental well-being · Self-reflection · Community',
    about:
      'The Happy Hours is a college club focused on mental well-being, self-reflection, and creating meaningful connections — with oneself and with others. It is a space where students are encouraged to pause, reflect, and genuinely appreciate themselves.',
    responsibilities: [
      'Planning and organising activities centred around mental well-being, self-awareness, and emotional connection.',
      'Designing simple yet meaningful experiences — such as self-appreciation exercises, gratitude reflections, and interactive activities — that invite people to reconnect with themselves.',
      'Creating welcoming environments where students feel comfortable to slow down, reflect, and show up for themselves.',
      'Managing and contributing to the club\'s social media presence to communicate initiatives and maintain community engagement.',
    ],
    skills: ['Event Planning', 'Community Building', 'Social Media', 'Empathy', 'Communication'],
    accent: 'lilac',
    icon: HeartIcon,
  },
  {
    id: 'acm',
    name: 'ACM',
    nameExpanded: 'Association for Computing Machinery',
    role: 'Content Writing Team Member',
    tagline: 'Technical communication · Content · Collaboration',
    about:
      'ACM is one of the world\'s largest computing societies. As part of the Content Writing Team at the college chapter, I contribute to how technical knowledge and club activities are communicated to the student community.',
    responsibilities: [
      'Writing and refining content for technical events, workshops, and club activities.',
      'Developing engaging captions, announcements, and event-related copy for social media and other communication platforms.',
      'Communicating technical concepts and event information in a clear, accessible, and engaging manner for a broad student audience.',
      'Collaborating with the team to maintain consistency in tone, clarity, and voice across all content.',
    ],
    skills: ['Technical Writing', 'Content Strategy', 'Collaboration', 'Clarity', 'Attention to Detail'],
    accent: 'pine',
    icon: PenIcon,
  },
];

export default function Clubs() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section id="clubs" className="section clubs" aria-labelledby="clubs-heading">
      <div className="container">
        <div ref={headerRef} className="clubs__header reveal">
          <span className="section-label">Campus involvement</span>
          <h2 className="section-title" id="clubs-heading">Clubs &amp; Community</h2>
          <p className="section-subtitle">
            Beyond academics, I engage with communities that matter to me —
            building connections, communicating ideas, and contributing to a
            campus culture of well-being and curiosity.
          </p>
        </div>

        <div className="clubs__grid">
          {CLUBS.map((club, i) => (
            <ClubCard key={club.id} club={club} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Individual card — own component so useReveal is called at top level ── */
function ClubCard({ club, index }: { club: Club; index: number }) {
  const cardRef = useReveal<HTMLElement>();
  const Icon    = club.icon;

  return (
    <article
      ref={cardRef}
      className={`clubs__card clubs__card--${club.accent} reveal`}
      style={{ transitionDelay: `${index * 100}ms` }}
      aria-label={club.name}
    >
      {/* Top accent strip */}
      <div className="clubs__card-bar" aria-hidden="true" />

      <div className="clubs__card-body">

        {/* ── Left: identity panel ── */}
        <div className="clubs__identity">
          <div className="clubs__card-header">
            <div className="clubs__icon-wrap" aria-hidden="true">
              <Icon />
            </div>
            <div className="clubs__card-title-group">
              <h3 className="clubs__card-name">{club.name}</h3>
              {club.nameExpanded && (
                <p className="clubs__card-name-full">{club.nameExpanded}</p>
              )}
              <p className="clubs__card-role">{club.role}</p>
            </div>
          </div>

          <div className="clubs__tagline" aria-hidden="true">
            {club.tagline.split(' · ').map(t => (
              <span key={t} className={`clubs__chip clubs__chip--${club.accent}`}>{t}</span>
            ))}
          </div>

          <p className="clubs__about">{club.about}</p>
        </div>

        {/* ── Right: responsibilities + skills ── */}
        <div className="clubs__content">
          <div className="clubs__responsibilities">
            <p className="clubs__responsibilities-label">What I do</p>
            <ul className="clubs__list" aria-label={`Responsibilities at ${club.name}`}>
              {club.responsibilities.map((r, ri) => (
                <li key={ri}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="clubs__skills" role="list" aria-label="Skills developed">
            {club.skills.map(s => (
              <span key={s} className="tag" role="listitem">{s}</span>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}

/* ── Icons ────────────────────────────────────────────────────────────────── */
function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
      stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function PenIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
      stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  );
}
