import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import { rawImageURI } from "../../../large-strings-folder/Strings";

export interface News {
  header: string;
  date: string;
  link: string;
  imageURI: string;
}

const TANAUAN_NEW_URI = "";

const sampleNews: News = {
  header: "Flag Raising Ceremony",
  date: "September 18, 2023",
  link: "/",
  imageURI: rawImageURI,
};

const NewsCarousel = () => {
  const [news, setNews] = useState<News[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promise = await axios.get(TANAUAN_NEW_URI);
        const data = promise.data;

        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [news]);
  return (
    <div className="container px-23 mx-auto">
      <div className="container flex justify-center mt-10 gap-4">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <NewsCard
              key={index}
              header={sampleNews.header}
              date={sampleNews.date}
              link={sampleNews.link}
              imageURI={sampleNews.imageURI}
            />
          ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
