import { useContext, useEffect } from "react";
import { PreventContextMenu } from "../../../App";
import "swiper/css";
import "swiper/css/bundle";
import axios from "axios";
import Divider from "../../home/components/Divider";
import {
  CityOfficialContext,
  SetCityCityOfficialContext,
} from "../../../context-container/ContextContainer";
import daBg from "../../../assets/services-bg.png";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const handleNavigate = () => {
    navigate("/city-officials-2");
  };

  return (
    <div onClick={handleNavigate}>
      <Divider text="Tanauan Mayor" />
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
          className="flex items-center p-4 mx-auto shadow-xl max-w-64 md:rounded-e-lg lg:rounded-e-lg md:mx-0 lg:mx-0"
          style={{ backgroundImage: `url(${daBg})` }}
        >
          <p className="text-justify">
            Bilang Ama ng bawat Tanaueno, nais kong pakingan ang saloobin ng
            ating mga kababayan, kaya ang karatulang ating ilalagay sa ating
            opisina ay "Tanggapan ng mga Mamamayan ng Lungsod ng Tanauan!"
            Bubuksan natin ang ating tanggapan para sa lahat, walang pinipili at
            walang bahid ng pulitika.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityOfficials;
