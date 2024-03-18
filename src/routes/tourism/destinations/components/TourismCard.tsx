import React, { useEffect, useState } from "react";
import { CityInterface } from "../../../home/components/CityHighlights";
import axios from "axios";

const TourismCard: React.FC<CityInterface> = ({
  featured_media,
  title,
  content,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);

  const extractLastParagraph = (htmlContent: string): string | null => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const paragraphs = doc.querySelectorAll("p");
    if (paragraphs.length > 0) {
      const lastParagraph = paragraphs[paragraphs.length - 1];
      return lastParagraph.textContent?.trim() ?? null;
    }
    return null;
  };

  const lastParagraph = extractLastParagraph(content.rendered);

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
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <div className="flex-shrink-0">
        {imageURI && (
          <img
            src={imageURI}
            alt={title.rendered}
            className={`w-full h-80 object-cover ${
              imageLoaded ? "block" : "hidden"
            }`}
            onLoad={handleImageLoad}
          />
        )}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
            Loading...
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow p-4">
        <div className="text-center text-white bg-red-800">
          <h2 className="text-lg font-bold">{title.rendered}</h2>
        </div>
        <div className="flex-grow p-2 overflow-y-auto bg-gray-100 rounded-b-lg">
          <p className="text-sm text-justify text-gray-700">{lastParagraph}</p>
        </div>
      </div>
    </div>
  );
};

export default TourismCard;
