import './Beyond.css';

const INTERESTS = [
  {
    id: 'poetry',
    emoji: '✍️',
    title: 'Poetry',
    description: 'Writing thoughts, emotions, and little pieces of life into words.',
    color: 'sage',
  },
  {
    id: 'mandala',
    emoji: '🌸',
    title: 'Mandala & Rangoli',
    description: 'Finding creativity, patience, and expression in patterns and colors.',
    color: 'warm',
  },
  {
    id: 'cooking',
    emoji: '🍳',
    title: 'Cooking',
    description: 'Experimenting with flavors, enjoying the process, and creating something from scratch.',
    color: 'earth',
  },
];

export default function Beyond() {
  return (
    <section id="beyond" className="section beyond" aria-labelledby="beyond-heading">
      <div className="container">
        <span className="section-label">Beyond the lab</span>
        <h2 className="section-title" id="beyond-heading">
          Beyond the Circuits &amp; Code
        </h2>

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
          {INTERESTS.map(interest => (
            <div
              key={interest.id}
              className={`beyond__card beyond__card--${interest.color}`}
              role="listitem"
            >
              <div className="beyond__card-emoji" aria-hidden="true">
                {interest.emoji}
              </div>
              <div className="beyond__card-content">
                <h3 className="beyond__card-title">{interest.title}</h3>
                <p className="beyond__card-desc">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="beyond__closing">
          These are the little things that make me feel like myself beyond being an
          engineering student.
        </p>
      </div>
    </section>
  );
}
