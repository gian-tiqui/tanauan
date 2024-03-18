import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CITIES_ENDPOINT } from "../../home/components/CityHighlights";
import {
  CityContext,
  DestinationIDContext,
  SetCityContext,
} from "../../../context-container/ContextContainer";
import TourismCard from "./components/TourismCard";
import DestinationSelector from "./components/DestinationSelector";
import "swiper/css";
import "swiper/css/bundle";
import tanauanImg from "../../../assets/tanauan-destination.png";
import { SetShowFooterContext, SetShowHeaderContext } from "../../../App";
import Navbar from "./components/Navbar";
import DestinationSelectorV2 from "./components/DestinationSelectorV2";
import { delicaciesData } from "../../../large-strings-folder/Strings";

interface DelicaciesInterface {
  name: string;
  description: string;
  imageUrl: string;
}

export const Map = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.73505047557!2d121.01873887456442!3d14.092811589308065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd709208a54f87%3A0x7d349a8ce58c7f8!2s4232%20Talisay%20-%20Tanauan%20Rd%2C%20Talisay%2C%20Batangas!5e0!3m2!1sen!2sph!4v1710214495844!5m2!1sen!2sph"
        allowFullScreen={true}
        loading="lazy"
        className="h-[50vh] w-full md:h-[30vh]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const DelicaryCard = ({ description, imageUrl, name }: DelicaciesInterface) => {
  return (
    <div
      className="flex items-center bg-center bg-no-repeat bg-cover w-96 h-96"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="p-4 mt-auto text-justify bg-white">
        <p className="">{name}</p>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

const Destinations: React.FC = () => {
  const cities = useContext(CityContext);
  const setCities = useContext(SetCityContext);
  const [loading, setLoading] = useState<boolean>(true);
  const destinationID = useContext(DestinationIDContext);
  const setShowHeader = useContext(SetShowHeaderContext);
  const setShowFooter = useContext(SetShowFooterContext);
  const delicacies: DelicaciesInterface[] = delicaciesData;

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

  console.log(loading);

  useEffect(() => {
    setShowHeader(false);
    setShowFooter(false);

    return () => {
      setShowHeader(true);
      setShowFooter(true);
    };
  }, [setShowHeader, setShowFooter]);

  const city = cities.find((city) => city.id === destinationID);

  return (
    <div
      className="h-[1000px] md:h-[630px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${tanauanImg})` }}
    >
      <Navbar />
      <div className="container grid grid-cols-1 mb-16 md:grid-cols-2 pt-28 md:pt-20 md:pl-36">
        <div className="text-center pt-14 md:text-left">
          <p className="mb-4 text-5xl font-extrabold text-white">Explore</p>
          <p className="mb-4 text-5xl text-white">Your amazing city</p>
          <p className="text-5xl font-semibold text-white">Tanauan City</p>
          <p className="text-xl text-white">Batangas</p>
        </div>
        <div className="md:pl-4">
          <DestinationSelectorV2 />
        </div>
      </div>

      <div className="container mx-auto bg-white w-[1000px] rounded-md shadow-2xl">
        <div>
          <DestinationSelector category="natural-site" />
        </div>
        <div className="flex justify-center gap-5">
          <TourismCard {...(city ? city : cities[0])} />
        </div>

        <div>
          <DestinationSelector category="cultural-sites" />
        </div>
        <div className="mt-10">
          <p className="text-3xl font-bold text-center">
            Delicacies in Tanauan City
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {delicacies.map((delicacy, index) => (
              <DelicaryCard key={index} {...delicacy} />
            ))}
          </div>
        </div>

        <div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
