import React, { useEffect, useState } from "react";
import { City } from "../../home/components/CityHighlights";
import axios from "axios";

const TourismCard: React.FC<City> = ({ featured_media, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);

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

  return (
    <div
      className="relative w-auto overflow-hidden border rounded-lg shadow h-52"
      style={{
        backgroundImage: `url(${imageURI})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: "60%",
      }}
    >
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
    </div>
  );
};

export default TourismCard;
