import { useContext, useEffect } from "react";
import { CityOfficialContext, SetCityCityOfficialContext } from "../../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios from "axios";
import CityOfficialCard from "./components/CityOfficialCard";

export interface CityOfficialInterface {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
}

const CITY_OFFICIAL_URI = "https://tanauancity.gov.ph/wp-json/wp/v2/team";

const CityOfficials = () => {
  const cityOfficials = useContext(CityOfficialContext);
  const setCityOfficials = useContext(SetCityCityOfficialContext);

  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        if (cityOfficials.length === 0) {
          const response = await axios.get(CITY_OFFICIAL_URI);

          const data = response.data;
          setCityOfficials(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfficials();
  }, [cityOfficials.length, setCityOfficials]);

  return (
    <div>
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="p-10 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
      >
        {cityOfficials.map((cityOfficial, cIndex) => (
          <SwiperSlide key={cIndex}>
            <CityOfficialCard {...cityOfficial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CityOfficials;
