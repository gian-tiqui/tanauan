import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Video {
  title: string;
  src: string;
  imageURI: string;
  thumbnail: string;
}

const Cgtv = () => {
  const videos: Video[] = [
    {
      title:
        "GAME: Tanauan City vs Zambales (Senior League Baseball) CHAMPIONSHIP GAME",
      src: "https://www.youtube.com/embed/Whv42_oz4bQ",
      imageURI: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/Whv42_oz4bQ/mqdefault_6s.webp?du=3000&sqp=CPCzoa4G&rs=AOn4CLCyXYLoMh6m4aXkhy8gOrNc0Mlnbg",
    },
    {
      title:
        "Watch Live | Protect Our Nation's Youth | Philippines Vs. China (SEMIFINAL)",
      src: "https://www.youtube.com/embed/NOqAoiiyn2s",
      imageURI: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/NOqAoiiyn2s/mqdefault_6s.webp?du=3000&sqp=CIG4oa4G&rs=AOn4CLDYEu5j6t7RAAzugPH3o4ZNbqdJrA",
    },
    {
      title: "GAME: Tanauan City vs Negros (Senior League Softball)",
      src: "https://www.youtube.com/embed/BjICDZ1qkbA",
      imageURI: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/BjICDZ1qkbA/mqdefault_6s.webp?du=3000&sqp=CIDGoa4G&rs=AOn4CLBEhS9Wya-Sr-oml4OyIDbRbJZYSA",
    },
    {
      title:
        "Watch Live | Protect Our Nation's Youth | Philippines Vs. Japan (Championship Game)",
      src: "https://www.youtube.com/embed/FQlLdRThpug",
      imageURI: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/FQlLdRThpug/mqdefault_6s.webp?du=3000&sqp=CKDHoa4G&rs=AOn4CLCG0HqfA_CeOWbVO2PgvW1cOHu0Gg",
    },
    {
      title: "GAME: Tanauan City vs Northen Samar (Junior League Baseball)",
      src: "https://www.youtube.com/embed/YFL-qbitRN8",
      imageURI: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/YFL-qbitRN8/mqdefault_6s.webp?du=3000&sqp=CKmjoa4G&rs=AOn4CLB6F6u48sWSKBfw43Hr9ojCb48bog",
    },
    {
      title: "GAME: Tanauan City vs Davao City (Major League Softball)",
      src: "https://www.youtube.com/embed/yukQzNh0MnQ",
      imageURI: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/yukQzNh0MnQ/mqdefault_6s.webp?du=3000&sqp=CPzGoa4G&rs=AOn4CLBCrpEy2DyrzFOM_XElP6l5556pMQ",
    },
    {
      title: "🔴 Watch Live | Protect Our Nation's Youth (JAPAN Vs. CHINA )",
      src: "https://www.youtube.com/embed/ntrAtyccNyw",
      imageURI: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/ntrAtyccNyw/mqdefault_6s.webp?du=3000&sqp=CJC6oa4G&rs=AOn4CLBd7dk-NE_eDGVjH2tadz8gKlm8mA",
    },
    {
      title: "GAME: Tanauan City vs Zambales (Junior League Baseball)",
      src: "https://www.youtube.com/embed/1HnXZl73u3M",
      imageURI: "",
      thumbnail:
        "https://i.ytimg.com/an_webp/1HnXZl73u3M/mqdefault_6s.webp?du=3000&sqp=CLCfoa4G&rs=AOn4CLCAwcz3xUgiLsfmFVrl6IkqYIyEcA",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const selectVideo = (index: number) => {
    setSelectedVideoIndex(index);
  };

  useEffect(() => {}, []);
  return (
    <div className="my-24 sm:my-24 md:my-14 lg:my-20">
      <div className="my-10">
        <h1 className="mb-10 text-center font-bold text-slate-900 text-sm sm:text-lg md:text-xl lg:text-3xl">
          Videos
        </h1>
      </div>
      <div className="container border shadow-2xl mx-auto flex flex-col md:flex-row justify-center md:items-stretch h-96">
        <div className="md:w-3/4 relative">
          <iframe
            className="inset-0 w-full h-full"
            src={videos[selectedVideoIndex].src}
            title={videos[selectedVideoIndex].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>

        <div className="md:w-1/3 mx-4 mt-4 md:mt-auto relative rounded-e-lg">
          <div className="space-y-2 mb-2">
            <Swiper
              spaceBetween={1}
              slidesPerView={5}
              direction="vertical"
              modules={[Pagination]}
              className="mySwiper sm:h-44 md:h-80"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className={`cursor-pointer rounded-lg shadow-md border flex ${
                      selectedVideoIndex === index ? "bg-gray-300" : ""
                    }`}
                    onClick={() => selectVideo(index)}
                  >
                    <div>
                      <img
                        className="h-14 w-96 max-w-32 rounded-s-md bg-cover"
                        src={video.thumbnail}
                        alt={video.title}
                      />
                    </div>
                    <p className="font-semibold text-xs sm:text-sm md:text-md truncate px-5 my-auto">
                      {video.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute sm:bottom-0 sm:right-0 sm:transform sm:translate-x-14 sm:-translate-y-5 md:top-0 md:right-0 z-10 md:transform md:translate-x-20 md:-translate-y-32">
            <img
              alt="cgtv"
              className="sm:h-20 sm:w-44 md:h-28 md:w-64"
              src="https://tanauancity.gov.ph/wp-content/uploads/2023/01/FULL-1-e1673327794248-600x229.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cgtv;
