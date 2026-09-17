"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

const points = [
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
 * "Built For The Real World" — a horizontal strip of four items, each
 * anchored by a circular numbered badge that breaks free of the tile
 * rather than sitting inline as plain text. No card chrome, no photo
 * (the badge system itself is the section's visual signature — see
 * report for why an image wasn't used). A gentle vertical offset on
 * alternating items on desktop adds controlled asymmetry without a
 * connecting line, so it doesn't read as another timeline.
 *
 * Note: `.why__grid`/`.why__block*` (the previous 2x2 layout this
 * replaced) are still used by the Admissions page's "How It Works"
 * steps — untouched here on purpose, this component uses its own
 * class names instead.
 */
const WhyTechnoGurukulSection = () => {
  return (
    <section className="why">
      <div className="container">
        <div className="why__head">
          <span className="why__eyebrow">Why TechnoGurukul</span>
          <h2 className="why__title">Built For The Real World</h2>
        </div>

        <ol className="why-strip">
          {points.map((point, i) => (
            <motion.li
              className="why-strip__item"
              key={point.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={revealTransition(i * 0.08)}
            >
              <span className="why-strip__badge" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="why-strip__title">{point.title}</span>
              <span className="why-strip__desc">{point.desc}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WhyTechnoGurukulSection;
