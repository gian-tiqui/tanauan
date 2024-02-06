import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import NewsCard from "./NewsCard";

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
  imageURI: "",
};

const NewsCarousel = () => {
  const [news, setNews] = useState<News[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const promise = await axios.get(TANAUAN_NEW_URI);
      const data = promise.data;

      setNews(data);
      console.log(news);
    };

    fetchData();
  }, [news]);
  return (
    <Container>
      <div className="container flex justify-center mt-10 gap-4">
        {Array(5)
          .fill(0)
          .map(() => (
            <NewsCard
              header={sampleNews.header}
              date={sampleNews.date}
              link={sampleNews.link}
              imageURI={sampleNews.imageURI}
            />
          ))}
      </div>
    </Container>
  );
};

export default NewsCarousel;
