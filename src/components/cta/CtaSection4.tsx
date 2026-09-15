
import Image from "next/image";
import Link from "next/link";
interface Props {
  style?: string;
}
const CtaSection4 = ({ style }: Props) => {
  return (
    <div className={`h6_cta-area ${style ? style : ""}`}>
      <div className="container">
        <div className="h6_cta-wrapper">
          <Image
            width={299}
            height={278}
            className="h6_cta-wrapper-img"
            src="/assets/img/cta/7/1.png"
            alt="img"
          />
          <div className="h6_cta-content mb-30 mb-md-0">
            <h2 className="h6_cta-title">
              Are you ready to take the next step?
            </h2>
          </div>
          <div className="h6_cta-button">
            <Link href="/contact" className="h6_cta-btn">
              Application Form<i className="fa-light fa-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection4;
