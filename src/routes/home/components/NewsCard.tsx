import React from "react";
import { News } from "./NewsCarousel";
import { Link } from "react-router-dom";

const cardWidth = "370px";

const NewsCard: React.FC<News> = ({ header, date, link, imageURI }) => {
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
      <div className="p-2 bg-white mt-32" style={{ width: cardWidth }}>
        <p className="font-bold">{header}</p>
        <p className="text-xs">{date}</p>
      </div>
      <div className="absolute bottom-0 right-0 m-3">
        <Link
          className="border px-2 py-1 rounded-md text-white font-bold"
          to={link}
          style={{ backgroundColor: "#EC2626" }}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
