const stages = [
  {
    title: "Learn",
    desc: "Understand the strategy, psychology and platforms behind digital marketing before you touch a live campaign.",
  },
  {
    title: "Apply",
    desc: "Use the tools. Build real campaigns, content and creative for real business problems.",
  },
  {
    title: "Analyse",
    desc: "Study what worked, what didn't, and why — using real data, not assumptions.",
  },
  {
    title: "Improve",
    desc: "Refine the approach and go again. That's how the skill actually develops.",
  },
];

/**
 * A numbered timeline, not a card grid — the progression itself is
 * the visual element. Vertical with a connecting rule up through
 * tablet, switches to a horizontal rule at desktop widths where four
 * stages have room to breathe. No image: the process already carries
 * the section's visual interest.
 */
const HowWeTeachSection = () => {
  return (
    <section className="how">
      <div className="container">
        <div className="how__head">
          <span className="how__eyebrow">How We Teach</span>
          <h2 className="how__title">Learn It. Do It. Get Better At It.</h2>
          <p className="how__desc">
            Our classroom isn&apos;t designed to turn students into
            note-taking machines. It&apos;s designed to turn learners into
            practitioners.
          </p>
        </div>

        <ol className="how__stages">
          {stages.map((stage, i) => (
            <li className="how__stage" key={stage.title}>
              <span className="how__stage-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="how__stage-title">{stage.title}</span>
              <span className="how__stage-desc">{stage.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeTeachSection;
