import { useReveal } from '../hooks/useReveal';
import './Journey.css';

export default function Journey() {
  const contentRef = useReveal<HTMLDivElement>();
  const visualRef  = useReveal<HTMLDivElement>();
  return (
    <section id="journey" className="section section-alt journey" aria-labelledby="journey-heading">
      <div className="container">
        <div className="journey__layout">
          {/* Text column */}
          <div ref={contentRef} className="journey__content reveal">
            <span className="section-label">My journey</span>
            <h2 className="section-title" id="journey-heading">
              From the Mountains<br />
              to Where I Am Today
            </h2>

            <div className="journey__prose">
              <p>My journey has never been a straight line.</p>
              <p>
                Growing up surrounded by mountains, I learned something that would stay with
                me long before I understood its meaning: reaching a destination takes patience,
                persistence, and the courage to keep moving, even when the path isn't clear.
              </p>
              <p>My journey through engineering has been much the same.</p>
              <p>
                There have been setbacks, unexpected turns, moments of self-doubt, and phases
                when I questioned whether I was doing enough or moving in the right direction.
                Some things took longer than I had imagined. Some opportunities taught me more
                through their challenges than through their outcomes.
              </p>
              <p>
                But somewhere along the way, I learned that progress isn't always about moving
                faster. Sometimes, it's about showing up again, learning something new, and
                choosing not to give up on yourself.
              </p>
              <p>
                Today, as an Electronics and Telecommunication Engineering student exploring
                software development, machine learning, and VLSI, I'm still figuring things
                out. I'm still learning, experimenting, building, and discovering what I'm
                capable of.
              </p>
              <p className="journey__highlight">
                I may not have everything figured out yet, but I have come a long way from
                where I started.
              </p>
              <p>And perhaps that's what makes this journey meaningful.</p>
              <p>
                I'm not just building a career. I'm building myself, one step at a time.
              </p>
              <p className="journey__closing">
                This portfolio is a little glimpse of that journey — the things I've built,
                the things I've learned, the things I love, and the person I'm becoming.
              </p>
            </div>
          </div>

          {/* Visual accent column */}
          <div ref={visualRef} className="journey__visual reveal reveal-delay-2" aria-hidden="true">
            {/* Mountain motif — pure CSS */}
            <div className="journey__mountain-wrap">
              <svg
                className="journey__mountain-svg"
                viewBox="0 0 400 300"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                {/* Back range */}
                <polygon
                  points="200,20 320,220 80,220"
                  fill="var(--color-accent)"
                  opacity="0.12"
                />
                {/* Mid range */}
                <polygon
                  points="120,60 280,220 0,220"
                  fill="var(--color-forest)"
                  opacity="0.08"
                />
                {/* Front range */}
                <polygon
                  points="300,80 400,220 160,220"
                  fill="var(--color-accent-dark)"
                  opacity="0.10"
                />
                {/* Ground line */}
                <line x1="0" y1="220" x2="400" y2="220" stroke="var(--color-border)" strokeWidth="1" opacity="0.4"/>
              </svg>

              {/* Quote overlay */}
              <blockquote className="journey__quote">
                <p>
                  "Progress isn't always about moving faster. Sometimes, it's about
                  showing up again."
                </p>
              </blockquote>
            </div>

            {/* Stat cards */}
            <div className="journey__stats">
              {[
                { label: 'Projects built',      value: '4+' },
                { label: 'Domains explored',    value: '3' },
                { label: 'Currently building',  value: '✦' },
              ].map(stat => (
                <div key={stat.label} className="journey__stat-card">
                  <span className="journey__stat-value">{stat.value}</span>
                  <span className="journey__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
