import MainLayout from "@/components/layout/MainLayout";

const modules = [
  "Digital Marketing Fundamentals",
  "Marketing Strategy & Consumer Psychology",
  "Branding & Positioning",
  "Content Marketing & Copywriting",
  "Social Media Marketing",
  "SEO",
  "AEO & GEO",
  "Website & Landing Page Fundamentals",
  "Google Ads",
  "Meta Advertising",
  "Performance Marketing",
  "Analytics & Tracking",
  "Lead Generation & WhatsApp Marketing",
  "E-commerce Marketing",
  "AI Tools For Marketers",
  "Freelancing & Client Acquisition",
  "Campaign Projects",
  "Career Preparation",
];

const CurriculumPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">
            Everything You Need To Think, Create, Launch And Measure.
          </h1>
          <p className="page-hero__desc">
            Digital marketing isn&apos;t one skill. It&apos;s an ecosystem.
            Our curriculum brings together marketing strategy, consumer
            behaviour, content, search, advertising, analytics, technology
            and AI to give students a complete understanding of modern
            digital marketing.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <ul className="module-list">
            {modules.map((title, i) => (
              <li key={title}>
                <span className="module-list__number">
                  Module {String(i + 1).padStart(2, "0")}
                </span>
                <span className="module-list__title">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <h2 className="content-cta__title">
            Learn the tools. Understand the thinking. Do the work.
          </h2>
        </div>
      </section>
    </MainLayout>
  );
};

export default CurriculumPageMain;
