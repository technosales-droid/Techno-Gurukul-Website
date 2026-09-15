"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const TestimonySlider5 = dynamic(() => import("../slider/TestimonySlider5"), {
  ssr: false,
});

const TestimonySection6 = () => {
  return (
    <section className="h10_testimonial-area pt-90 pb-120 fix">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="h10_testimonial-title mb-35">
              <span>
                <Image
                  width={88}
                  height={85}
                  src="/assets/img/testimonial/10/shape-1.png"
                  alt="img"
                />
                O
              </span>
              <strong className="waviy">
                <span>u</span>
                <span>r</span>
                <span> </span>
                <span>S</span>
                <span>t</span>
                <span>u</span>
                <span>d</span>
                <span>e</span>
                <span>n</span>
                <span>t</span>
                <span> </span>
                <span>S</span>
                <span>a</span>
                <span>y</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
              </strong>
            </h1>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-7 col-md-7">
            <div className="h10_testimonial-wrap mr-45 position-relative">
              <TestimonySlider5 />
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5">
            <div className="h10_testimonial-img ml-10 w_img">
              <Image
                width={510}
                height={466}
                src="/assets/img/testimonial/10/1.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection6;
