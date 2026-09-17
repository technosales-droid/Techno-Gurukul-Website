"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeScale, viewportOnce, revealTransition } from "@/components/utils/motion";

const points = [
  "Real campaigns, not just case studies",
  "Real problems, not just theory",
  "Real practice, not just presentations",
];

/**
 * Small node-check marker — echoes the hero graphic's thin-stroke
 * circuit-node line language (stroke="currentColor", same weight)
 * instead of the unrelated, heavier illustrative icons already sitting
 * unused in src/components/utils/icons/. One consistent icon repeated
 * per list item, not three different icon families.
 */
const NodeCheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="practical__point-icon">
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6 10.2 8.7 13 14 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Image placeholder for the future real photo. Swap the contents of
 * `.practical__visual` for a Next/Image with the same aspect-ratio
 * wrapper — layout, spacing and radius stay untouched.
 */
const ImagePlaceholder = () => (
  <motion.div
    className="practical__visual"
    role="img"
    aria-label="Placeholder for a future photo: students working on a practical digital marketing project"
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={fadeScale}
    transition={revealTransition(0.08)}
  >
    <span className="practical__visual-label">Image Placeholder</span>
    <span className="practical__visual-dims">1200 × 800 px</span>
    <span className="practical__visual-ratio">3:2</span>
    <span className="practical__visual-hint">
      Suggested image: students working on a practical marketing project
    </span>
  </motion.div>
);

const PracticalLearningSection = () => {
  return (
    <section className="practical">
      <div className="container">
        <div className="practical__grid">
          <motion.div
            className="practical__content"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={revealTransition(0)}
          >
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
              {points.map((point) => (
                <li key={point}>
                  <NodeCheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <ImagePlaceholder />
        </div>
      </div>
    </section>
  );
};

export default PracticalLearningSection;
