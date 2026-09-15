"use client";
import dynamic from "next/dynamic";

const TeamSlider2 = dynamic(() => import("../slider/TeamSlider2"), {
  ssr: false,
});

interface Props {
  style?: string;
}
const TeamSection3 = ({ style }: Props) => {
  return (
    <section className={`h5_teacher-area ${style ? style : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-area-5 text-center mb-60">
              <span className="section-subtitle">Meet Our Mentors</span>
              <h2 className="section-title mb-0">Our Expert Teacher</h2>
            </div>
          </div>
        </div>
        <TeamSlider2 />
      </div>
    </section>
  );
};

export default TeamSection3;
