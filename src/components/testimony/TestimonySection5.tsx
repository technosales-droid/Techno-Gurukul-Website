"use client";
import dynamic from "next/dynamic";

const TestimonySlider4 = dynamic(() => import("../slider/TestimonySlider4"), {
  ssr: false,
});

const TestimonySection5 = () => {
  return (
    <section className="h9_testimonial-area">
      <div className="container">
        <div className="h9_testimonial-wrap pt-125 pb-135">
          <div className="row justify-content-end">
            <div className="col-xl-9 col-lg-9">
              <h3 className="h9_testimonial-title">Student Feedback</h3>

              <TestimonySlider4 />
            </div>
          </div>
        </div>
      </div>
      <div className="h9_testimonial-pagination d-none d-xl-flex"></div>
      <div className="h9_testimonial-navigation">
        <div className="h9_testimonial-prev">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15L8 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 8L8 1L1 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="h9_testimonial-next">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1L8 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 8L8 15L1 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection5;
