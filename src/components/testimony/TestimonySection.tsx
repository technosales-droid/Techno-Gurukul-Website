"use client";
import dynamic from "next/dynamic";

const TestimonySlider = dynamic(() => import("../slider/TestimonySlider"), {
  ssr: false,
});

interface Props {
  variant?: boolean;
}

const TestimonySection = ({ variant }: Props) => {
  return (
    <section
      className={`${
        variant ? "h4_testimonial-area pt-135" : "testimonial-area pt-140"
      } pb-140`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className={`col-xl-6 ${variant ? "" : "col-lg-8 col-md-10"}`}>
            <div
              className={`${
                variant
                  ? "section-area-4 mb-60 "
                  : "section-area mb-55 section-area-top"
              } text-center`}
            >
              {!variant && (
                <span className="section-subtitle">Student Reviews</span>
              )}
              <h2 className={`section-title ${variant ? "mb-10" : "mb-20"}`}>
                What Our Students Saying
              </h2>
              <p className="section-text">
                Through a combination of lectures, readings, discussions,
                students will gain a solid foundation in educational psychology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-wrap">
        <TestimonySlider />
      </div>
      <div className="container">
        <div className="testimonial-scrollbar-wrap">
          <div className="swiper-scrollbar testimonial-scrollbar"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
