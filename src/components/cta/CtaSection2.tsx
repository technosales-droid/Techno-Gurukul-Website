import NewsletterForm2 from "../form/NewsletterForm2";
import Image from "next/image";

const CtaSection2 = () => {
  return (
    <div className="h2_cta-area">
      <div className="container">
        <div className="h2_cta-wrap bg-default pt-70 pb-80">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="h2_cta-content">
                <div className="section-area-2 small-section-area-2 text-center">
                  <h2 className="section-title mb-30">
                    Are You Ready To Start <br />
                    Your{" "}
                    <span>
                      Course?{" "}
                      <Image
                        width={148}
                        height={8}
                        src="/assets/img/banner/2/line.png"
                        alt="img"
                      />
                    </span>
                  </h2>
                </div>
                <NewsletterForm2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection2;
