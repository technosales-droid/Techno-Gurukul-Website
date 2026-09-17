import type { Variants } from "framer-motion";

/** Shared entrance variants — fade + slide up, for text/content blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

/** Shared entrance variants — fade + scale up, for image/visual blocks. */
export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

/** Standard viewport trigger: animate once, a little before fully in view. */
export const viewportOnce = { once: true, amount: 0.3 } as const;

/** Consistent easing/duration for every section entrance on the site. */
export const revealTransition = (delay = 0) => ({
  duration: 0.45,
  delay,
  ease: [0.22, 1, 0.36, 1] as const,
});
