import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CtaSection from "@/components/cta/CtaSection";
import ErrorSection from "@/components/error/ErrorSection";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection from "@/components/header/HeaderSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Error Page | Eduan - School, University & Online Education Next.js Template",
  description: "Eduan is a modern Next.js template for schools, universities, online courses, and eLearning platforms.",
};
export default function NotFound() {
  return (
    <>
      <HeaderSection />
      <main>
        <BreadcrumbSection title="404" />
        <ErrorSection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  );
}
