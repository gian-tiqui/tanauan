import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../../context-container/ContextContainer";
import axios from "axios";
import { News } from "../../home/components/NewsCarousel";
import { Link } from "react-router-dom";

interface NewsContProps {
  id: number;
}

const NewsContainer = ({ id }: NewsContProps) => {
  const news = useContext(NewsContext);
  const [modifiedNews, setModifiedNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

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

  const [images, setImages] = useState<(string | null)[]>([]);

  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1">
      {modifiedNews.map((newsItem: News, index: number) => (
        <Link key={newsItem.id} to={`/news/${newsItem.id}`}>
          <div className="overflow-hidden border-b border-b-black">
            <p className="mt-2 text-gray-600">{formatDate(newsItem.date)}</p>
            <h3 className="mb-2 text-xl font-semibold">
              {newsItem.title.rendered}
            </h3>
            {images[index] && (
              <img
                src={images[index] || ""}
                alt={newsItem.title.rendered}
                className="w-auto mb-4 h-96 rounded-xl"
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsContainer;
