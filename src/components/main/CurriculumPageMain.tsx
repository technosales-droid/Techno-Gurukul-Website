"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

/**
 * The 18 modules, unchanged and in their original order, organized into 4
 * sequential phases so the page reads as a progression (where you start →
 * what you build) instead of one flat grid of 18 identical tiles. Phase
 * labels are new; module numbers/titles are exactly as given.
 */
const phases = [
  {
    title: "Foundations",
    modules: [
      "Digital Marketing Fundamentals",
      "Marketing Strategy & Consumer Psychology",
      "Branding & Positioning",
    ],
  },
  {
    title: "Content & Channels",
    modules: [
      "Content Marketing & Copywriting",
      "Social Media Marketing",
      "SEO",
      "AEO & GEO",
      "Website & Landing Page Fundamentals",
    ],
  },
  {
    title: "Paid, Data & Acquisition",
    modules: [
      "Google Ads",
      "Meta Advertising",
      "Performance Marketing",
      "Analytics & Tracking",
      "Lead Generation & WhatsApp Marketing",
    ],
  },
  {
    title: "Advanced, AI & Career",
    modules: [
      "E-commerce Marketing",
      "AI Tools For Marketers",
      "Freelancing & Client Acquisition",
      "Campaign Projects",
      "Career Preparation",
    ],
  },
];

const CurriculumPageMain = () => {
  // Running counter for each module's real 01–18 position, independent of
  // which phase it's grouped under. Local to this render pass only.
  let moduleIndex = 0;

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
          <div className="content-section__head">
            <span className="content-section__eyebrow">Full Curriculum</span>
            <p className="content-section__intro">
              The 18 modules below are grouped into four phases purely for
              clarity — an organisational presentation of the curriculum,
              not a separate official structure.
            </p>
          </div>

          {phases.map((phase, pi) => (
            <div className="phase-group" key={phase.title}>
              <motion.div
                className="phase-group__head"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={revealTransition(0)}
              >
                <span className="phase-group__number">Phase {String(pi + 1).padStart(2, "0")}</span>
                <h2 className="phase-group__title">{phase.title}</h2>
              </motion.div>

              <ol className="stage-rail">
                {phase.modules.map((title) => {
                  moduleIndex += 1;
                  const number = moduleIndex;
                  return (
                    <motion.li
                      className="stage-rail__step"
                      key={title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      variants={fadeUp}
                      transition={revealTransition((number % 6) * 0.05)}
                    >
                      <span className="stage-rail__step-number">
                        {String(number).padStart(2, "0")}
                      </span>
                      <span className="stage-rail__step-title">{title}</span>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          ))}
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
