/**
 * Image placeholder for the future real photo. Swap the contents of
 * `.practical__visual` for a Next/Image with the same aspect-ratio
 * wrapper — layout, spacing and radius stay untouched.
 */
const ImagePlaceholder = () => (
  <div
    className="practical__visual"
    role="img"
    aria-label="Placeholder for a future photo: students working on a practical digital marketing project"
  >
    <span className="practical__visual-label">Image Placeholder</span>
    <span className="practical__visual-dims">1200 × 800 px</span>
    <span className="practical__visual-ratio">3:2</span>
    <span className="practical__visual-hint">
      Suggested image: students working on a practical marketing project
    </span>
  </div>
);

const PracticalLearningSection = () => {
  return (
    <section className="practical">
      <div className="container">
        <div className="practical__grid">
          <div className="practical__content">
            <span className="practical__eyebrow">Practical Learning</span>
            <h2 className="practical__title">
              The Difference Between Knowing And Doing
            </h2>
            <p className="practical__desc">
              Digital marketing isn&apos;t something you master by memorising
              concepts. At TechnoGurukul, you master it by creating
              campaigns, analysing audiences, writing content, optimising ads
              and solving real problems — then learning from what happens
              next.
            </p>
            <ul className="practical__points">
              <li>Real campaigns, not just case studies</li>
              <li>Real problems, not just theory</li>
              <li>Real practice, not just presentations</li>
            </ul>
          </div>

          <ImagePlaceholder />
        </div>
      </div>
    </section>
  );
};

export default PracticalLearningSection;
