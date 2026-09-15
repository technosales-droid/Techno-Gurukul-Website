import Link from "next/link";
import { homeFourCategories } from "@/data";

const CategorySection4 = () => {
  return (
    <section className="h4_category-area pt-130 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-area-4 mb-60 text-center">
              <h2 className="section-title mb-0">
                Featured Topics By Category
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-0">
          {homeFourCategories.map((category) => (
            <div key={category.id} className="col-xl-3 col-lg-3 col-sm-6">
              <div className="h4_category-item">
                <div className="h4_category-item-icon">
                  <i className={category.icon}></i>
                </div>
                <div className="h4_category-item-content">
                  <h5>
                    <Link href="/course">{category.title}</Link>
                  </h5>
                  <p>{category.courses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection4;
