import SiteHeader from "../header/SiteHeader";
import CtaSection from "../cta/CtaSection";
import FooterSection from "../footer/FooterSection";
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
  /** Old template promo band + footer are still being rebuilt section-by-section. */
  showCta?: boolean;
  showFooter?: boolean;
}
const MainLayout = ({ children, showCta = true, showFooter = true }: Props) => {
  return (
    <>
      <SiteHeader />
      <main>
        {children}
        {showCta && <CtaSection />}
      </main>
      {showFooter && <FooterSection />}
    </>
  );
};

export default MainLayout;
