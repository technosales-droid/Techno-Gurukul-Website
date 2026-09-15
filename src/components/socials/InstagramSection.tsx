import { instagramData } from "@/data";

import InstagramIcon from "../utils/icons/InstagramIcon";
import Image from "next/image";

const InstagramSection = () => {
  return (
    <section className="h8_instagram-area fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-area-8 text-center mb-50">
              <span className="section-subtitle">Instagram</span>
              <h2 className="section-title mb-0">Follow EduHub On Instagram</h2>
            </div>
          </div>
        </div>
        <div className="h8_instagram-wrap">
          {instagramData.map((item) => (
            <div className="h8_instagram-item" key={item.id}>
              <Image width={350} height={360} src={item.imgSrc} alt="img" />
              <div className="h8_instagram-item-icon">
                <a href="#">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
