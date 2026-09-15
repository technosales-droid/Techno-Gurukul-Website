"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const CategorySlider = dynamic(() => import("../slider/CategorySlider"), {
  ssr: false,
});

const CategorySection = () => {
  return (
    <section className="category-area pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="category-left pb-60">
              <div className="section-area">
                <span className="section-subtitle">Browse Categories</span>
                <h2 className="section-title mb-20">Popular Categories</h2>
              </div>
              <div className="category-navigation">
                <div className="category-prev">
                  <i className="fa-thin fa-arrow-left"></i>
                </div>
                <div className="category-next">
                  <i className="fa-light fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="category-wrap">
              <div className="category-shape">
                <Image
                  width={32}
                  height={32}
                  src="/assets/img/category/1/shape-1.png"
                  alt="img"
                  className="category-shape-1"
                />
                <Image
                  width={14}
                  height={14}
                  src="/assets/img/category/1/shape-2.png"
                  alt="img"
                  className="category-shape-2"
                />
                <Image
                  width={20}
                  height={20}
                  src="/assets/img/category/1/shape-3.png"
                  alt="img"
                  className="category-shape-3"
                />
                <Image
                  width={17}
                  height={16}
                  src="/assets/img/category/1/shape-4.png"
                  alt="img"
                  className="category-shape-4"
                />
              </div>
              <CategorySlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
