import { useState, useEffect } from "react";
import axios from "axios";
import HighlightCard from "./HighlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export interface City {
  name: string;
  country: string;
  imageURI: string;
}

const TANAUAN_NEW_URI = "";

const sampleNews: City = {
  name: "hi",
  country: "Philippines",
  imageURI:
    "data:image/jpeg;base64,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",
};

const CityHighlights = () => {
  const [news, setNews] = useState<City[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promise = await axios.get(TANAUAN_NEW_URI);
        const data = promise.data;

        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [news]);
  return (
    <div className="container mx-auto px-3">
      <h1
        className="mt-12 sm:mt-20 md:mt-30 sm:text-lg md:text-2xl lg:text-2xl font-bold text-center"
        style={{ color: "#023F78" }}
      >
        City Highlights
      </h1>
      <div className="container flex justify-center">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mySwiper mt-10 mx-5 sm:mx-5 md:mx-5 lg:mx-44"
        >
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <HighlightCard
                  name={sampleNews.name + " " + index}
                  country={sampleNews.country}
                  imageURI={sampleNews.imageURI}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CityHighlights;
