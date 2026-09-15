import Link from "next/link";
import { pricingPlans } from "@/data";
import Image from "next/image";
interface Props {
  variant?: boolean;
}
const PricingSection = ({ variant }: Props) => {
  return (
    <section
      className={`${variant ? "innerPage_price-area pt-120" : "h2_price-area pt-110"
        } pb-90`}
    >
      <div className="container">
        {!variant && (
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section-area-2 mb-50 text-center">
                <h2 className="section-title mb-30">
                  Examining the Costs and Benefits of{" "}
                  <span>
                    Education{" "}
                    <Image
                      width={214}
                      height={11}
                      src="/assets/img/banner/2/line.png"
                      alt="img"
                    />
                  </span>
                </h2>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {pricingPlans.map((plan) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={plan.id}>
              <div className="h2_price-item mb-30">
                {plan.isPopular && (
                  <div className="h2_price-popular-tag">
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="h2_price-item-title">
                  <h5>{plan.title}</h5>
                </div>
                <div className="h2_price-amount">
                  <del>{plan.oldPrice}</del>
                  <div className="h2_price-amount-info">
                    <h2>{plan.newPrice}</h2>
                    <p>
                      <span>Per</span>
                      <span>Month</span>
                    </p>
                  </div>
                </div>
                <div className="h2_price-middle-info">
                  <p className="h2_price-middle-info-1">
                    Discounted Price For USA
                  </p>
                  <p className="h2_price-middle-info-2">
                    Per User, billed annually
                  </p>
                </div>
                <div className="h2_price-button">
                  <Link href="/sign-up">Enroll Now</Link>
                </div>
                <div className={plan.priceContentClass}>
                  <div className="h2_price-content-top">
                    <Link href="/sign-up">Choose 2 - year plan</Link>
                    <span>{plan.saveText}</span>
                  </div>
                  <div className="h2_price-content-list">
                    <ul>
                      <li>Facilizes sed odic morbid quiz.</li>
                      <li>Design nexus et malasadas fames brand.</li>
                      <li>Artistic mind will be great for creation.</li>
                      <li>Roadmap for business agency arborator.</li>
                    </ul>
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

export default PricingSection;
