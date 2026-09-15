"use client";
import { useCustomContext } from "@/context/context";
import Image from "next/image";

const ImageModal = () => {
  const { showImageModal, closeImageModal, modalImg } = useCustomContext();
  return (
    <>
      <div
        className={`ar-modal-overlay ${showImageModal ? "active" : ""}`}
        role="button"
        onClick={closeImageModal}
      ></div>
      <div
        className={`video-modal-container img-modal-container ${
          showImageModal ? "active" : ""
        }`}
      >
        <div className="ar-modal-body">
          <button onClick={closeImageModal}>
            <i className="fa-regular fa-xmark"></i>
          </button>
          <Image width={410} height={420} src={modalImg} alt="img" />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
