"use client";

import SiteHeader from "../header/SiteHeader";
import SiteFooter from "../site-footer/SiteFooter";
import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    // reducedMotion="user" makes every motion.* element site-wide honor
    // prefers-reduced-motion automatically, with no per-component checks.
    <MotionConfig reducedMotion="user">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </MotionConfig>
  );
};

export default MainLayout;
