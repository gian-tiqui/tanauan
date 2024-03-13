import React, { useEffect, useState } from "react";
import axios from "axios";
import { CityOfficialInterface } from "../CityOfficials";

const CityOfficialCard: React.FC<CityOfficialInterface> = ({
  title,
  featured_media,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [image, setImage] = useState<string | undefined>(undefined);

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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative overflow-hidden border rounded-lg shadow-xl border-2xl">
      {(image || image === "") && (
        <div className="h-full bg-center bg-contain">
          <img
            src={image}
            alt={title.rendered}
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
    </div>
  );
};

export default CityOfficialCard;
