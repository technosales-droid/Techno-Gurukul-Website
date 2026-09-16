import Link from "next/link";

const facts = [
  { label: "Duration", value: "4.5–5 Months" },
  { label: "Mode", value: "Offline / In-Person" },
  { label: "Location", value: "Nashik, Maharashtra" },
  { label: "Batch Size", value: "Limited" },
];

// A representative sample of the full curriculum — not the complete
// 16-module list, which belongs on the Programs page itself.
const learningAreas = [
  "Digital Marketing Strategy",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Content & Copywriting",
  "Analytics & Tracking",
  "AI for Marketing",
  "Social Media Marketing",
];

/**
 * Single-program presentation, deliberately not a 3-card grid —
 * TechnoGurukul has one program right now, and a strong presentation
 * of it beats manufacturing artificial variety. The "snapshot" panel
 * uses only facts already approved in the TechnoGurukul content brief
 * (duration, mode, location, batch size, curriculum topics).
 */
const ProgramsSection = () => {
  return (
    <section className="programs">
      <div className="container">
        <div className="programs__grid">
          <div className="programs__content">
            <span className="programs__eyebrow">
              Digital Marketing Professional Program
            </span>
            <h2 className="programs__title">A Program Built Around Doing</h2>
            <p className="programs__desc">
              Designed to take you from learning concepts to executing real
              campaigns. You&apos;ll learn how digital marketing works, how
              brands acquire customers and how marketers measure what works
              — then put that knowledge into practice.
            </p>
            <Link
              href="/programs"
              className="theme-btn theme-btn-outline theme-btn-big"
            >
              Explore the Program
            </Link>
          </div>

          <div className="programs__panel">
            <span className="programs__panel-label">Program Snapshot</span>
            <dl className="programs__facts">
              {facts.map((fact) => (
                <div className="programs__fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <span className="programs__panel-label programs__panel-label--tags">
              Core Learning Areas
            </span>
            <ul className="programs__tags">
              {learningAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
