
import Link from "next/link";
import Image from "next/image";

const CareerSection = () => {
  return (
    <section className="h8_career-area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-area-8 text-center mb-50">
              <span className="section-subtitle">Choose Your Career</span>
              <h2 className="section-title mb-0">Choose Your Career</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="h8_career-item mb-30">
              <div className="h8_career-item-img">
                <Image
                  width={244}
                  height={150}
                  src="/assets/img/career/1.png"
                  alt="img"
                />
              </div>
              <div className="h8_career-item-content">
                <span>Build Your Career</span>
                <h4>Join Our UI/UX Design Course & Build Your Skill.</h4>
                <Link
                  href="/contact"
                  className="theme-btn theme-btn-8 h8_career-btn"
                >
                  Join Now<i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="h8_career-item mb-30">
              <div className="h8_career-item-img">
                <Image
                  width={244}
                  height={153}
                  src="/assets/img/career/2.png"
                  alt="img"
                />
              </div>
              <div className="h8_career-item-content">
                <span>Start From Today</span>
                <h4>Join Our Marketing Course & Build Your Skill.</h4>
                <Link
                  href="/contact"
                  className="theme-btn theme-btn-8 h8_career-btn"
                >
                  Join Now<i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
