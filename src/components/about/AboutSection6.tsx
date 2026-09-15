"use client";

import { useCustomContext } from "@/context/context";
import Image from "next/image";

const AboutSection6 = () => {
  const { openVideoModal } = useCustomContext();
  return (
    <section className="h7_about-area pt-120 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="h7_about-wrap mb-50 mr-70">
              <div className="section-area-6 mb-55">
                <span className="section-subtitle">About Us</span>
                <h2 className="section-title mb-15">
                  Experience in School Leadership & Teaching
                </h2>
                <p className="section-text">
                  Mauris sit amet lacinia est, vitae tristique metus. Nulla
                  facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed
                  malesuada placerat metus. Vivamus sagittis arcu eu elit
                  semper, eget varius turpis posuere. Suspendisse ac nibh
                  cursus, dignissim urna a, porttitor nisi.
                </p>
              </div>
              <div className="h7_about-content">
                <div className="h7_about-admin">
                  <div className="h7_about-admin-img">
                    <Image
                      width={54}
                      height={54}
                      src="/assets/img/about/7/admin.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="h7_about-admin-info">
                    <h5>Hugh Millie-Yate</h5>
                    <span>Vice Principal</span>
                  </div>
                </div>
                <div className="h7_about-signature">
                  <Image
                    width={135}
                    height={54}
                    src="/assets/img/about/7/signature.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="h7_about-img w_img mb-50">
              <Image
                width={630}
                height={444}
                src="/assets/img/about/7/1.png"
                alt="img"
              />
              <a className="popup-video" role="button" onClick={openVideoModal}>
                <svg
                  width="131"
                  height="132"
                  viewBox="0 0 131 132"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="65"
                    cy="66"
                    r="64"
                    stroke="white"
                    strokeOpacity="0.14"
                    strokeWidth="2"
                  />
                  <path
                    d="M65 131C100.899 131 130 101.899 130 66C130 30.1015 100.899 1 65 1"
                    stroke="#B1040E"
                    strokeWidth="2"
                  />
                </svg>
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection6;
