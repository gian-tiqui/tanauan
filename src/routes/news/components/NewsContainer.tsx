import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../../context-container/ContextContainer";
import axios from "axios";
import { News } from "../../home/components/NewsCarousel";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loadinG from "../../../assets/news-loading.json";
import { ExitNewsContext } from "../../../App";

interface NewsContProps {
  id: number;
}

const NewsContainer = ({ id }: NewsContProps) => {
  const news = useContext(NewsContext);
  const [modifiedNews, setModifiedNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<(string | null)[]>([]);
  const setShowExit = useContext(ExitNewsContext);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const filteredNews = news.filter((ns: News) => ns.tagss.includes(id));
        setModifiedNews(filteredNews);

        const promises = filteredNews.map(async (newsItem: News) => {
          if (newsItem.featured_media) {
            const mediaResponse = await axios.get(
              `https://tanauancity.gov.ph/wp-json/wp/v2/media/${newsItem.featured_media}`
            );
            const mediaData = mediaResponse.data;
            return mediaData.source_url;
          }
          return null;
        });

        const imageUrls = await Promise.all(promises);
        setImages(imageUrls);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id, news]);

  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  useEffect(() => {
    setShowExit(true);

    return () => {
      setShowExit(false);
    };
  }, [setShowExit]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen px-5 overflow-hidden border-b border-b-black">
        <Lottie animationData={loadinG} className="w-auto h-96" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1">
      {modifiedNews.length > 0 ? (
        modifiedNews.map((newsItem: News, index: number) => (
          <Link key={newsItem.id} to={`/news/${newsItem.id}`}>
            <div className="px-5 overflow-hidden border-b border-b-black">
              <p className="mt-2 text-gray-600">{formatDate(newsItem.date)}</p>
              <h3 className="mb-2 text-xl font-semibold text-justify">
                {newsItem.title.rendered}
              </h3>
              {images[index] && (
                <img
                  src={images[index] || ""}
                  alt={newsItem.title.rendered}
                  className="w-full h-full mb-4 rounded-xl"
                />
              )}
            </div>
          </Link>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-screen px-5 overflow-hidden border-b border-b-black">
          <Lottie animationData={loadinG} className="w-auto h-96" />
        </div>
      )}
    </div>
  );
};

export default NewsContainer;
