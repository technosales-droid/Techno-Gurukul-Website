"use client";
import dynamic from "next/dynamic";

const TeamSlider4 = dynamic(() => import("../slider/TeamSlider4"), {
  ssr: false,
});

const TeamSection5 = () => {
  return (
    <section className="h9_teacher-area pt-105 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-area-9 text-center mb-40">
              <span className="section-subtitle">Meet Our Mentors</span>
              <h2 className="section-title mb-0">Our Expert Teacher</h2>
            </div>
          </div>
        </div>
        <TeamSlider4 />
      </div>
    </section>
  );
};

export default TeamSection5;
