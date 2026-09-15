import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ContactSection2 from "@/components/contact/ContactSection2";
import MainLayout from "@/components/layout/MainLayout";

const ContactMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Contact Us" />
      <ContactSection2 />
    </MainLayout>
  );
};

export default ContactMain;
