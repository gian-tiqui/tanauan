import { useRef } from "react";
import vid from "../../../assets/video24.mp4";

const VideoHeader = () => {
  const vidRef = useRef(null);

  return (
    <div className="w-full">
      <video
        autoPlay
        ref={vidRef}
        muted
        className="object-cover w-full"
        style={{ height: "508px" }}
      >
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoHeader;
