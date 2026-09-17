"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";
import CountUp from "@/components/utils/CountUp";

const stats = [
  {
    value: 60,
    suffix: "%",
    label: "Doing",
    desc: "Live campaigns, live projects, content, analysis, execution.",
  },
  {
    value: 25,
    suffix: "%",
    label: "Thinking",
    desc: "Strategy, consumer psychology, marketing principles, problem-solving.",
  },
  {
    value: 15,
    suffix: "%",
    label: "Tools & Theory",
    desc: "Platforms, technology, frameworks and professional knowledge.",
  },
];

/**
 * Deliberately not another text/image split or info panel — full-width,
 * centered editorial statement + a horizontal 60/25/15 stat row (real
 * figures from the TechnoGurukul learning-model brief, not a generic
 * 4-step icon grid) on a dark navy ground for page-rhythm contrast.
 */
const ApproachSection = () => {
  return (
    <section className="approach">
      <div className="container">
        <div className="approach__head">
          <span className="approach__eyebrow">Our Learning Model</span>
          <h2 className="approach__title">
            Digital Marketing Is A Skill, Not A Subject.
          </h2>
          <p className="approach__desc">
            We believe digital marketing is a skill, not a subject. Our
            learning model puts practical execution first, supported by
            strategy, concepts and the tools marketers use every day. You
            don&apos;t simply learn what a platform does — you learn what to
            do with it.
          </p>
        </div>

        <ol className="approach__stats">
          {stats.map((stat, i) => (
            <motion.li
              className="approach__stat"
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={revealTransition(i * 0.1)}
            >
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="approach__stat-value"
              />
              <span className="approach__stat-label">{stat.label}</span>
              <span className="approach__stat-desc">{stat.desc}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ApproachSection;
