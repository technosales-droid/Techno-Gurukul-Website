"use client";

import { motion } from "framer-motion";
import MainLayout from "@/components/layout/MainLayout";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

/** Thin-stroke icons for the three contact channels — same line weight
 * as the site's established icon language. */
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="row-icon">
    <path d="M9 16.5S3.5 11.4 3.5 7.4a5.5 5.5 0 0 1 11 0c0 4-5.5 9.1-5.5 9.1Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <circle cx="9" cy="7.3" r="2" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="row-icon">
    <path
      d="M4.3 3.5h2.4l1 2.9-1.5 1.4a8.4 8.4 0 0 0 3.7 3.7l1.4-1.5 2.9 1v2.4c0 .7-.6 1.2-1.3 1.1A11.7 11.7 0 0 1 3.2 4.8c-.1-.7.4-1.3 1.1-1.3Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="row-icon">
    <rect x="2.5" y="4" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M3 5l6 5 6-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
            <ul className="contact-list">
              <li className="contact-list__item">
                <PinIcon />
                <span>Address — to be confirmed</span>
              </li>
              <li className="contact-list__item">
                <PhoneIcon />
                <span>Phone — to be confirmed</span>
              </li>
              <li className="contact-list__item">
                <MailIcon />
                <a href="mailto:hello@technogurukul.com">
                  hello@technogurukul.com
                </a>
              </li>
            </ul>
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
