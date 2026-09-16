const paths = [
  {
    name: "Get Hired",
    desc: "Build the skills and portfolio needed to enter the digital marketing industry.",
  },
  {
    name: "Go Freelance",
    desc: "Learn how to find clients, understand their requirements and deliver marketing services.",
  },
  {
    name: "Build Your Business",
    desc: "Use digital marketing to attract customers, build your brand and grow your business.",
  },
];

/**
 * Asymmetric, image-led composition — the first section on the page
 * where a photograph is the dominant visual element, not a supporting
 * half-column. Deliberately different silhouette from every section
 * above it (no border panel, no timeline, no centered stat block).
 * Content is the approved "Career Options" copy from the homepage
 * brief, verbatim — these are directions, not job-title promises.
 */
const CareerDirectionsSection = () => {
  return (
    <section className="career">
      <div className="container">
        <div className="career__grid">
          <div
            className="career__visual"
            role="img"
            aria-label="Placeholder for a future photo: students collaborating on a real digital marketing project"
          >
            <span className="career__visual-label">Image Placeholder</span>
            <span className="career__visual-dims">1080 × 1350 px</span>
            <span className="career__visual-ratio">4:5</span>
            <span className="career__visual-hint">
              Suggested image: students collaborating on a real digital
              marketing project
            </span>
          </div>

          <div className="career__content">
            <span className="career__ghost-number" aria-hidden="true">
              3
            </span>
            <span className="career__eyebrow">Career Options</span>
            <h2 className="career__title">One Skill. Three Directions.</h2>

            <ul className="career__paths">
              {paths.map((path) => (
                <li key={path.name}>
                  <span className="career__path-name">{path.name}</span>
                  <span className="career__path-desc">{path.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDirectionsSection;
