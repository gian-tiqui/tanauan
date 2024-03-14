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

const Destinations = () => {
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
      </div>
    </div>
  );
};

export default Destinations;
