import { useContext, useEffect, useState } from "react";
import {
  CityOfficialContext,
  SetCityCityOfficialContext,
} from "../../../context-container/ContextContainer";
import axios from "axios";
import { CityOfficialInterface } from "./CityOfficials";
import Divider from "../../home/components/Divider";

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

  console.log(MAYOR_IMAGE_URI);

  return (
    officialImages.length > 0 && (
      <div className="container px-3 pb-20 mx-auto">
        <Divider text="City Officials" />

        <div className="flex flex-wrap items-center justify-center mt-20 space-x-6 justify-cente lg:space-x-8 md:flex-wrap sm:flex-wrap lg:no-wrap ">
          {officialImages.map((image, index) => (
            <div
              key={index}
              className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
            >
              {image && (
                <div className="w-64 overflow-hidden rounded-lg h-96">
                  <img
                    src={image}
                    alt=""
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default CityOfficials2;
