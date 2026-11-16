import { useReveal } from '../hooks/useReveal';
import './About.css';

const SKILLS = [
  { group: 'Languages',           items: ['Python', 'C++', 'Java', 'Dart'] },
  { group: 'Machine Learning',    items: ['scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Feature Engineering', 'Model Evaluation'] },
  { group: 'NLP & Generative AI', items: ['TF-IDF', 'Whisper ASR', 'Gemini 1.5 Flash', 'LangChain', 'OpenAI API', 'HuggingFace Transformers', 'RAG'] },
  { group: 'Backend & Frontend',  items: ['FastAPI', 'React', 'Flutter', 'Node.js'] },
  { group: 'Data & Tools',        items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Git', 'GitHub', 'Google Colab'] },
  { group: 'VLSI',                items: ['Cadence Virtuoso', 'Spectre', 'CMOS Design', '45 nm / 90 nm'] },
];

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Machine Learning',
  'Deep Learning',
  'Artificial Intelligence',
  'Database Management Systems',
  'Computer Networks & Cloud Computing',
  'Embedded Systems',
  'Web Development',
];

export default function About() {
  const headerRef = useReveal<HTMLDivElement>();
  const bodyRef   = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">
        {/* Header */}
        <div ref={headerRef} className="about__header reveal">
          <span className="section-label">About me</span>
          <h2 className="section-title" id="about-heading">
            Engineering student.<br />
            Curious builder.
          </h2>
        </div>

        {/* Two-column layout */}
        <div ref={bodyRef} className="about__body reveal reveal-delay-1">
          {/* Story */}
          <div className="about__story">
            <p className="about__lead">
              I'm Vrushali Parmar, a final-year Electronics &amp; Telecommunication Engineering student
              at MKSSS's Cummins College of Engineering for Women, Pune.
            </p>
            <p>
              My interests sit at the crossroads of <strong>software development</strong>,{' '}
              <strong>machine learning</strong>, and <strong>VLSI design</strong>. I'm drawn to
              problems where thoughtful engineering can make something genuinely useful — whether
              that's a classification model, a full-stack prototype, or a low-power digital circuit.
            </p>
            <p>
              I learn best by building. Projects are where I discover what I don't yet know,
              figure out how things actually work, and start to develop an instinct for making
              good decisions under real constraints.
            </p>
            <p>
              I'm still early in my journey — still figuring things out, still experimenting —
              and I think that's exactly the right place to be right now.
            </p>

            {/* Education cards */}
            <div className="about__edu-card">
              <div className="about__edu-icon" aria-hidden="true">
                <CapIcon />
              </div>
              <div>
                <p className="about__edu-degree">
                  B.Tech in Electronics &amp; Telecommunication Engineering
                </p>
                <p className="about__edu-school">
                  MKSSS's Cummins College of Engineering for Women, Pune
                </p>
                <p className="about__edu-meta">CGPA: 7.56 / 10 · Final year</p>
              </div>
            </div>

            <div className="about__edu-card">
              <div className="about__edu-icon" aria-hidden="true">
                <BookIcon />
              </div>
              <div>
                <p className="about__edu-degree">
                  HSC — Class XII
                </p>
                <p className="about__edu-school">
                  Nemsushil Junior High School, Taloda
                </p>
                <p className="about__edu-meta">90.60% · 2021</p>
              </div>
            </div>

            <div className="about__edu-card">
              <div className="about__edu-icon" aria-hidden="true">
                <SchoolIcon />
              </div>
              <div>
                <p className="about__edu-degree">
                  SSC — Class X
                </p>
                <p className="about__edu-school">
                  Shremoti Vidyamandir, Taloda
                </p>
                <p className="about__edu-meta">90.40% · 2019</p>
              </div>
            </div>

            {/* Coursework */}
            <div className="about__coursework">
              <p className="about__coursework-label">Relevant coursework</p>
              <ul className="about__coursework-list" role="list">
                {COURSEWORK.map(c => (
                  <li key={c} className="tag">{c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills panel */}
          <aside className="about__skills" aria-label="Technical skills">
            <h3 className="about__skills-heading">Technical skills</h3>
            <dl className="about__skills-list">
              {SKILLS.map(({ group, items }) => (
                <div key={group} className="about__skill-group">
                  <dt className="about__skill-group-label">{group}</dt>
                  <dd className="about__skill-items">
                    {items.map(item => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18"/>
      <path d="M5 21V7l7-4 7 4v14"/>
      <path d="M9 10h1M14 10h1M9 14h1M14 14h1"/>
      <path d="M10 21v-3h4v3"/>
    </svg>
  );
}
