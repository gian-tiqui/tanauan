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

export const Map = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg md:w-1/2 lg:w-1/3 xl:w-2/5">
      {" "}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.73505047557!2d121.01873887456442!3d14.092811589308065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd709208a54f87%3A0x7d349a8ce58c7f8!2s4232%20Talisay%20-%20Tanauan%20Rd%2C%20Talisay%2C%20Batangas!5e0!3m2!1sen!2sph!4v1710214495844!5m2!1sen!2sph"
        className="object-cover w-full h-full"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const Destinations: React.FC = () => {
  const cities = useContext(CityContext);
  const setCities = useContext(SetCityContext);
  const [loading, setLoading] = useState<boolean>(true);
  const destinationID = useContext(DestinationIDContext);

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

  const city = cities.find((city) => city.id === destinationID);

  return (
    <div className="container p-3 mx-auto">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white rounded shadow-xl">
          <div className="flex flex-col h-full">
            <TourismCard {...(city ? city : cities[0])} />
          </div>
        </div>
        <div className="pb-6 bg-white rounded shadow-xl">
          <DestinationSelector category="natural-site" />
          <DestinationSelector category="cultural-site" />
        </div>
        <div className="bg-white rounded shadow-xl">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
