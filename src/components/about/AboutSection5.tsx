
import MarqueeSection from "../marquee/MarqueeSection";
import Link from "next/link";
import Image from "next/image";

const AboutSection5 = () => {
  return (
    <section className="h6_about-area pt-120 pb-80 fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="h6_about-img w_img">
              <Image
                width={630}
                height={460}
                src="/assets/img/about/6/1.jpg"
                alt="img"
              />
              <div className="h6_about-img-content">
                <h2>1913</h2>
                <span>Establish</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="h6_about-content ml-30 mb-30 mb-md-0 pb-30">
              <h3 className="h6_about-content-title">
                We are dedicated to academic excellence, diversity & inclusion,
                research
              </h3>
              <p>
                university mission statements can vary significantly. The
                specific mission statement of a university will reflect its
                unique values, history, and objectives. If you have a specific
                university.
              </p>
              <p>
                would like to know its actual mission statement, I recommend
                visiting the university's official website or referring to its
                official documentation, where you can find the most up-to-date
                and accurate information about its mission and values.
              </p>
              <Link
                href="/about"
                className="h6_about-btn theme-btn theme-btn-medium theme-btn-6"
              >
                Learn More<i className="fa-light fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MarqueeSection
        marqueeTexts={["Endless friendships", "unforgettable memories"]}
        containerClass="about-text-wrap mb-15"
        textContainerClass="about-text-ticker"
        headerClass="h6_about-bottom-title"
      />
    </section>
  );
};

export default AboutSection5;
