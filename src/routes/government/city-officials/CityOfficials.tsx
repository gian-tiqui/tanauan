import { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import axios, { AxiosResponse } from "axios";
import Divider from "../../home/components/Divider";
import {
  CityOfficialContext,
  SetCityCityOfficialContext,
} from "../../../context-container/ContextContainer";

export interface CityOfficialInterface {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
}

export interface MediaInterface {
  id: number;
  guid: { rendered: string };
}

const MAYOR_IMAGE_URI =
  "https://tanauancity.gov.ph/wp-content/uploads/2022/08/viber_image_2022-08-18_15-49-27-599-600x901.jpg";

const CITY_OFFICIAL_URI = "https://tanauancity.gov.ph/wp-json/wp/v2/team";

const CityOfficialCard: React.FC<CityOfficialInterface> = ({
  featured_media,
  title,
}) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response: AxiosResponse<MediaInterface> = await axios.get(
          `https://tanauancity.gov.ph/wp-json/wp/v2/media/${featured_media}`
        );

        const data = response.data;
        setImage(data.guid.rendered);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImage();
  }, [featured_media]);

  return (
    <div className="flex items-center justify-center p-20">
      <div className="p-2 shadow-xl rounded-xl">
        <img
          src={image}
          alt={title.rendered}
          className="w-auto rounded-lg h-96"
        />
      </div>
    </div>
  );
};

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
      <Divider text="Tanauan City's Government Officials" />
      <div className="flex items-center justify-center p-20">
        <div className="p-2 shadow-xl rounded-xl">
          <img
            src={MAYOR_IMAGE_URI}
            alt="hi"
            className="w-auto rounded-lg h-96"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {cityOfficials.map((cityOfficial, index) => (
          <CityOfficialCard key={index} {...cityOfficial} />
        ))}
      </div>
    </div>
  );
};

export default CityOfficials;
