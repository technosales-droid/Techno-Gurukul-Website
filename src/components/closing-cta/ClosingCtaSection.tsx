"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce, revealTransition } from "@/components/utils/motion";

/** Small nudge-on-hover arrow, matching the one used on the hero's primary CTA. */
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="theme-btn-arrow__icon">
    <path
      d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Homepage Section 6 — the closing CTA. Reuses the shared
 * `.content-cta` styles (see _content-page.scss) rather than
 * introducing a one-off style just for this instance.
 */
const ClosingCtaSection = () => {
  return (
    <section className="content-cta">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        transition={revealTransition(0)}
      >
        <h2 className="content-cta__title">
          Your Career Won&apos;t Be Built By Watching Tutorials.
        </h2>
        <p className="content-cta__desc">
          It will be built by doing the work. Start learning digital
          marketing in Nashik.
        </p>
        <div className="content-cta__actions">
          <Link href="/programs" className="theme-btn theme-btn-amber theme-btn-big theme-btn-arrow">
            Explore the Program
            <ArrowIcon />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ClosingCtaSection;
