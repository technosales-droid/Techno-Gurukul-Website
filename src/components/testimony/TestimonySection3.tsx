"use client";
import MarqueeSection from "../marquee/MarqueeSection";
import dynamic from "next/dynamic";

const TestimonySlider3 = dynamic(() => import("../slider/TestimonySlider3"), {
  ssr: false,
});

const TestimonySection3 = () => {
  return (
    <section className="h6_testimonial-area pt-120 pb-120 bg-default pt-215 pb-100 fix">
      <MarqueeSection
        marqueeTexts={[
          "Outstanding Clients Supports",
          "Outstanding Clients Supports",
        ]}
        containerClass="testimonial-text-wrap mb-80 w-100"
        textContainerClass="testimonial-text-ticker"
        headerClass="h6_testimonial-title"
      />

      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="h6_testimonial-wrap mr-60">
              <div className="h6_testimonial-navigation mb-50">
                <div className="h6_testimonial-prev">
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="h6_testimonial-next">
                  <svg
                    width="10"
                    height="16"
                    viewBox="0 0 10 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 8L2 0.5L0.950001 1.55L7.4 8L0.950001 14.45L2 15.5L9.5 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.5 8L2 0.5L0.950001 1.55L7.4 8L0.950001 14.45L2 15.5L9.5 8Z"
                      fill="currentColor"
                      fillOpacity="0.8"
                    />
                  </svg>
                </div>
              </div>
              <TestimonySlider3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection3;
