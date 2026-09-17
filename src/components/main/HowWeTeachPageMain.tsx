"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import CountUp from "@/components/utils/CountUp";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";
import { CheckIcon } from "@/components/utils/ContentIcons";

const stats = [
  {
    value: 60,
    suffix: "%",
    label: "Doing",
    desc: "Live Campaigns. Live Projects. Content. Analysis. Execution.",
  },
  {
    value: 25,
    suffix: "%",
    label: "Thinking",
    desc: "Strategy. Consumer psychology. Marketing principles. Problem-solving.",
  },
  {
    value: 15,
    suffix: "%",
    label: "Tools & Theory",
    desc: "Platforms, technology, frameworks and professional knowledge.",
  },
];

const steps = [
  {
    eyebrow: "Real Business Exposure",
    title: "Because Businesses Don't Give You Classroom Problems.",
    desc: "Students get exposure to real businesses and real marketing challenges from real clients. This helps them understand:",
    list: [
      "How businesses actually operate",
      "How clients think",
      "How marketing decisions are made",
      "How campaigns are planned",
      "How results are evaluated",
    ],
  },
  {
    eyebrow: "Learn Through Live Projects",
    title: "Build Something You Can Show.",
    desc: "A certificate tells someone you completed a course. A portfolio shows them what you can do. Our practical approach helps students create projects and campaign work that demonstrate their skills.",
  },
  {
    eyebrow: "Learn Together",
    title: "Marketing Is A Team Sport.",
    desc: "Students collaborate, divide responsibilities, present ideas, solve problems and work towards outcomes. The objective isn't simply to complete an assignment. It's to learn how professional marketing work gets done.",
  },
];

const HowWeTeachPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Learn It. Do It. Get Better At It.</h1>
          <p className="page-hero__desc">
            Our classroom isn&apos;t designed to turn students into
            note-taking machines. It&apos;s designed to turn learners into
            practitioners. At TechnoGurukul, concepts are followed by
            application. Students don&apos;t simply discuss marketing — they
            use the tools, build campaigns, analyse outcomes and solve
            problems.
          </p>
        </div>
      </section>

      <section className="content-section content-section--dark">
        <div className="container">
          <div className="content-section__head">
            <span className="content-section__eyebrow">Our Learning Model</span>
            <h2 className="content-section__title">
              60% Practical. 25% Strategy. 15% Tools &amp; Theory.
            </h2>
          </div>

          <ol className="stat-trio">
            {stats.map((stat, i) => (
              <motion.li
                className="stat-trio__item"
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={revealTransition(i * 0.1)}
              >
                <CountUp value={stat.value} suffix={stat.suffix} className="stat-trio__value" />
                <span className="stat-trio__label">{stat.label}</span>
                <span className="stat-trio__desc">{stat.desc}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-section__head">
            <span className="content-section__eyebrow">How A Concept Becomes A Skill</span>
            <h2 className="content-section__title">From exposure to execution.</h2>
          </div>

          <ol className="stage-rail stage-rail--horizontal">
            {steps.map((step, i) => (
              <motion.li
                className="stage-rail__step"
                key={step.eyebrow}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={revealTransition(i * 0.12)}
              >
                <span className="stage-rail__step-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="stage-rail__step-eyebrow">{step.eyebrow}</span>
                <h3 className="content-block__title">{step.title}</h3>
                <p className="content-block__desc">{step.desc}</p>
                {step.list && (
                  <ul className="content-list content-list--icon">
                    {step.list.map((item) => (
                      <li key={item}>
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
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
          <h2 className="content-cta__title">
            The Best Way To Learn Digital Marketing Is To Practice Digital
            Marketing.
          </h2>
          <p className="content-cta__desc">That&apos;s our classroom.</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default HowWeTeachPageMain;
