"use client";
import dynamic from "next/dynamic";

const TeamSlider3 = dynamic(() => import("../slider/TeamSlider3"), {
  ssr: false,
});

const TeamSection4 = () => {
  return (
    <section className="h8_teacher-area pt-110 pb-115">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="section-area-8 mb-20">
              <span className="section-subtitle">Our Professionals</span>
              <h2 className="section-title mb-0">Meet Our Teachers</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="h8_teacher-navigation mb-30">
              <div className="h8_teacher-prev">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7H1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="h8_teacher-next">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 1L13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <TeamSlider3 />
      </div>
    </section>
  );
};

export default TeamSection4;
