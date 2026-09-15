
import MarqueeSection from "../marquee/MarqueeSection";
import Link from "next/link";
import Image from "next/image";

const CampusSection = () => {
  return (
    <section className="h6_campus-area fix">
      <div className="h6_campus-wrap">
        <div className="h6_campus-item-1">
          <Image
            width={755}
            height={631}
            src="/assets/img/campus/6/bg-1.jpg"
            alt="img"
          />
          <MarqueeSection
            marqueeTexts={[
              "Embrace the campus spirit",
              "Embrace the campus spirit",
            ]}
            containerClass="campus-text-wrap w-100"
            textContainerClass="campus-text-ticker"
            headerClass="h6_campus-title"
          />
        </div>
        <div className="h6_campus-item-2">
          <Image
            width={435}
            height={246}
            src="/assets/img/campus/6/bg-2.jpg"
            alt="img"
          />
          <h4>Our students create a vibrant and inclusive community</h4>
          <ul>
            <li>
              <Link href="/contact">
                Athletics Fitness <i className="fa-light fa-arrow-right"></i>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Support & Guidance <i className="fa-light fa-arrow-right"></i>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Student activities <i className="fa-light fa-arrow-right"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="h6_campus-item-3">
          <Image
            width={651}
            height={631}
            src="/assets/img/campus/6/bg-3.jpg"
            alt="img"
          />
          <MarqueeSection
            marqueeTexts={[
              "Embrace the campus rhythm",
              "Embrace the campus rhythm",
            ]}
            containerClass="campus-text-wrap-2 w-100"
            textContainerClass="campus-text-ticker-2"
            headerClass="h6_campus-title"
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
