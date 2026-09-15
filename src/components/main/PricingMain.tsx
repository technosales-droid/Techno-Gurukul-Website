import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainLayout from "@/components/layout/MainLayout";
import PricingSection from "@/components/pricing/PricingSection";

const PricingMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Pricing" />
      <PricingSection variant />
    </MainLayout>
  );
};

export default PricingMain;
