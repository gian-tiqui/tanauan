import { useContext, useEffect, useState } from "react";
import {
  CityOfficialContext,
  SetCityCityOfficialContext,
} from "../../../context-container/ContextContainer";
import axios from "axios";
import { CityOfficialInterface } from "./CityOfficials";

const CITY_OFFICIAL_URI = "https://tanauancity.gov.ph/wp-json/wp/v2/team";
const MAYOR_IMAGE_URI =
  "https://tanauancity.gov.ph/wp-content/uploads/2022/08/viber_image_2022-08-18_15-49-27-599-600x901.jpg";

const CityOfficials2 = () => {
  const cityOfficials = useContext(CityOfficialContext);
  const setCityOfficials = useContext(SetCityCityOfficialContext);

  const [loading, setLoading] = useState(true);
  const [officialImages, setOfficialImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        if (cityOfficials.length === 0) {
          const response = await axios.get(CITY_OFFICIAL_URI);
          const data = response.data;
          setCityOfficials(data);

          const images: string[] = await Promise.all(
            data.map(async (official: CityOfficialInterface) => {
              if (official.featured_media) {
                const imageResponse = await axios.get(
                  `https://tanauancity.gov.ph/wp-json/wp/v2/media/${official.featured_media}`
                );
                return imageResponse.data.guid.rendered;
              }
              return null;
            })
          );

          setOfficialImages(images);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficials();
  }, [cityOfficials.length, setCityOfficials]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container px-3 py-20 mx-auto">
      <div>
        <img
          src={MAYOR_IMAGE_URI}
          alt=""
          className="w-auto mx-auto my-20 rounded-lg h-96"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center space-x-6 justify-cente lg:space-x-8 md:flex-wrap sm:flex-wrap lg:no-wrap">
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="w-64 overflow-hidden rounded-lg h-96 sm:opacity-0 lg:opacity-100">
            <img
              src={officialImages[0]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[1]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[2]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[3]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[4]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[5]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[6]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[7]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[8]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-64 overflow-hidden rounded-lg h-96">
            <img
              src={officialImages[9]}
              alt=""
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityOfficials2;
