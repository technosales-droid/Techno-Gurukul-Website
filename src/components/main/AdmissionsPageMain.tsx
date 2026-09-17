"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

/** Matches the arrow used on the homepage's Hero/Closing CTA buttons. */
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="theme-btn-arrow__icon">
    <path
      d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const steps = [
  { title: "Enquire", desc: "Tell us about yourself and what you want to learn." },
  { title: "Understand", desc: "Speak with our team and understand the program, curriculum and learning methodology." },
  { title: "Choose", desc: "Decide whether TechnoGurukul is the right fit for your goals." },
  { title: "Begin", desc: "Join the next batch and start building practical digital marketing skills." },
];

const AdmissionsPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Your Next Skill Starts Here.</h1>
          <p className="page-hero__desc">
            You&apos;ve watched enough videos. Read enough articles. Saved
            enough tutorials. Now it&apos;s time to learn by doing.
            Applications are open for the next Digital Marketing
            Professional Program at TechnoGurukul, Nashik.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-section__head">
            <h2 className="content-section__title">How It Works</h2>
          </div>
          <ol className="stage-rail stage-rail--horizontal">
            {steps.map((step, i) => (
              <motion.li
                className="stage-rail__step"
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={revealTransition(i * 0.1)}
              >
                <span className="stage-rail__step-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="stage-rail__step-title">{step.title}</span>
                <span className="stage-rail__step-desc">{step.desc}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <h2 className="content-cta__title">Ready To Start?</h2>
          <p className="content-cta__desc">
            Apply directly, or talk to admissions first — whichever you're
            ready for.
          </p>
          <div className="content-cta__actions">
            <Link href="/contact" className="theme-btn theme-btn-amber theme-btn-big theme-btn-arrow">
              Apply Now
              <ArrowIcon />
            </Link>
            <a
              href="mailto:hello@technogurukul.com"
              className="theme-btn theme-btn-outline-light theme-btn-big"
            >
              Talk To Admissions
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdmissionsPageMain;
