"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

const audiences = [
  "student",
  "graduate",
  "working professional",
  "career switcher",
  "freelancer",
  "business owner",
];

const ContactPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Let&apos;s Talk About Your Next Step.</h1>
          <p className="page-hero__desc">
            Thinking about learning digital marketing? Want to understand
            the program? Wondering whether it&apos;s right for you? Talk to
            the TechnoGurukul team.
          </p>
          <p className="page-hero__desc" style={{ marginTop: 12 }}>
            Whether you&apos;re a{" "}
            {audiences.map((a, i) => (
              <span key={a}>
                {a}
                {i < audiences.length - 1 ? ", " : ""}
              </span>
            ))}
            {" "}or business owner, we&apos;ll help you understand the
            program and what you can expect.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container content-grid-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={revealTransition(0)}
          >
            <span className="content-block__eyebrow">Contact Details</span>
            <h2 className="content-block__title">TechnoGurukul</h2>
            <p className="content-block__desc">
              Address — to be confirmed
              <br />
              Phone — to be confirmed
              <br />
              Email:{" "}
              <a href="mailto:hello@technogurukul.com">
                hello@technogurukul.com
              </a>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={revealTransition(0.08)}
          >
            <span className="content-block__eyebrow">Enquire About The Program</span>
            <h2 className="content-block__title">Enquiry Form</h2>
            <div
              className="content-visual"
              role="img"
              aria-label="Placeholder for the program enquiry form"
              style={{ aspectRatio: "4 / 5" }}
            >
              <span className="content-visual__label">Form Placeholder</span>
              <span className="content-visual__dims">Enquiry Form</span>
              <span className="content-visual__hint">
                Name, contact details, and program interest — to be wired to
                a real submission handler
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="content-section content-section--alt">
        <div className="container">
          <span className="content-block__eyebrow">Get Directions</span>
          <h2 className="content-block__title" style={{ marginBottom: 16 }}>
            Find Us
          </h2>
          <div
            className="content-visual"
            role="img"
            aria-label="Placeholder for a future Google Map embed of the TechnoGurukul location"
            style={{ aspectRatio: "16 / 6" }}
          >
            <span className="content-visual__label">Map Placeholder</span>
            <span className="content-visual__dims">Google Map Integration</span>
            <span className="content-visual__hint">
              To be added once the exact address is confirmed
            </span>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPageMain;
