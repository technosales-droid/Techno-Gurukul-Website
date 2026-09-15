"use client";
import { useCustomContext } from "@/context/context";
import { galleryItems } from "@/data";
import Image from "next/image";

const GalleryTabContent = () => {
  const { openImageModal } = useCustomContext();
  return (
    <div className="row">
      {galleryItems.map((item, index) => (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={item.id}>
          <div className="innerPage_gallery-item mb-30">
            <div className="innerPage_gallery-img">
              <Image
                width={410}
                height={420}
                src={item.img}
                alt={`Gallery ${index + 1}`}
              />
            </div>
            <div className="innerPage_gallery-content">
              <a
                role="button"
                onClick={() => openImageModal(item.img)}
                className="popup-image"
              >
                <i className="fa-thin fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryTabContent;
