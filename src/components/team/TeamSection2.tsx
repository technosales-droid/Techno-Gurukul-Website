"use client";
import dynamic from "next/dynamic";

const TeamSlider = dynamic(() => import("../slider/TeamSlider"), {
  ssr: false,
});

interface Props {
  variant?: boolean;
}
const TeamSection2 = ({ variant }: Props) => {
  return (
    <section
      className={`h3_teacher-area ${
        variant ? "h6_teacher-area pt-115 pb-120" : "pt-135 pb-140"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className={`${
                variant ? "section-area-6" : "section-area-3"
              } text-center mb-60`}
            >
              <span className="section-subtitle">Meet Our Mentors</span>
              <h2 className="section-title mb-0">Our Expert Teacher</h2>
            </div>
          </div>
        </div>
        <TeamSlider variant={variant ? true : false} />
      </div>
    </section>
  );
};

export default TeamSection2;
