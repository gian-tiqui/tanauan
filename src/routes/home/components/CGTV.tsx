import { useState } from "react";

interface Video {
  title: string;
  src: string;
  imageURI: string;
}

const Cgtv = () => {
  const videos: Video[] = [
    {
      title: "Sr leagee",
      src: "https://www.youtube.com/embed/x9hpVjkieBc",
      imageURI: "",
    },
    {
      title: "Sr leagee",
      src: "https://www.youtube.com/embed/W3I3YJeE_1M",
      imageURI: "",
    },
    {
      title: "Sr leagee",
      src: "https://www.youtube.com/embed/nGErCvPx3QQ",
      imageURI: "",
    },
    {
      title: "Sr leagee",
      src: "https://www.youtube.com/embed/nGErCvPx3QQ",
      imageURI: "",
    },
    {
      title: "Sr leagee",
      src: "https://www.youtube.com/embed/nGErCvPx3QQ",
      imageURI: "",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const selectVideo = (index: number) => {
    setSelectedVideoIndex(index);
  };

  return (
    <div className="container mx-auto my-12 flex flex-col md:flex-row justify-center md:items-stretch md:gap-4 h-96">
      <div className="md:w-3/4 relative">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={videos[selectedVideoIndex].src}
          title={videos[selectedVideoIndex].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
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
