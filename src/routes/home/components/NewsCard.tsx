import React, { useEffect, useState } from "react";
import { News } from "./NewsCarousel";
import { Link } from "react-router-dom";
import axios from "axios";

const NewsCard: React.FC<News> = ({ title, date, link, featured_media }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [image, setImage] = useState<string | undefined>(undefined);
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    const getImage = async () => {
      try {
        const URI = `https://tanauancity.gov.ph/wp-json/wp/v2/media/${featured_media}`;
        const res = await axios.get(URI);
        const data = res.data;
        setImage(data.guid.rendered);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (featured_media) {
      getImage();
    }
  }, [featured_media]);

  useEffect(() => {
    const formattedDate = formatDate(date);
    setFormattedDate(formattedDate);
  }, [date]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="relative overflow-hidden border rounded-lg shadow-xl border-2xl">
      {(image || image === "") && (
        <div className="h-32 bg-center bg-cover sm:h-32 md:h-40">
          <img
            src={image}
            alt={title.rendered === null ? "Image Loading" : title.rendered}
            className={`w-full h-full object-cover ${
              imageLoaded ? "block" : "hidden"
            }`}
            onLoad={handleImageLoad}
          />
          {!imageLoaded && (
            <div className="flex items-center justify-center w-full h-full bg-gray-300">
              <img src="loading.gif" alt="Loading" className="w-8 h-8" />
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col p-4 bg-white">
        <p className="text-xs font-bold truncate sm:text-md md:text-lg lg:text-xlz">
          {title.rendered}
        </p>
        <p className="text-xs text-gray-600 sm:text-sm">{formattedDate}</p>
        <Link
          className="self-end w-20 py-1 mt-4 text-xs text-center text-white bg-red-700 border rounded-md sm:px-1 sm:truncate md:font-bold lg:font-bold hover:bg-red-600 sm:w-16 md:w-24 lg:28 sm:text-xs md:text-sm lg:text-md"
          to={link}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
