
import MarqueeSection from "../marquee/MarqueeSection";
import { applyItemsData } from "@/data";
import Link from "next/link";
import Image from "next/image";

const ApplySection = () => {
  return (
    <section className="h7_apply-area pt-10 pb-95 fix">
      <MarqueeSection
        marqueeTexts={["Apply Now", "Apply Now"]}
        containerClass="apply-text-wrap mb-80"
        textContainerClass="apply-text-ticker"
        headerClass="h7_apply-title"
      />
      <div className="container">
        <div className="h7_apply-wrap">
          {applyItemsData.map((item, index) => (
            <div className="h7_apply-item" key={index}>
              <div className="h7_apply-item-number">
                <span>{item.number}</span>
              </div>
              <div className="h7_apply-item-title">
                <h4>{item.title}</h4>
              </div>
              <div className="h7_apply-item-text">
                <p>{item.text}</p>
              </div>
              <div className="h7_apply-item-img">
                <Image
                  width={226}
                  height={240}
                  src={item.imageSrc}
                  alt={item.title} // Use title as alt text for better accessibility
                />
              </div>
            </div>
          ))}
          <Link href="/contact" className="h7_apply-wrap-btn">
            View All Requirements
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
