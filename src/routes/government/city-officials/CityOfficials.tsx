import { useContext, useEffect } from "react";
import {
  CityOfficialContext,
  PreventContextMenu,
  SetCityCityOfficialContext,
} from "../../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios from "axios";
import CityOfficialCard from "./components/CityOfficialCard";
import Divider from "../../home/components/Divider";
import LogoDivider from "../../home/components/LogoDivider";

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
      <div className="flex justify-center">
        <div>
          <img
            src={MAYOR_IMAGE_URI}
            className="h-auto w-80 rounded-s-lg"
            onContextMenu={preventContextMenu}
            draggable="false"
            alt="Logo"
          />
        </div>
        <div className="p-4 max-w-40 rounded-e-lg">
          <h2>Title</h2>
          <p>
            Bilang Ama ng bawat Tanaueno, nais kong pakingan ang saloobin ng
            ating mga kababayan, kaya ang karatulang ating ilalagay sa ating
            opisina ay "Tanggapan ng mga Mamamayan ng Lungsod ng Tanauan!"
            Bubuksan natin ang ating tanggapan para sa lahat, walang pinipili at
            walang bahid ng pulitika.
          </p>
        </div>
      </div>

      <LogoDivider />
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
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
        loop={true}
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
