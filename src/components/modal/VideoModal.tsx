"use client";
import { useCustomContext } from "@/context/context";

const VideoModal = () => {
  const { showVideoModal, closeVideoModal } = useCustomContext();
  return (
    <>
      <div
        className={`ar-modal-overlay ${showVideoModal ? "active" : ""}`}
        role="button"
        onClick={closeVideoModal}
      ></div>
      <div
        className={`video-modal-container ${showVideoModal ? "active" : ""}`}
      >
        <div className="ar-modal-body">
          <button onClick={closeVideoModal}>
            <i className="fa-regular fa-xmark"></i>
          </button>
          {showVideoModal && (
            <iframe
              src="https://www.youtube.com/embed/0M1C9yEzplI?si=Z3EwaFEt9ugA_2XS&rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-presentation"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default VideoModal;
