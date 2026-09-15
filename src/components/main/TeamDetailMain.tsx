"use client";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import FeaturedCourseSection from "@/components/course/FeaturedCourseSection";
import ErrorSection from "@/components/error/ErrorSection";
import MainLayout from "@/components/layout/MainLayout";
import TeamDetailSection from "@/components/team/TeamDetailSection";
import { teamMembers } from "@/data";
import { useMemo } from "react";

interface Props {
  slug: string;
}

const TeamDetailMain = ({ slug }: Props) => {
  const currentIndex = useMemo(
    () => teamMembers.findIndex((item) => item.slug === slug),
    [slug]
  );

  const teamInfo = useMemo(
    () => (currentIndex !== -1 ? teamMembers[currentIndex] : null),
    [currentIndex]
  );
  return (
    <MainLayout>
      <BreadcrumbSection title={teamInfo ? "Our Professor" : "404"} />
      {teamInfo ? (
        <>
          <TeamDetailSection teamInfo={teamInfo} />
          <FeaturedCourseSection />
        </>
      ) : (
        <ErrorSection />
      )}
    </MainLayout>
  );
};

export default TeamDetailMain;
