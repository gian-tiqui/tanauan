import React from "react";
import { CityInterface } from "../../../home/components/CityHighlights";

const TourismInfo: React.FC<CityInterface> = ({ content, title }) => {
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

  return (
    <div>
      <h2>{title.rendered}</h2>
      <div>
        <p className="text-sm text-gray-800">{lastParagraph}</p>
      </div>
    </div>
  );
};

export default TourismInfo;
