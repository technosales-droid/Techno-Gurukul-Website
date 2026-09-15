import AuthSection from "@/components/auth/AuthSection";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainLayout from "@/components/layout/MainLayout";
const SignInMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Sign In" />
      <AuthSection signIn />
    </MainLayout>
  );
};

export default SignInMain;
