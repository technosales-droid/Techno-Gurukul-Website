"use client";
import { useRouter } from "next/navigation";
import { useCustomContext } from "@/context/context";
import BannerSearchForm3 from "../form/BannerSearchForm3";
import Image from "next/image";

const BannerSection4 = () => {
  const { handleCategoryChange } = useCustomContext();
  const navigate = useRouter();

  const categorySelect = (category: string) => {
    handleCategoryChange(category);
    navigate.push(`/course`);
  };
  return (
    <section className="h4_banner-area">
      <div className="h4_single-banner">
        <Image
          width={99}
          height={345}
          className="h4_banner-shape"
          src="/assets/img/banner/4/shape.png"
          alt="img"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-8 col-lg-9">
              <div className="h4_banner-content mr-50">
                <div className="section-area-3 mb-45 ">
                  <h1 className="section-title">
                    Build your <br />
                    <span>Skills</span> to achieve <br /> your Goals
                  </h1>
                  <p className="section-text">
                    Through a combination of lectures, readings, and
                    discussions, students will gain a solid foundation in
                    educational psychology.
                  </p>
                </div>
                <BannerSearchForm3 />
                <div className="h4_banner-tag">
                  <a
                    role="button"
                    href="#"
                    onClick={() => categorySelect("art-design")}
                  >
                    Art Design
                  </a>
                  <a
                    role="button"
                    href="#"
                    onClick={() => categorySelect("ux-ui-design")}
                  >
                    UI/UX Design
                  </a>
                  <a
                    role="button"
                    href="#"
                    onClick={() => categorySelect("web-design")}
                  >
                    Web Design
                  </a>
                  <a
                    role="button"
                    href="#"
                    onClick={() => categorySelect("graphic-design")}
                  >
                    Graphic Design
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h4_banner-img">
          <Image
            width={800}
            height={757}
            src="/assets/img/banner/4/bg.png"
            alt="img"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection4;
