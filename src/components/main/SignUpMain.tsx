import AuthSection from "@/components/auth/AuthSection";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainLayout from "@/components/layout/MainLayout";

const SignUpMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Sign Up" />
      <AuthSection />
    </MainLayout>
  );
};

export default SignUpMain;
