const blocks = [
  {
    title: "Real Client Exposure",
    desc: "Work on actual business requirements and understand how marketing works outside the classroom.",
  },
  {
    title: "Practical Learning",
    desc: "Learn by executing campaigns, creating content, analysing data and solving marketing problems.",
  },
  {
    title: "Industry-Relevant Skills",
    desc: "Learn SEO, performance marketing, social media, analytics, AI tools and the technologies shaping modern marketing.",
  },
  {
    title: "Career-Focused",
    desc: "Build the portfolio, confidence and practical experience required to pursue employment, freelancing or entrepreneurship.",
  },
];

/**
 * "Built For The Real World" — a flush 2x2 grid of numbered blocks,
 * no card chrome (no borders, shadows or backgrounds per block), a
 * distinct silhouette from both the Career Options list and the How
 * We Teach timeline.
 */
const WhyTechnoGurukulSection = () => {
  return (
    <section className="why">
      <div className="container">
        <div className="why__head">
          <span className="why__eyebrow">Why TechnoGurukul</span>
          <h2 className="why__title">Built For The Real World</h2>
        </div>

        <ol className="why__grid">
          {blocks.map((block, i) => (
            <li className="why__block" key={block.title}>
              <span className="why__block-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="why__block-title">{block.title}</span>
              <span className="why__block-desc">{block.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WhyTechnoGurukulSection;
