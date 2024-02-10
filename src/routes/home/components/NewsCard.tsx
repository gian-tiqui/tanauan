import React from "react";
import { News } from "./NewsCarousel";
import { Link } from "react-router-dom";

const NewsCard: React.FC<News> = ({ header, date, link, imageURI }) => {
  return (
    <div className="rounded-lg border overflow-hidden relative">
      <div
        className="bg-cover bg-center h-20 sm:h-32 md:h-40"
        style={{ backgroundImage: `url(${imageURI})` }}
      ></div>
      <div className="p-4 bg-white flex flex-col">
        <p className="font-bold text-xs sm:text-md md:text-lg lg:text-xl">
          {header}
        </p>
        <p className="text-sm sm:text-base text-gray-600">{date}</p>
        <Link
          className="border py-1 mt-4 rounded-md text-white md:font-bold lg:font-bold bg-red-500 hover:bg-red-600 w-20 sm:w-16 md:w-24 lg:28 text-center self-end text-xs sm:text-xs md:text-sm lg:text-md"
          to={link}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
