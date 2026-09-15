import Link from "next/link";
import { homeTwoCategories } from "@/data";
import Image from "next/image";

const CategorySection2 = () => {
  return (
    <section className="h2_category-area pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-area-2 small-section-area-2 text-center">
              <h2 className="section-title mb-50">
                Explore{" "}
                <span>
                  Categories{" "}
                  <Image
                    width={196}
                    height={10}
                    src="/assets/img/banner/2/line.png"
                    alt="img"
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {homeTwoCategories.map((category) => (
            <div className="col-xl-3 col-lg-4 col-sm-6" key={category.id}>
              <div className="h2_category-item mb-30">
                <div className="h2_category-img">
                  <Image
                    width={90}
                    height={82}
                    src={category.image}
                    alt={category.title}
                  />
                </div>
                <div className="h2_category-content">
                  <h5>
                    <Link href="/course">{category.title}</Link>
                  </h5>
                  <p>{category.items} Items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection2;
