"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

/**
 * Same 11 FAQs, same wording — grouped under 4 real subject categories
 * instead of one flat list, purely for scannability. The placement
 * question and its answer are unchanged and deliberately left
 * unresolved; this task does not answer it.
 */
const groups = [
  {
    title: "About TechnoGurukul",
    faqs: [
      {
        q: "What is TechnoGurukul?",
        a: "TechnoGurukul is a skill development academy based in Nashik offering practical training in digital marketing and emerging technology disciplines.",
      },
      {
        q: "Where is TechnoGurukul located?",
        a: "TechnoGurukul is based in Nashik, Maharashtra, India.",
      },
    ],
  },
  {
    title: "Program & Curriculum",
    faqs: [
      {
        q: "What does the Digital Marketing Program cover?",
        a: "The program covers digital marketing strategy, consumer psychology, branding, content, social media, SEO, AEO, GEO, Google Ads, Meta Ads, performance marketing, analytics, AI tools, lead generation, e-commerce and freelancing.",
      },
      {
        q: "Is the program practical?",
        a: "Yes. Practical execution is a central part of the TechnoGurukul learning model, with a strong emphasis on projects, campaigns and real-world exposure.",
      },
      {
        q: "How long is the program?",
        a: "The Digital Marketing Professional Program runs for approximately 4.5–5 months.",
      },
      {
        q: "Does the program teach AI?",
        a: "Yes. AI tools and AI-native marketing are included as part of the curriculum.",
      },
    ],
  },
  {
    title: "Format & Eligibility",
    faqs: [
      {
        q: "Is the course online or offline?",
        a: "The program is designed as an in-person/offline learning experience in Nashik.",
      },
      {
        q: "Who can join the program?",
        a: "The program can be relevant for students, graduates, working professionals, career switchers, aspiring freelancers and business owners. Specific eligibility should be confirmed with the admissions team.",
      },
      {
        q: "Will I work on real client projects?",
        a: "The program is designed around practical exposure and real business requirements. The exact client/project structure should be confirmed with the admissions team.",
      },
    ],
  },
  {
    title: "Careers & Outcomes",
    faqs: [
      {
        q: "Can I become a freelancer after the course?",
        a: "The program includes freelancing and client-acquisition components designed to help students understand how independent digital marketing work operates.",
      },
      {
        q: "Does TechnoGurukul provide placement?",
        a: "This answer is pending internal confirmation from TechnoGurukul and will be updated here once available.",
      },
    ],
  },
];

const totalFaqs = groups.reduce((sum, group) => sum + group.faqs.length, 0);

const FaqPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Frequently Asked Questions</h1>
          <p className="page-hero__desc">
            {totalFaqs} questions, grouped by topic.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          {groups.map((group, gi) => (
            <div className="faq-group" key={group.title}>
              <motion.h2
                className="faq-group__title"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={revealTransition(0)}
              >
                {group.title}
              </motion.h2>
              <div className="faq-list">
                {group.faqs.map((item, i) => (
                  <motion.details
                    className="faq-item"
                    key={item.q}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    transition={revealTransition((gi * 0.05) + i * 0.05)}
                  >
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </motion.details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default FaqPageMain;
