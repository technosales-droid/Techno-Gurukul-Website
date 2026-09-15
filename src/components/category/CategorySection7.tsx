import { homeTenCategoriesData } from "@/data";
import Link from "next/link";


const CategorySection7 = () => {
  return (
    <section className="h10_category-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-area-10 mb-55 text-center">
              <h2 className="section-title mb-20">Our Popular Categories</h2>
              <p className="section-text">
                subjects tailored for children on your website. You can
                customize <br /> this based on the specific educational
                categories you offer
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {homeTenCategoriesData.map((category) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={category.id}>
              <div className={`h10_category-item mb-30 ${category.className}`}>
                <div className="h10_category-item-icon">
                  <category.icon />
                </div>
                <h4 className="h10_category-item-title">
                  <Link href={category.link}>{category.title}</Link>
                </h4>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
          <div className="col-12">
            <div className="h10_category-item-btn pt-30">
              <Link href="/course">
                Visit more Category<i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection7;
