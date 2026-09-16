import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/components/error/ErrorSection";
import MainLayout from "@/components/layout/MainLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | TechnoGurukul",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <MainLayout>
      <BreadcrumbSection title="404" />
      <ErrorSection />
    </MainLayout>
  );
}
