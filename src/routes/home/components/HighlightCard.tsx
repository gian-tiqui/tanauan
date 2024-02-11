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
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
        <p className="text-md truncate text-white font-bold sm:text-md md:text-lg">
          {name}
        </p>
        <p className="text-xs text-white sm:text-sm md:text-sm">{country}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
