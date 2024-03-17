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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import tanauanImg from "../../../assets/tanauan-destination.png";
import { SetShowFooterContext, SetShowHeaderContext } from "../../../App";
import Navbar from "./components/Navbar";
import DestinationSelectorV2 from "./components/DestinationSelectorV2";

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

const Destinations: React.FC = () => {
  const cities = useContext(CityContext);
  const setCities = useContext(SetCityContext);
  const [loading, setLoading] = useState<boolean>(true);
  const destinationID = useContext(DestinationIDContext);
  const setShowHeader = useContext(SetShowHeaderContext);
  const setShowFooter = useContext(SetShowFooterContext);
  const delicacies: DelicaciesInterface[] = [
    {
      name: "Nilupak Ice Cream",
      description:
        "A refreshing and unique Filipino dessert that combines the creamy sweetness of ice cream with the subtle sweetness and chewy texture of nilupak (mashed cassava). This delightful treat often incorporates shredded coconut and condensed milk for added flavor and texture.",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Bibingkang Tanauan",
      description:
        "A delectable rice cake from Tanauan, Batangas, Philippines. Known for its rich, fluffy texture and a hint of saltiness, it's traditionally cooked in clay pots lined with banana leaves. Toppings can vary, but common ones include salted egg, cheese, and macapuno (coconut with a jelly-like center).",
      imageUrl:
        "https://live.staticflickr.com/3211/3015772734_0e658e6fae_c.jpg",
    },
    {
      name: "Bulalo Ice Cream",
      description:
        "A unique and adventurous Filipino dessert that combines savory bulalo broth with creamy ice cream. The result is a surprisingly delightful and refreshing treat with a hint of savory and meaty flavors.",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Bibingkang Tanauan",
      description:
        "A delectable rice cake from Tanauan, Batangas, Philippines. Known for its rich, fluffy texture and a hint of saltiness, it's traditionally cooked in clay pots lined with banana leaves. Toppings can vary, but common ones include salted egg, cheese, and macapuno (coconut with a jelly-like center).",
      imageUrl:
        "https://live.staticflickr.com/3211/3015772734_0e658e6fae_c.jpg",
    },
  ];

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
      className="h-[630px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${tanauanImg})` }}
    >
      <Navbar />
      <div className="container grid grid-cols-2 mb-16 pt-28 pl-36">
        <div className="pt-14">
          <p className="mb-4 text-5xl font-extrabold text-white">Explore</p>
          <p className="mb-4 text-5xl text-white">Your amazing city</p>
          <p className="text-5xl font-semibold text-white">Tanauan City</p>
          <p className="text-xl text-white">Batangas</p>
        </div>
        <div>
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
        <div>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            autoplay={{
              delay: 1400,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="p-5 mx-3 mt-10 sm:mx-5 md:mx-5 lg:mx-44"
          >
            {delicacies.map((delicacy, index) => (
              <SwiperSlide key={index}>
                <img src={delicacy.imageUrl} alt={delicacy.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
