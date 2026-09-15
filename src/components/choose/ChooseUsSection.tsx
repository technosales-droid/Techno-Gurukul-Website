
import Link from "next/link";
import Image from "next/image";

const ChooseUsSection = () => {
  return (
    <section className="h9_choose-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-area-9 text-center mb-40">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title mb-0">Reasons To Select Us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="h9_choose-item mb-30">
              <div className="h9_choose-item-icon">
                <Image
                  width={85}
                  height={86}
                  src="/assets/img/choose/1.png"
                  alt="img"
                />
              </div>
              <h4 className="h9_choose-item-title">Personalized Learning</h4>
              <p>
                Ut cursus sem metus, sagittis ullamcorper neque porttitor se
                Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec
                ultrices ante ac malesuada.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="h9_choose-item mb-30">
              <div className="h9_choose-item-icon">
                <Image
                  width={85}
                  height={86}
                  src="/assets/img/choose/2.png"
                  alt="img"
                />
              </div>
              <h4 className="h9_choose-item-title">Trusted Content</h4>
              <p>
                Ut cursus sem metus, sagittis ullamcorper neque porttitor se
                Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec
                ultrices ante ac malesuada.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="h9_choose-item mb-30">
              <div className="h9_choose-item-icon">
                <Image
                  width={85}
                  height={86}
                  src="/assets/img/choose/3.png"
                  alt="img"
                />
              </div>
              <h4 className="h9_choose-item-title">Tool Empower Teachers</h4>
              <p>
                Ut cursus sem metus, sagittis ullamcorper neque porttitor se
                Proin commodo lacinia dolor bibendum sem vulputate vitae. Donec
                ultrices ante ac malesuada.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="h9_choose-item-big mb-30">
              <div className="h9_choose-item-big-img">
                <Image
                  width={630}
                  height={370}
                  src="/assets/img/choose/bg-1.jpg"
                  alt="img"
                />
              </div>
              <div className="h9_choose-item-big-content">
                <span>Become an Instructor</span>
                <h3>
                  <Link href="/contact">
                    Come and Join Us to Disseminate Your Expertise.
                  </Link>
                </h3>
                <p>
                  Ut cursus sem metus, sagittis ullamcorper neque port Proin
                  commodo lacinia Donec ultrices ante ac malesuada.
                </p>
                <Link href="/contact" className="theme-btn theme-btn-9">
                  Become an Instructor
                  <i className="fa-light fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="h9_choose-item-big mb-30">
              <div className="h9_choose-item-big-img">
                <Image
                  width={630}
                  height={370}
                  src="/assets/img/choose/bg-2.jpg"
                  alt="img"
                />
              </div>
              <div className="h9_choose-item-big-content">
                <span>Learners and Students</span>
                <h3>
                  <Link href="/contact">
                    There Are No Limits to What You Can Learn.
                  </Link>
                </h3>
                <p>
                  Ut cursus sem metus, sagittis ullamcorper neque port Proin
                  commodo lacinia Donec ultrices ante ac malesuada.
                </p>
                <Link href="/contact" className="theme-btn theme-btn-9">
                  Terners, start here<i className="fa-light fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
