"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const TestimonySlider2 = dynamic(() => import("../slider/TestimonySlider2"), {
  ssr: false,
});

const TestimonySection2 = () => {
  return (
    <section className="h3_testimonial-area pt-135 pb-140">
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-md-8">
            <div className="section-area-3 mb-30">
              <span className="section-subtitle">Testimonials</span>
              <h2 className="section-title mb-0">What’s People Say</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h3_testimonial-navigation mb-40">
              <div className="h3_testimonial-prev">
                <i className="fa-regular fa-arrow-left"></i>
              </div>
              <div className="h3_testimonial-next">
                <i className="fa-regular fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <TestimonySlider2 />
      </div>
      <Image
        width={61}
        height={44}
        src="/assets/img/testimonial/3/shape-1.png"
        alt="img"
        className="h3_testimonial-shape-1"
      />
      <Image
        width={63}
        height={45}
        src="/assets/img/testimonial/3/shape-2.png"
        alt="img"
        className="h3_testimonial-shape-2"
      />
      <Image
        width={34}
        height={34}
        src="/assets/img/testimonial/3/shape-3.png"
        alt="img"
        className="h3_testimonial-shape-3"
      />
      <Image
        width={77}
        height={44}
        src="/assets/img/testimonial/3/shape-4.png"
        alt="img"
        className="h3_testimonial-shape-4"
      />
    </section>
  );
};

export default TestimonySection2;
