import { useEffect, useState } from "react";
import HighlightCard from "./HighlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios from "axios";

export interface City {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
}

const CITIES_ENDPOINT = "https://tanauancity.gov.ph/wp-json/wp/v2/ova_por";

const CityHighlights = () => {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(CITIES_ENDPOINT);

        const data = response.data;

        setCities(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="container px-3 mx-auto">
      <h1 className="mt-12 font-bold text-center sm:mt-20 md:mt-30 sm:text-lg md:text-2xl lg:text-2xl text-slate-900">
        City Highlights
      </h1>
      <div className="container">
        {/* large screens */}
        <div className="hidden sm:block md:block lg:block">
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            className="mx-5 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
          >
            {cities.map((c, index) => (
              <SwiperSlide key={index}>
                <HighlightCard {...c} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* mobile screens */}
        <div className="block sm:hidden md:hidden lg:hidden">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            autoplay={{
              delay: 1400,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            className="mx-5 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
          >
            {cities.map((c, index) => (
              <SwiperSlide key={index}>
                <HighlightCard {...c} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CityHighlights;
