import React from "react";
import { City } from "./CityHighlights";

const HighlightCard: React.FC<City> = ({ name, country, imageURI }) => {
  return (
    <div
      className="rounded-lg border shadow overflow-hidden relative"
      style={{
        background: `url(${imageURI})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: "60%",
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <p className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl">
          {name}
        </p>
        <p className="text-xs text-white sm:text-sm md:text-md lg:text-lg">
          {country}
        </p>
      </div>
    </div>
  );
};

export default HighlightCard;
