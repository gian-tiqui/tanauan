import { useState, useContext, useEffect } from "react";
import HighlightCard from "./HighlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios from "axios";
import { CityContext, SetCityContext } from "../../../App";
import CityCardSkeleton from "./CityCardSkeleton";

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
  const cities = useContext(CityContext);
  const setCities = useContext(SetCityContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        if (cities.length === 0) {
          const response = await axios.get(CITIES_ENDPOINT);

          const data = response.data;

          setCities(data);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCities();
  }, [cities.length, setCities]);

  return (
    <div className="container px-3 mx-auto">
      <h1 className="mt-12 font-bold text-center sm:mt-20 md:mt-30 sm:text-lg md:text-2xl lg:text-2xl text-slate-900">
        City Highlights
      </h1>
      <div className="container">
        {loading ? (
          <div>
            <div className="hidden sm:hidden md:block lg:block">
              <Swiper
                spaceBetween={15}
                slidesPerView={3}
                className="p-10 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
              >
                <SwiperSlide>
                  <CityCardSkeleton />
                </SwiperSlide>
                <SwiperSlide>
                  <CityCardSkeleton />
                </SwiperSlide>
                <SwiperSlide>
                  <CityCardSkeleton />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="block sm:block md:hidden lg:hidden">
              <Swiper
                spaceBetween={15}
                slidesPerView={1}
                className="p-10 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
              >
                <SwiperSlide>
                  <CityCardSkeleton />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default CityHighlights;
