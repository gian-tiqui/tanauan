import React from "react";
import { News } from "./NewsCarousel";
import { Link } from "react-router-dom";

const NewsCard: React.FC<News> = ({ header, date, link, imageURI }) => {
  return (
    <div className="relative overflow-hidden border rounded-lg">
      <div
        className="h-20 bg-center bg-cover sm:h-32 md:h-40"
        style={{ backgroundImage: `url(${imageURI})` }}
      ></div>
      <div className="flex flex-col p-4 bg-white">
        <p className="text-xs font-bold truncate sm:text-md md:text-lg lg:text-xl">
          {header}
        </p>
        <p className="text-xs text-gray-600 sm:text-sm">{date}</p>
        <Link
          className="self-end w-20 py-1 mt-4 text-xs text-center text-white bg-red-500 border rounded-md sm:px-1 sm:truncate md:font-bold lg:font-bold hover:bg-red-600 sm:w-16 md:w-24 lg:28 sm:text-xs md:text-sm lg:text-md"
          to={link}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
