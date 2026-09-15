import Image from "next/image";
import Link from "next/link";

interface Props {
  variant?: boolean;
}
const AboutSection4 = ({ variant }: Props) => {
  return (
    <section className="h4_about-area pt-140 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="h4_about-img mb-50 w_img">
              <Image
                width={660}
                height={433}
                src="/assets/img/about/4/1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="h4_about-wrap mr-65 mb-50">
              <div
                className={`${variant ? "section-area-5" : "section-area-4"
                  } mb-25`}
              >
                <h2 className="section-title mb-10">
                  Experience World Best e-Learning System
                </h2>
                <p className="section-text">
                  Maecenas Felis Tellus, dictum sed fermentum vel, various
                  condiment dolour donec aliquot, denim ut auctor molestee, era
                  elite pharetra masa.
                </p>
              </div>
              <div className="h4_about-content mb-25">
                <ul>
                  <li>
                    <i className="fa-regular fa-check"></i>Track your daily
                    activity.
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>Multiply global
                    marketing strategy
                  </li>
                  <li>
                    <i className="fa-regular fa-check"></i>Virtual support team
                  </li>
                </ul>
              </div>
              <div
                className={`h4_about-button ${variant ? "h5_about-button" : ""
                  }`}
              >
                <Link
                  href="/about"
                  className={`theme-btn h4_about-btn ${variant ? "theme-btn-5" : "theme-btn-4"
                    }`}
                >
                  More Details
                </Link>
                <a
                  href="tel:+002455456978"
                  className={`h4_about-button-call ${variant ? "h5_about-button-call" : ""
                    }`}
                >
                  <i className="fa-solid fa-phone"></i>(00) 245 545 6978
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection4;
