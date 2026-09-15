import { tuitionPricingData } from "@/data";

import Link from "next/link";
import Image from "next/image";

const PricingSection2 = () => {
  return (
    <section className="h6_tuition-area pt-120 pb-70">
      <div className="container">
        <div className="row g-0">
          <div className="col-xl-5">
            <div className="h6_tuition-content mb-45">
              <Image
                width={63}
                height={44}
                src="/assets/img/bg/tuition-logo.png"
                alt="Tuition Logo"
              />
              <h2>Tuition & Fees</h2>
              <p>
                This new plan is designed to reduce the average cost of a Make{" "}
                <br /> School Education while preserving the core protections of
                ISAs <br /> – if you don’t have a job after Make School, you
                should not <br /> have to pay until you are employed.
              </p>
              <Link href="/about">
                University Overview<i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="h6_tuition-wrap mb-50">
              {tuitionPricingData.map((data, index) => (
                <div
                  key={data.id}
                  className={`h6_tuition-item ${index % 2 !== 0 ? "h6_tuition-light" : ""
                    }`}
                >
                  <span className="h6_tuition-item-date">{data.dateRange}</span>
                  <h4 className="h6_tuition-item-title">{data.title}</h4>
                  <ul className="h6_tuition-item-list">
                    {data.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.semester}
                        <span>${item.cost.toLocaleString()}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="h6_tuition-item-total">
                    <span>Total :</span>{" "}
                    <span>
                      $
                      {data.items
                        .reduce((sum, item) => sum + item.cost, 0)
                        .toLocaleString()}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection2;
