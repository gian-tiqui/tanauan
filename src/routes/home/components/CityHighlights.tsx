import { useState, useEffect } from "react";
import axios from "axios";
import HighlightCard from "./HighlightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export interface City {
  name: string;
  country: string;
  imageURI: string;
}

const CityHighlights = () => {
  const [city] = useState<City[]>([
    {
      name: "Jose P. Laurel Ancestral House",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2022/12/JOSE-P.-LAUREL-ANCESTRAL-HOUSE-1024x1024.jpg",
    },
    {
      name: "Gov Modesto Q. Castillo Memorial Cultural Center",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/GOV.-MODESTO-Q.-CASTILLO-MEMORIAL-CULTURAL-CENTER-2.jpg",
    },
    {
      name: "St. John Evangelist Parish Church",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/ST.-JOHN-THE-EVANGELIST-PARISH-CHURCH-2.jpg",
    },
    {
      name: "Old Municipal Building and Tanauan City Meseum",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/OLD-MUNICIPAL-BUILDING-AND-TANAUAN-CITY-MUSEUM.jpg",
    },
    {
      name: "Museo ni Apolinario Mabino",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/MUSEO-NI-APOLINARIO-MABINI-2.jpg",
    },
    {
      name: "Ruins of Old Tanauan",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/RUINS-OF-OLD-TANAUAN.jpg",
    },
    {
      name: "SJE Cemetery in Trapiche",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/SJE-CEMETERY-IN-TRAPICHE.jpg",
    },
    {
      name: "Iluhan Tubo Old Tower in Cale",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/ILUHAN-NG-TUBO-OLD-TOWER-IN-CALE.jpg",
    },
    {
      name: "Napayong Island",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/NAPAYONG-ISLAND.jpg",
    },
    {
      name: "Sabang River Ecopark in Brgy Gonzales",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/SABANG-RIVER-ECOPARK-IN-BRGY.GONZALES.jpg",
    },
    {
      name: "Taal Lake and View of Taal Volcano 6 Lakeshore Barangays",
      country: "Philippines",
      imageURI:
        "https://tanauancity.gov.ph/wp-content/uploads/2023/01/TAAL-LAKE-and-VIEW-OF-TAAL-VOLCANO-6-LAKESHORE-BARANGAYS.jpg",
    },
  ]);

  return (
    <div className="container mx-auto px-3">
      <h1
        className="mt-12 sm:mt-20 md:mt-30 sm:text-lg md:text-2xl lg:text-2xl font-bold text-center"
        style={{ color: "#023F78" }}
      >
        City Highlights
      </h1>
      <div className="container flex justify-center">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mySwiper mt-10 mx-5 sm:mx-5 md:mx-5 lg:mx-44"
        >
          {city.map((c, index) => (
            <SwiperSlide key={index}>
              <HighlightCard
                name={c.name}
                country={c.country}
                imageURI={c.imageURI}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CityHighlights;
