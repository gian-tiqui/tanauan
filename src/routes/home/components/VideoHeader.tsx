import { useRef } from "react";
import vid from "../../../assets/video25.mp4";

const VideoHeader = () => {
  const vidRef = useRef(null);

  return (
    <div className="w-full">
      <video
        autoPlay
        ref={vidRef}
        muted
        controlsList="nodownload"
        className="object-cover w-full"
        style={{ height: "508px" }}
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-auto"></div>
    </div>
  );
};

export default VideoHeader;
