"use client";
import ErrorSection from "@/components/error/ErrorSection";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import EventDetailSection from "@/components/event/EventDetailSection";
import MainLayout from "@/components/layout/MainLayout";
import { events } from "@/data";
import { useMemo } from "react";
interface Props {
  slug: string;
}
const EventDetailMain = ({ slug }: Props) => {
  const currentIndex = useMemo(
    () => events.findIndex((item) => item.slug === slug),
    [slug]
  );

  const eventInfo = useMemo(
    () => (currentIndex !== -1 ? events[currentIndex] : null),
    [currentIndex]
  );
  return (
    <MainLayout>
      <BreadcrumbSection title={eventInfo ? "Events Details" : "404"} />
      {eventInfo ? (
        <EventDetailSection eventInfo={eventInfo} />
      ) : (
        <ErrorSection />
      )}
    </MainLayout>
  );
};

export default EventDetailMain;
