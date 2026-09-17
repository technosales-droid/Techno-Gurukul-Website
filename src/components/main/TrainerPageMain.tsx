"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, fadeScale, viewportOnce, revealTransition } from "@/components/utils/motion";

const expertise = [
  "Performance Marketing",
  "Digital Strategy",
  "Consumer Psychology",
  "AI-Native Marketing",
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
              <ul className="tag-list">
                {expertise.map((item, i) => (
                  <motion.li
                    key={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    transition={revealTransition(0.15 + i * 0.06)}
                  >
                    {item}
                  </motion.li>
                ))}
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
