import React from "react";
import { News } from "./NewsCarousel";

const cardWidth = "600px";

const HighlightCard: React.FC<News> = ({ header, date, link, imageURI }) => {
  return (
    <div
      className="rounded-lg border shadow overflow-hidden flex justify-items-end relative"
      style={{
        background: `url(${imageURI})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "230px",
        width: cardWidth,
      }}
    >
      <div className="p-2 mt-44 text-white" style={{ width: cardWidth }}>
        <p className="font-bold">Name of place</p>
        <p className="text-xs">Philippines</p>
      </div>
    </div>
  );
};

export default HighlightCard;
