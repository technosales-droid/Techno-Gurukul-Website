import MainLayout from "@/components/layout/MainLayout";

const CareerPathsPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Where Can Digital Marketing Take You?</h1>
          <p className="page-hero__desc">
            Digital marketing isn&apos;t a single job. It&apos;s a collection
            of skills that can lead to multiple career paths.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <span className="content-block__eyebrow">Career Path 1</span>
            <h2 className="content-block__title">Digital Marketing Professional</h2>
            <p className="content-block__desc">
              Work with brands and businesses across digital marketing
              functions. Possible roles include:
            </p>
            <ul className="content-list">
              <li>Digital Marketing Executive</li>
              <li>Digital Marketing Specialist</li>
              <li>Social Media Executive</li>
              <li>SEO Executive</li>
              <li>Performance Marketing Executive</li>
              <li>Content Marketer</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section content-section--alt">
        <div className="container">
          <div className="content-block">
            <span className="content-block__eyebrow">Career Path 2</span>
            <h2 className="content-block__title">Freelancer</h2>
            <p className="content-block__desc">
              Turn your skills into independent services. Learn how to:
            </p>
            <ul className="content-list">
              <li>Find potential clients</li>
              <li>Understand requirements</li>
              <li>Pitch services</li>
              <li>Execute campaigns</li>
              <li>Report results</li>
              <li>Build long-term relationships</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <span className="content-block__eyebrow">Career Path 3</span>
            <h2 className="content-block__title">Entrepreneur</h2>
            <p className="content-block__desc">
              If you own a business, digital marketing becomes a growth
              engine. Use it to:
            </p>
            <ul className="content-list">
              <li>Build awareness</li>
              <li>Generate leads</li>
              <li>Acquire customers</li>
              <li>Build communities</li>
              <li>Measure marketing performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <h2 className="content-cta__title">
            Don&apos;t Choose A Career Before You Build A Skill.
          </h2>
          <p className="content-cta__desc">
            Build the skill first. Then decide where you want to take it.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default CareerPathsPageMain;
