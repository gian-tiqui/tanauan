import { useContext, useEffect } from "react";
import { PreventContextMenu } from "../../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios from "axios";
import CityOfficialCard from "./components/CityOfficialCard";
import Divider from "../../home/components/Divider";
import {
  CityOfficialContext,
  SetCityCityOfficialContext,
} from "../../../context-container/ContextContainer";
import daBg from "../../../assets/services-bg.png";

export interface CityOfficialInterface {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
}

const MAYOR_IMAGE_URI =
  "https://tanauancity.gov.ph/wp-content/uploads/2022/08/viber_image_2022-08-18_15-49-27-599-600x901.jpg";

const CITY_OFFICIAL_URI = "https://tanauancity.gov.ph/wp-json/wp/v2/team";

const CityOfficials = () => {
  const cityOfficials = useContext(CityOfficialContext);
  const setCityOfficials = useContext(SetCityCityOfficialContext);
  const preventContextMenu = useContext(PreventContextMenu);

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
      <Divider text="City Officials" />
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 mt-20 md:flex md:justify-center md:mt-10 lg:flex lg:justify-center lg:mt-10"
      >
        <div className="mx-auto md:mx-0 lg:mx-0">
          <img
            src={MAYOR_IMAGE_URI}
            className="w-64 h-auto md:shadow-xl lg:shadow-xl md:w-80 lg:w-80 sm:rounded-s-lg md:rounded-s-lg lg:rounded-s-lg"
            onContextMenu={preventContextMenu}
            draggable="false"
            alt="Logo"
          />
        </div>
        <div
          className="p-4 mx-auto shadow-xl max-w-64 md:rounded-e-lg lg:rounded-e-lg md:mx-0 lg:mx-0"
          style={{ backgroundImage: `url(${daBg})` }}
        >
          <p>
            Bilang Ama ng bawat Tanaueno, nais kong pakingan ang saloobin ng
            ating mga kababayan, kaya ang karatulang ating ilalagay sa ating
            opisina ay "Tanggapan ng mga Mamamayan ng Lungsod ng Tanauan!"
            Bubuksan natin ang ating tanggapan para sa lahat, walang pinipili at
            walang bahid ng pulitika.
          </p>
        </div>
      </div>

      <Swiper
        data-aos="fade-up"
        spaceBetween={15}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="hidden p-10 mt-10 sm:hidden md:block lg:block mySwiper sm:mx-5 md:mx-5 lg:mx-44"
      >
        {cityOfficials.map((cityOfficial, cIndex) => (
          <SwiperSlide key={cIndex}>
            <CityOfficialCard {...cityOfficial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="block p-10 mt-10 sm:block md:hidden lg:hidden mySwiper sm:mx-5 md:mx-5 lg:mx-44"
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
