import React, { useContext, useEffect, useState } from "react";
import { CityInterface } from "./CityHighlights";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SetDestinationIDContext } from "../../../context-container/ContextContainer";

import { FaEye } from "react-icons/fa";

const HighlightCard: React.FC<CityInterface> = ({
  featured_media,
  title,
  id,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);
  const [darkHover, setDarkHover] = useState<boolean>(false); // Rename dark to darkHover
  const setDestinationID = useContext(SetDestinationIDContext);
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

  const handleCardClicked = () => {
    setDestinationID(id);
    navigate("/destinations");
  };

  return (
    <div
      className="relative w-auto overflow-hidden border rounded-lg shadow h-52 hover:cursor-pointer"
      style={{
        backgroundImage: `url(${imageURI})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: "60%",
      }}
      onClick={handleCardClicked}
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
          className={`w-full h-full object-cover ${
            imageLoaded ? "block" : "hidden"
          }`}
          onLoad={handleImageLoad}
        />
      )}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          am loading
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
        <p className="font-bold text-white truncate text-md sm:text-md md:text-lg">
          {title.rendered}
        </p>
        <p className="text-xs text-white sm:text-sm md:text-sm">Philippines</p>
      </div>
    </div>
  );
};

export default HighlightCard;
