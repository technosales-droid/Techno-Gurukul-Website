"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

/**
 * Three directions from one skill, presented as a shared branch split
 * (a single top rule with three columns dividing off it) rather than
 * three disconnected stacked blocks. Content/roles are unchanged.
 */
const paths = [
  {
    title: "Digital Marketing Professional",
    desc: "Work with brands and businesses across digital marketing functions. Possible roles include:",
    items: [
      "Digital Marketing Executive",
      "Digital Marketing Specialist",
      "Social Media Executive",
      "SEO Executive",
      "Performance Marketing Executive",
      "Content Marketer",
    ],
  },
  {
    title: "Freelancer",
    desc: "Turn your skills into independent services. Learn how to:",
    items: [
      "Find potential clients",
      "Understand requirements",
      "Pitch services",
      "Execute campaigns",
      "Report results",
      "Build long-term relationships",
    ],
  },
  {
    title: "Entrepreneur",
    desc: "If you own a business, digital marketing becomes a growth engine. Use it to:",
    items: [
      "Build awareness",
      "Generate leads",
      "Acquire customers",
      "Build communities",
      "Measure marketing performance",
    ],
  },
];

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
          <div className="content-section__head">
            <span className="content-section__eyebrow">Three Directions, One Skill</span>
            <h2 className="content-section__title">
              Build the skill once. Choose how you use it.
            </h2>
          </div>

          <div className="skill-node">
            <span className="skill-node__badge">One Core Skill: Digital Marketing</span>
            <span className="skill-node__line" aria-hidden="true" />
          </div>

          <div className="branch-split">
            {paths.map((path, i) => (
              <motion.div
                className="branch-split__item"
                key={path.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={revealTransition(i * 0.1)}
              >
                <span className="branch-split__number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="branch-split__title">{path.title}</h3>
                <p className="branch-split__desc">{path.desc}</p>
                <ul className="content-list">
                  {path.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
