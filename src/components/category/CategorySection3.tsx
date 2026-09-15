import Link from "next/link";
import { homeThreeCategories } from "@/data";

const CategorySection3 = () => {
  return (
    <section className="h3_category-area pt-135 pb-110">
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-md-9">
            <div className="section-area-3 mb-30">
              <span className="section-subtitle">Popular Categories</span>
              <h2 className="section-title mb-0">Featured Design Category.</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="h3_category-section-button mb-40 text-md-end">
              <Link
                href="/course"
                className="theme-btn theme-btn-medium theme-btn-3"
              >
                All Categories<i className="fa-light fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {homeThreeCategories.map((category) => (
            <div className="col-xl-4 col-lg-6" key={category.id}>
              <div className="h3_category-item mb-30">
                <div className="h3_category-item-icon">
                  <i className={category.icon}></i>
                </div>
                <div className="h3_category_inner">
                  <div className="h3_category-item-content">
                    <h5>
                      <Link href="/course">{category.title}</Link>
                    </h5>
                    <p>{category.courses}</p>
                  </div>
                  <div className="h3_category-btn">
                    <Link href="/course">
                      <i className="fa-light fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection3;
