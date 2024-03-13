import { useContext, useEffect, useState } from "react";
import { CITIES_ENDPOINT } from "../../home/components/CityHighlights";
import axios from "axios";
import TourismCard from "./components/TourismCard";
import TourismInfo from "./components/TourismInfo";
import {
  CityContext,
  DestinationIDContext,
  SetCityContext,
} from "../../../context-container/ContextContainer";
import DestinationSelector from "./components/DestinationSelector";

// interface DelicaciesInterface {
//   name: string;
//   image: string;
// }

// const delicacies: DelicaciesInterface[] = [];

export const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.73505047557!2d121.01873887456442!3d14.092811589308065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd709208a54f87%3A0x7d349a8ce58c7f8!2s4232%20Talisay%20-%20Tanauan%20Rd%2C%20Talisay%2C%20Batangas!5e0!3m2!1sen!2sph!4v1710214495844!5m2!1sen!2sph"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

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
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <div className="grid w-full h-screen p-5 bg-white rounded shadow-xl">
              <div>
                {city ? (
                  <TourismCard {...city} />
                ) : (
                  <TourismCard {...cities[0]} />
                )}
              </div>

              <div>
                {city ? (
                  <TourismInfo {...city} />
                ) : (
                  <TourismInfo {...cities[0]} />
                )}
              </div>
            </div>
          </div>
          <div>
            <DestinationSelector category="natural-site" />
            <DestinationSelector category="cultural-site" />
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Destinations;