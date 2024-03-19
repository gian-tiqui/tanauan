import React, { useEffect, useState } from "react";
import { CityInterface } from "../../../home/components/CityHighlights";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { FaEye } from "react-icons/fa";
import CityCardSkeleton from "../../../home/components/CityCardSkeleton";

const DestinationCard: React.FC<CityInterface> = ({
  featured_media,
  title,
  id,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);
  const [darkHover, setDarkHover] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getImage = async () => {
      try {
        const URI = `https://tanauancity.gov.ph/wp-json/wp/v2/media/${featured_media}`;
        const res = await axios.get(URI);
        const data = res.data;

        setImageURI(data.guid.rendered);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (featured_media) {
      getImage();
    }
  }, [featured_media]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleSelfClicked = (id: number) => {
    navigate(`/destinations/${id}`);
  };

  return (
    <div className="cursor-pointer" onClick={() => handleSelfClicked(id)}>
      <div>
        <p className="font-bold text-white truncate text-md sm:text-md md:text-lg">
          {title.rendered}
        </p>
        <p className="mb-2 text-xs text-white sm:text-sm md:text-sm">
          Philippines
        </p>
      </div>
      <div
        className="relative w-auto overflow-hidden bg-center bg-no-repeat shadow h-72 hover:cursor-pointer"
        onMouseEnter={() => setDarkHover(true)}
        onMouseLeave={() => setDarkHover(false)}
      >
        {darkHover && (
          <div className="absolute inset-0 flex items-center justify-center bg-black opacity-50">
            <FaEye className="w-auto h-10 text-white" />
          </div>
        )}

        {imageURI && (
          <img
            src={imageURI}
            alt={title.rendered}
            className={`w-full h-full object-cover bg-no-repeat ${
              imageLoaded ? "block" : "hidden"
            }`}
            onLoad={handleImageLoad}
          />
        )}
        {!imageLoaded && <CityCardSkeleton />}
      </div>
    </div>
  );
};

export default DestinationCard;
