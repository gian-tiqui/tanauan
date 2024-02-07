import { useState } from "react";

interface Video {
  title: string;
  src: string;
  imageURI: string;
}

const VideoPlaylist = () => {
  const videos: Video[] = [
    {
      title: "Video 1",
      src: "video2.mp4",
      imageURI: "",
    },
    {
      title: "Tanauan City 2023",
      src: "../../../../tanauan.mp4",
      imageURI: "",
    },
    {
      title: "Video 3",
      src: "video3.mp4",
      imageURI: "",
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
          style={{ maxHeight: "408px" }}
          controls
          src={videos[selectedVideoIndex].src}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/3 mx-4">
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
