import { useState } from "react";

interface Video {
  title: string;
  src: string;
  imageURI: string;
}

const Cgtv = () => {
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
    <div className="container mx-auto my-12 flex flex-col md:flex-row justify-center md:items-stretch md:gap-4">
      <div className="md:w-3/4">
        <video
          autoPlay
          muted
          loop
          className="w-full h-auto"
          style={{ maxHeight: "408px" }}
          controls
          src={videos[selectedVideoIndex].src}
        ></video>
      </div>
      <div className="md:w-1/3 mx-4 mt-4 md:mt-0">
        <div className="space-y-2">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`cursor-pointer py-4 px-2 rounded-xl shadow-2xl border ${
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

export default Cgtv;
