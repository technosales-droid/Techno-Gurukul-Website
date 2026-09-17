"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

/**
 * Four sequential narrative chapters on the shared stage-rail (vertical
 * only — a reading flow, not parallel steps). The first three are the
 * original "Our Belief / Our Vision / Where We're Going" blocks; the
 * fourth folds in the previous closing-CTA copy ("Built In Nashik...")
 * as a real chapter instead of a disconnected box. All copy unchanged.
 */
const chapters = [
  {
    eyebrow: "Our Belief",
    title: "Skills Are Built Through Practice.",
    desc: "You can watch someone create an advertisement. You can read about SEO. You can learn what a conversion funnel is. But you understand them differently when you actually have to create one. That's why practical execution sits at the centre of our learning philosophy.",
  },
  {
    eyebrow: "Our Vision",
    title: "Building Skills For The Digital Economy.",
    desc: "We began with digital marketing because businesses across industries increasingly need people who understand digital customer acquisition, content, technology and performance. Our larger vision is to build a skill-focused institution around emerging technology disciplines.",
  },
  {
    eyebrow: "Where We're Going",
    title: "Digital Marketing is our starting point.",
    desc: "The larger TechnoGurukul ecosystem can extend into emerging areas such as:",
    disciplines: ["Data Science & Analytics", "Cybersecurity", "Blockchain & Web3"],
  },
  {
    eyebrow: "Built In Nashik",
    title: "Built In Nashik. Designed For What's Next.",
    desc: "We want students from Nashik and beyond to have access to practical, relevant and continuously evolving technology education.",
  },
];

const AboutPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">
            We Don&apos;t Teach For Exams. We Teach For The Real World.
          </h1>
          <p className="page-hero__desc">
            TechnoGurukul is a skill development academy based in Nashik,
            Maharashtra. We were created around a simple observation: knowing
            something and being able to do something are two very different
            things. Digital marketing changes constantly. Platforms change.
            Algorithms change. Consumer behaviour changes. Technology
            changes. So education cannot stop at textbooks and
            presentations. At TechnoGurukul, we focus on practical
            learning — combining concepts with execution, technology with
            strategy and classroom learning with real-world exposure.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <ol className="stage-rail">
            {chapters.map((chapter, i) => (
              <motion.li
                className="stage-rail__step"
                key={chapter.eyebrow}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={revealTransition(i * 0.12)}
              >
                <span className="stage-rail__step-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="stage-rail__step-eyebrow">{chapter.eyebrow}</span>
                <h2 className="content-block__title">{chapter.title}</h2>
                <p className="content-block__desc">{chapter.desc}</p>
                {chapter.disciplines && (
                  <ul className="tag-list">
                    {chapter.disciplines.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <h2 className="content-cta__title">See What You&apos;d Actually Learn.</h2>
          <div className="content-cta__actions">
            <Link href="/programs" className="theme-btn theme-btn-amber theme-btn-big">
              View The Program
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPageMain;
