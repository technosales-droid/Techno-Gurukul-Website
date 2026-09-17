"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, fadeScale, viewportOnce, revealTransition } from "@/components/utils/motion";

/**
 * Abstract node/network graphic — an original echo of the logo's
 * circuit-canopy motif, not a crop of the logo file itself. Purely
 * decorative, so it's hidden from assistive tech. A few of its nodes
 * carry a slow, continuous CSS opacity pulse (`.hero__graphic-pulse`,
 * see _hero.scss) — ambient motion on existing art, no new decoration.
 */
const HeroGraphic = () => (
  <svg
    viewBox="0 0 400 420"
    fill="none"
    aria-hidden="true"
    className="hero__graphic-svg"
  >
    <defs>
      <radialGradient id="heroGlow" cx="50%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#08B9D9" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#08B9D9" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0B2247" />
        <stop offset="100%" stopColor="#071A35" />
      </linearGradient>
    </defs>

    <rect width="400" height="420" rx="24" fill="url(#heroPanel)" />
    <circle cx="200" cy="150" r="170" fill="url(#heroGlow)" />

    <g stroke="#2E6FD9" strokeWidth="1.5" strokeLinecap="round" opacity="0.55">
      <path d="M200 360 L200 260 L206 168 L214 96" />
      <path d="M200 260 L152 224" />
      <path d="M206 168 L128 206 L92 146" />
      <path d="M206 168 L108 176" />
      <path d="M200 360 L162 282 L124 204 L96 142" />
      <path d="M162 282 L104 252" />
      <path d="M200 360 L240 284 L282 206 L314 134" />
      <path d="M240 284 L292 262" />
      <path d="M282 206 L334 214" />
      <path d="M214 96 L246 76" />
    </g>

    <g fill="#08B9D9">
      <circle cx="214" cy="96" r="6" className="hero__graphic-pulse" style={{ animationDelay: "0s" }} />
      <circle cx="96" cy="142" r="5" />
      <circle cx="314" cy="134" r="6" className="hero__graphic-pulse" style={{ animationDelay: "0.6s" }} />
      <circle cx="92" cy="146" r="4" />
      <circle cx="334" cy="214" r="5" />
    </g>
    <g fill="#5EA8EC">
      <circle cx="200" cy="260" r="5" />
      <circle cx="206" cy="168" r="6" className="hero__graphic-pulse" style={{ animationDelay: "1.2s" }} />
      <circle cx="162" cy="282" r="5" />
      <circle cx="240" cy="284" r="5" />
      <circle cx="282" cy="206" r="5" />
      <circle cx="128" cy="206" r="4" />
      <circle cx="152" cy="224" r="4" />
      <circle cx="104" cy="252" r="4" />
      <circle cx="292" cy="262" r="4" />
      <circle cx="108" cy="176" r="4" />
      <circle cx="246" cy="76" r="4" />
    </g>
    <rect x="180" y="338" width="40" height="46" rx="6" fill="#0F2C56" />
  </svg>
);

/** Small nudge-on-hover arrow for `.theme-btn-arrow` (see _button.scss). */
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

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <motion.div
            className="hero__content"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={revealTransition(0)}
          >
            <span className="hero__eyebrow">
              Practical Digital Marketing Academy <span aria-hidden="true">·</span> Nashik
            </span>

            <h1 className="hero__title">
              Don&apos;t Just Learn Digital Marketing.{" "}
              <span className="hero__title-accent">Do It.</span>
            </h1>

            <p className="hero__desc">
              TechnoGurukul is a practical digital marketing academy in Nashik
              where students learn by working on real campaigns, real
              businesses and real marketing challenges.
            </p>

            <p className="hero__meta">
              Learn. Execute. Build. Become Industry-Ready.
            </p>

            <div className="hero__actions">
              <Link href="/programs" className="theme-btn theme-btn-amber theme-btn-big theme-btn-arrow">
                Explore the Program
                <ArrowIcon />
              </Link>
              <Link href="/contact" className="theme-btn theme-btn-outline theme-btn-big">
                Enquire Now
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeScale}
            transition={revealTransition(0.08)}
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
