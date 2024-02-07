import { useState } from "react";

const VideoPlaylist = () => {
  const videos = [
    {
      title: "Video 1",
      src: "video2.mp4",
    },
    {
      title: "Video 2",
      src: "../../../../tanauan.mp4",
    },
    {
      title: "Video 3",
      src: "video3.mp4",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const selectVideo = (index: number) => {
    setSelectedVideoIndex(index);
  };

  return (
    <div className="container mx-auto px-3 my-12 flex justify-between">
      <div className="w-3/4">
        <video
          autoPlay
          muted
          loop
          className="w-full h-auto"
          style={{ maxHeight: "508px" }}
          controls
          src={videos[selectedVideoIndex].src}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/4 ml-4">
        <div className="space-y-2">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 ${
                selectedVideoIndex === index ? "bg-gray-300" : ""
              }`}
              onClick={() => selectVideo(index)}
            >
              <p className="font-semibold">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Cgtv = () => {
  return (
    <div className="container mx-auto px-3 my-12">
      <VideoPlaylist />
    </div>
  );
};

export default Cgtv;
