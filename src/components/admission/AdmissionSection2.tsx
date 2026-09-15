
import AdmissionForm from "../form/AdmissionForm";
import MarqueeSection from "../marquee/MarqueeSection";
import Image from "next/image";

const AdmissionSection2 = () => {
  return (
    <section className="h6_admission-area pt-115 pb-120 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="section-area-6 mb-35">
              <h2 className="section-title mb-15">
                Explore the possibilities of a Eduan education
              </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="section-area-6 mb-55">
              <p className="section-text">
                For more than 250 years, Columbia has been a leader in higher
                education in the nation and around the world. At the core of our
                wide range of academic inquiry is the to attract and engage the
                best minds in pursuit of greater human new discoveries.
              </p>
              <span className="section-area-6-admin">Jon Anderson</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="h6_admission-img">
              <Image
                width={1290}
                height={632}
                src="/assets/img/admission/6/bg.jpg"
                alt="img"
              />
              <div className="h6_admission-form">
                <h5 className="h6_admission-form-title">Admissions</h5>
                <AdmissionForm variant />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeSection
        marqueeTexts={["Apply for Admission", "Apply for Admission"]}
        containerClass="apply-text-wrap mt-30"
        textContainerClass="apply-text-ticker"
        headerClass="h6_admission-bottom-text"
      />
    </section>
  );
};

export default AdmissionSection2;
