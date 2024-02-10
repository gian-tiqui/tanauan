import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import { rawImageURI } from "../../../large-strings-folder/Strings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

export interface News {
  header: string;
  date: string;
  link: string;
  imageURI: string;
}

const TANAUAN_NEW_URI = "";

const sampleNews: News = {
  header: "Flag Raising Ceremony",
  date: "September 18, 2023",
  link: "/",
  imageURI: rawImageURI,
};

const NewsCarousel = () => {
  const [news, setNews] = useState<News[] | undefined>(undefined);

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
    <div className="container px-23 mx-auto">
      <Swiper
        spaceBetween={1}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper mt-10"
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <NewsCard
                header={sampleNews.header + " " + index}
                date={sampleNews.date}
                link={sampleNews.link}
                imageURI={sampleNews.imageURI}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
