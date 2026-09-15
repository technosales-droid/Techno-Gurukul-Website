"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const EventSlider = dynamic(() => import("../slider/EventSlider"), {
  ssr: false,
});

interface Props {
  variant?: boolean;
}
const EventSection = ({ variant }: Props) => {
  return (
    <section className={`event-area p-relative ${variant ? "h7_event-area" : ""}`}>
      <Image
        fill={true}
        sizes="(max-width: 768px) 100vw, 33vw"
        src={
          variant ? "/assets/img/event/7/bg.jpg" : "/assets/img/event/1/bg.jpg"
        }
        alt="img"
        className="event-bg-img"
      />
      <div className="event-wrap pt-120 pb-40">
        <div className="container">
          <div className="row align-items-center mb-30">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="event-section-area mb-20">
                <div className="section-area">
                  <span className="section-subtitle">
                    Conference on Education
                  </span>
                  <h2 className="section-title mb-0">Upcoming Events</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="event-navigation mb-30">
                <div className="event-prev">
                  <i className="fa-thin fa-arrow-left"></i>
                </div>
                <div className="event-next">
                  <i className="fa-light fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <EventSlider />
        </div>
      </div>
    </section>
  );
};

export default EventSection;
