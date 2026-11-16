import { useReveal } from '../hooks/useReveal';
import './Journey.css';

export default function Journey() {
  const contentRef = useReveal<HTMLDivElement>();
  const visualRef  = useReveal<HTMLDivElement>();

  return (
    <section id="journey" className="section section-alt journey" aria-labelledby="journey-heading">
      <div className="container">
        <div className="journey__layout">

          {/* ── Text column ── */}
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
              <p>I'm not just building a career. I'm building myself, one step at a time.</p>
              <p className="journey__closing">
                This portfolio is a little glimpse of that journey — the things I've built,
                the things I've learned, the things I love, and the person I'm becoming.
              </p>
            </div>
          </div>

          {/* ── Visual column ── */}
          <div ref={visualRef} className="journey__visual reveal reveal-delay-2" aria-hidden="true">

            {/* ── Animated mountain scene ── */}
            <div className="journey__mountain-wrap">
              <MountainScene />
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
                { label: 'Projects built',     value: '4+' },
                { label: 'Domains explored',   value: '3'  },
                { label: 'Currently building', value: '✦'  },
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

/* ══════════════════════════════════════════════════════════════════════════
   ANIMATED MOUNTAIN SCENE
   Layers (back → front): sky gradient · distant peaks · mid peaks ·
   near ridge · forest treeline · mist band · stars · moon · birds
   All motion is CSS-driven, respects prefers-reduced-motion.
   ══════════════════════════════════════════════════════════════════════════ */
function MountainScene() {
  return (
    <svg
      className="mountain-svg"
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Sky gradient — dawn palette matching oatmeal/pine/lilac */}
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E8DCC6" stopOpacity="0.55"/>
          <stop offset="40%"  stopColor="#CBB3E8" stopOpacity="0.22"/>
          <stop offset="100%" stopColor="#F5F0E6" stopOpacity="0.1"/>
        </linearGradient>

        {/* Snow cap gradient */}
        <linearGradient id="snowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#FDFAF5" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#EDE5D4" stopOpacity="0.3"/>
        </linearGradient>

        {/* Mist gradient */}
        <linearGradient id="mistGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#EDE5D4" stopOpacity="0"/>
          <stop offset="50%" stopColor="#EDE5D4" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#EDE5D4" stopOpacity="0"/>
        </linearGradient>

        {/* Clipping rect */}
        <clipPath id="sceneClip">
          <rect width="400" height="260" rx="16"/>
        </clipPath>
      </defs>

      <g clipPath="url(#sceneClip)">

        {/* ── Sky fill ── */}
        <rect width="400" height="260" fill="url(#skyGrad)"/>

        {/* ── Stars — tiny, slow twinkle ── */}
        {[
          [38,18,0.6],[80,10,0.5],[130,22,0.7],[190,8,0.5],
          [245,15,0.6],[300,10,0.7],[350,20,0.5],[370,8,0.6],
          [60,30,0.4],[170,32,0.5],[320,28,0.4],
        ].map(([cx,cy,op],i) => (
          <circle key={i}
            cx={cx} cy={cy} r={0.9}
            fill="#1F3B2E" opacity={op}
            className={`star star-${(i % 3) + 1}`}
          />
        ))}

        {/* ── Moon — soft lilac disc ── */}
        <circle cx="345" cy="30" r="14"
          fill="#CBB3E8" opacity="0.18" className="moon"/>
        <circle cx="345" cy="30" r="10"
          fill="#CBB3E8" opacity="0.14" className="moon"/>
        <circle cx="345" cy="30" r="6"
          fill="#CBB3E8" opacity="0.22"/>

        {/* ── Back range — farthest, lightest ── */}
        <path
          d="M0,170 L40,110 L80,140 L120,90 L165,120 L200,80
             L240,115 L280,70 L320,105 L360,75 L400,100 L400,260 L0,260 Z"
          fill="#1F3B2E" opacity="0.07"
          className="mountain-back"
        />

        {/* ── Mid range — snow caps ── */}
        <path
          d="M0,195 L50,135 L95,165 L140,105 L185,145 L220,95
             L265,130 L305,88 L350,120 L400,95 L400,260 L0,260 Z"
          fill="#1F3B2E" opacity="0.13"
          className="mountain-mid"
        />
        {/* Snow on mid peaks */}
        <path
          d="M140,105 L155,125 L125,125 Z
             M220,95 L236,116 L204,116 Z
             M305,88 L321,110 L289,110 Z"
          fill="url(#snowGrad)" opacity="0.85"
        />

        {/* ── Near range — main peaks ── */}
        <path
          d="M0,215 L60,155 L105,180 L155,118 L200,158 L245,110
             L290,148 L335,125 L380,155 L400,145 L400,260 L0,260 Z"
          fill="#1F3B2E" opacity="0.22"
          className="mountain-near"
        />
        {/* Snow on near peaks */}
        <path
          d="M155,118 L173,142 L137,142 Z
             M245,110 L263,135 L227,135 Z
             M335,125 L350,145 L320,145 Z"
          fill="url(#snowGrad)" opacity="0.9"
        />

        {/* ── Forest treeline — serrated silhouette ── */}
        <path
          d="M0,230
             L10,218 L18,228 L26,214 L34,224 L42,210 L50,222
             L58,208 L66,220 L74,206 L82,218 L90,204 L98,216
             L106,202 L114,214 L122,200 L130,212 L138,200 L146,212
             L154,198 L162,210 L170,198 L178,210 L186,196 L194,208
             L202,195 L210,207 L218,194 L226,206 L234,194 L242,206
             L250,193 L258,205 L266,194 L274,206 L282,195 L290,207
             L298,196 L306,208 L314,196 L322,208 L330,197 L338,209
             L346,198 L354,210 L362,200 L370,212 L378,202 L386,214
             L394,205 L400,215
             L400,260 L0,260 Z"
          fill="#1F3B2E" opacity="0.55"
          className="treeline"
        />

        {/* ── Path winding up mountain ── */}
        <path
          d="M60,255 Q90,235 120,225 Q150,215 165,200 Q180,185 195,172"
          fill="none"
          stroke="#E8DCC6" strokeWidth="1.2"
          strokeDasharray="4,3"
          opacity="0.5"
          className="mountain-path"
        />

        {/* ── Mist band — drifts slowly across ── */}
        <rect x="-400" y="175" width="1200" height="28"
          fill="url(#mistGrad)"
          className="mist"
        />

        {/* ── Foreground ground ── */}
        <path
          d="M0,245 Q100,238 200,242 Q300,246 400,240 L400,260 L0,260 Z"
          fill="#1F3B2E" opacity="0.08"
        />

        {/* ── Birds — two tiny arcs drifting right ── */}
        <g className="birds">
          <path d="M80,80 Q84,76 88,80" fill="none"
            stroke="#1F3B2E" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
          <path d="M94,86 Q98,82 102,86" fill="none"
            stroke="#1F3B2E" strokeWidth="1" opacity="0.35" strokeLinecap="round"/>
        </g>

      </g>
    </svg>
  );
}
