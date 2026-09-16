import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

const facts = [
  { label: "Duration", value: "4.5–5 Months" },
  { label: "Mode", value: "Offline / In-Person" },
  { label: "Location", value: "Nashik, Maharashtra" },
  { label: "Learning Model", value: "Practical + Industry-Oriented" },
  { label: "Batch Size", value: "Limited" },
];

const topics = [
  { title: "Digital Marketing Strategy", desc: "Understand the role of digital in the overall marketing mix." },
  { title: "Consumer Psychology", desc: "Understand audiences, behaviour, motivations and purchase decisions." },
  { title: "Brand Building", desc: "Learn how brands create positioning, identity and meaningful connections." },
  { title: "Content & Copywriting", desc: "Create content that attracts attention and drives action." },
  { title: "Social Media Marketing", desc: "Plan, create, manage and evaluate social media campaigns." },
  { title: "Search Engine Optimisation", desc: "Learn how websites earn visibility through organic search." },
  { title: "AEO & GEO", desc: "Understand how content is structured for answer engines and generative search." },
  { title: "Google Ads", desc: "Learn search advertising, campaign structure, targeting and optimisation." },
  { title: "Meta Ads", desc: "Understand audience targeting, campaign creation and performance optimisation." },
  { title: "Performance Marketing", desc: "Learn how marketers use data to measure and improve campaign performance." },
  { title: "Analytics & Tracking", desc: "Understand marketing data and turn numbers into decisions." },
  { title: "Website & Landing Pages", desc: "Learn the principles behind conversion-focused digital experiences." },
  { title: "AI for Marketing", desc: "Use emerging AI tools to research, create, analyse and improve marketing work." },
  { title: "WhatsApp & Lead Generation", desc: "Learn how businesses can generate, nurture and convert leads." },
  { title: "E-commerce Marketing", desc: "Understand how digital channels support online commerce." },
  { title: "Freelancing & Client Acquisition", desc: "Learn the fundamentals of finding clients and delivering marketing services." },
];

const takeaways = [
  "Practical campaign experience",
  "Portfolio-worthy projects",
  "Industry-relevant digital marketing skills",
  "Exposure to professional tools",
  "A better understanding of client requirements",
  "Career and freelancing knowledge",
];

const ProgramsPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow">Digital Marketing Program</span>
          <h1 className="page-hero__title">
            A Digital Marketing Program Built Around Doing.
          </h1>
          <p className="page-hero__desc">
            The Digital Marketing Professional Program at TechnoGurukul is
            designed to take you from learning concepts to executing
            campaigns. You will learn how digital marketing works, why
            consumers behave the way they do, how brands acquire customers
            and how marketers measure what works. Most importantly, you will
            put that knowledge into practice.
          </p>

          <dl className="content-meta">
            {facts.map((fact) => (
              <div className="content-meta__item" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-section__head">
            <span className="content-section__eyebrow">What You Will Learn</span>
            <h2 className="content-section__title">
              Digital marketing is bigger than social media.
            </h2>
            <p className="content-section__intro">
              Our program covers the complete digital marketing ecosystem.
            </p>
          </div>

          <ul className="module-list">
            {topics.map((topic) => (
              <li key={topic.title}>
                <span className="module-list__title">{topic.title}</span>
                <span className="module-list__desc">{topic.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section content-section--alt">
        <div className="container">
          <div className="content-section__head">
            <span className="content-section__eyebrow">What You Take Away</span>
            <h2 className="content-section__title">
              By the end of the program, you should have more than classroom
              knowledge.
            </h2>
          </div>
          <ul className="content-list">
            {takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <h2 className="content-cta__title">
            Ready To Turn Knowledge Into Work?
          </h2>
          <p className="content-cta__desc">Apply for the next batch.</p>
          <div className="content-cta__actions">
            <Link href="/admissions" className="theme-btn theme-btn-amber theme-btn-big">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProgramsPageMain;
