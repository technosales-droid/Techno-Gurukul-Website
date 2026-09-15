import Link from "next/link";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="h5_feature-area">
      <div className="h5_feature-wrapper">
        <div className="h5_feature-item first_item">
          <div className="h5_feature-inner">
            <span>01</span>
            <h3>Bachelor's degree</h3>
            <p>
              Through a combination of lectures, readings, and <br />{" "}
              discussions, students will gain a solid foundation in <br />{" "}
              educational psychology.
            </p>
            <Link href="/course">
              View Course<i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="h5_feature-item second_item">
          <div className="h5_feature-inner">
            <span>02</span>
            <h3>Master's degree</h3>
            <p>
              Through a combination of lectures, readings, and <br />{" "}
              discussions, students will gain a solid foundation in <br />{" "}
              educational psychology.
            </p>
            <Link href="/course">
              View Course<i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="h5_feature-item w_img third_item">
          <Image
            width={635}
            height={466}
            src="/assets/img/feature/5/1.jpg"
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
