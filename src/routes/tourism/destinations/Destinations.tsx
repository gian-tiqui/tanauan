import { useContext, useEffect } from "react";
import axios from "axios";
import { CITIES_ENDPOINT } from "../../home/components/CityHighlights";
import {
  CityContext,
  SetCityContext,
} from "../../../context-container/ContextContainer";
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
      <p className="mb-20 text-4xl font-extrabold text-center">
        Tanauan City Hall Location
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.735138695966!2d121.01873887509655!3d14.092806386335601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd709208a54f87%3A0x7d349a8ce58c7f8!2s4232%20Talisay%20-%20Tanauan%20Rd%2C%20Talisay%2C%20Batangas!5e0!3m2!1sen!2sph!4v1710819454560!5m2!1sen!2sph"
        allowFullScreen={true}
        loading="lazy"
        className="h-[50vh] w-full md:h-[70vh]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const DelicacyCard = ({ description, imageUrl, name }: DelicaciesInterface) => {
  return (
    <div
      className="flex items-center bg-center bg-no-repeat bg-cover rounded-md shadow-xl w-96 h-96"
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
      } catch (error) {
        console.log(error);
      }
    };

    fetchCities();
  }, [cities.length, setCities]);

  useEffect(() => {
    setShowHeader(false);
    setShowFooter(false);

    return () => {
      setShowHeader(true);
      setShowFooter(true);
    };
  }, [setShowHeader, setShowFooter]);

  return (
    <div
      className="h-[1200px] md:h-[650px] bg-center bg-no-repeat bg-cover"
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
        <div className="mt-14 md:pl-4">
          <DestinationSelectorV2 />
        </div>
      </div>

      <div className="container mx-auto bg-white  md:w-[1000px] rounded-md shadow-2xl pt-10 px-5 pb-14">
        <p className="text-4xl font-extrabold text-center">
          Enjoy wonderful delicacies in Tanauan
        </p>

        <div className="flex flex-wrap justify-center gap-10 mt-20">
          {delicacies.map((delicacy, index) => (
            <DelicacyCard key={index} {...delicacy} />
          ))}
        </div>

        <div className="mt-20">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
