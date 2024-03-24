import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../../context-container/ContextContainer";
import axios, { AxiosResponse } from "axios";
import { News } from "../../home/components/NewsCarousel";
import LatestNewsCard from "./LatestNewsCard";

const DATA_PER_PAGE = 20;

const LatestNewsContainer = () => {
  const latestNews = useContext(NewsContext);
  const [mLatestNews, setMLatestNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      if (latestNews.length === 0) {
        try {
          const NEWS_ENDPOINT = `https://tanauancity.gov.ph/wp-json/wp/v2/posts?per_page=${DATA_PER_PAGE}`;

          if (latestNews.length === 0) {
            const response: AxiosResponse<News[]> = await axios.get(
              NEWS_ENDPOINT
            );
            const data = response.data;

            const MAX_NEWS = 10;
            const temp: News[] = [];

            for (let i = 0; i < MAX_NEWS; i++) {
              temp.push(data[i]);
            }

            setMLatestNews(temp);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        const MAX_NEWS = 10;
        const temp: News[] = [];

        for (let i = 0; i < MAX_NEWS; i++) {
          temp.push(latestNews[i]);
        }

        setMLatestNews(temp);
      }
    };

    fetchLatestNews();
  }, [latestNews.length, latestNews]);

  return (
    <>
      {mLatestNews.slice(0, 5).map((latestNews) => (
        <LatestNewsCard {...latestNews} key={latestNews.id} />
      ))}
    </>
  );
};

export default LatestNewsContainer;
