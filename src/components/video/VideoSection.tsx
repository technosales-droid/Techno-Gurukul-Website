"use client";
import { useCustomContext } from "@/context/context";

const VideoSection = () => {
  const { openVideoModal } = useCustomContext();
  return (
    <div className="h5_video-area">
      <div className="h5_video-content">
        <a
          className="h5_video-content-btn h5_play-btn popup-video"
          role="button"
          onClick={openVideoModal}
        >
          <i className="fa-solid fa-play"></i>
        </a>
      </div>
    </div>
  );
};

export default VideoSection;
