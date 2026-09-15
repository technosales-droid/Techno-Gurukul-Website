import Link from "next/link";
import { homeFiveCategoryData } from "@/data";

const CategorySection5 = () => {
  const leftColumnCategories = homeFiveCategoryData.slice(0, 2);
  const rightColumnCategories = homeFiveCategoryData.slice(2);

  return (
    <section className="h5_category-area pt-140 pb-90">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xxl-5 col-lg-5 col-md-8">
            <div className="h5_category-left mb-50">
              <div className="section-area-5 mb-35">
                <span className="section-subtitle">Start Learning</span>
                <h2 className="section-title mb-15">Top Categories</h2>
                <p className="section-text">
                  Maecenas Felis Tellus, dictum sed fermentum vel, various
                  condiment dolour done aliquot, denim ut auctor molestee era
                  elite pharetra masa.
                </p>
              </div>
              <Link
                href="/course"
                className="theme-btn theme-btn-medium theme-btn-5"
              >
                View all Categories
              </Link>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-7">
            <div className="h5_category-right pb-20">
              <div className="row">
                {/* Left Column */}
                <div className="col-sm-6">
                  <div className="row">
                    {leftColumnCategories.map((category, index) => (
                      <div className="col-xl-12" key={category.id}>
                        <div
                          className={`h5_category-item mb-30 ${
                            index === 0 ? "mt-30" : ""
                          }`}
                        >
                          <div className="h5_category-item-icon">
                            <i className={category.iconClass}></i>
                          </div>
                          <div className="h5_category-item-content">
                            <h5>
                              <Link href="/course">{category.title}</Link>
                            </h5>
                            <p>{category.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-sm-6">
                  <div className="row">
                    {rightColumnCategories.map((category) => (
                      <div className="col-xl-12" key={category.id}>
                        <div className="h5_category-item mb-30">
                          <div className="h5_category-item-icon">
                            <i className={category.iconClass}></i>
                          </div>
                          <div className="h5_category-item-content">
                            <h5>
                              <Link href="/course">{category.title}</Link>
                            </h5>
                            <p>{category.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* End Columns */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection5;
