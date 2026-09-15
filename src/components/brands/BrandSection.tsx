"use client";
import dynamic from "next/dynamic";

const BrandSlider = dynamic(() => import("../slider/BrandSlider"), {
  ssr: false,
});

interface Props {
  style?: string;
  variant?: boolean;
}

const BrandSection = ({ style, variant }: Props) => {
  return (
    <div className={`brand-area ${style ? style : ""}`}>
      <div className="container">
        {!variant && (
          <div className="row">
            <div className="col-xl-12">
              <div className="brand-content">
                <h5>340+ Leading Universities And Companies</h5>
              </div>
            </div>
          </div>
        )}
        <div className="brand-wrap">
          <BrandSlider />
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
