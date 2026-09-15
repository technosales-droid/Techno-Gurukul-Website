"use client";
import dynamic from "next/dynamic";

const CategorySlider2 = dynamic(() => import("../slider/CategorySlider2"), {
  ssr: false,
});

const CategorySection6 = () => {
  return (
    <section className="h8_category-area pt-120 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-area-8 text-center">
              <span className="section-subtitle">Top Categories</span>
              <h2 className="section-title mb-0">Explore Our Top Categories</h2>
            </div>
          </div>
        </div>
        <div className="h8_category-wrap">
          <CategorySlider2 />
          <div className="h8_category-navigation d-none d-sm-block">
            <div className="h8_category-prev">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7H1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 1L1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="h8_category-next">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7H13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 1L13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection6;
