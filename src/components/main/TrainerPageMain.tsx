"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, fadeScale, viewportOnce, revealTransition } from "@/components/utils/motion";

/** Thin-stroke icons, one per expertise area — matches the line weight
 * established by the homepage's HeroGraphic/NodeCheckIcon. */
const TrendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="row-icon">
    <path d="M3 14 8 9l3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 6h3v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="row-icon">
    <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const BulbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="row-icon">
    <path d="M10 3a5 5 0 0 0-3 9c.6.45 1 1.1 1 1.8V15h4v-1.2c0-.7.4-1.35 1-1.8a5 5 0 0 0-3-9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M8.5 17.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const CircuitIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="row-icon">
    <circle cx="5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="15" cy="5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="15" cy="15" r="1.6" stroke="currentColor" strokeWidth="1.3" />
    <path d="M6.4 9.2 13.6 5.8M6.4 10.8 13.6 14.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const expertise = [
  { label: "Performance Marketing", icon: TrendIcon },
  { label: "Digital Strategy", icon: TargetIcon },
  { label: "Consumer Psychology", icon: BulbIcon },
  { label: "AI-Native Marketing", icon: CircuitIcon },
];

const TrainerPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Learn From Someone Who Does The Work.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="profile-split">
            <motion.div
              className="profile-split__identity"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeScale}
              transition={revealTransition(0)}
            >
              <span className="profile-split__monogram" aria-hidden="true">ES</span>
              <h2 className="profile-split__name">Ebrahim Shakir</h2>
              <span className="profile-split__role">Director &amp; Lead Trainer</span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={revealTransition(0.1)}
            >
              <p className="content-block__desc">
                Ebrahim Shakir brings practical experience in digital
                marketing and performance marketing into the classroom. His
                approach is built around understanding the why behind the
                work, not simply teaching students which buttons to press.
              </p>

              <span className="content-block__eyebrow" style={{ marginTop: 24, display: "block" }}>
                Areas of Expertise
              </span>
              <ul className="expertise-list">
                {expertise.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      className="expertise-list__item"
                      key={item.label}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      variants={fadeUp}
                      transition={revealTransition(0.15 + i * 0.06)}
                    >
                      <Icon />
                      <span className="expertise-list__label">{item.label}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="content-section content-section--dark">
        <div className="container">
          <motion.div
            className="pull-quote"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={revealTransition(0)}
          >
            <span className="pull-quote__eyebrow">Teaching Philosophy</span>
            <p className="pull-quote__statement">
              &ldquo;Don&apos;t teach students what to think. Teach them how
              to think.&rdquo;
            </p>
            <p className="pull-quote__desc">
              Digital marketing evolves too quickly for anyone to rely on a
              fixed playbook. The objective is to develop marketers who can
              understand a problem, identify an opportunity, choose the
              right tools and make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TrainerPageMain;
