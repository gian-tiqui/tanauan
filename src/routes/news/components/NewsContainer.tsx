import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../../../context-container/ContextContainer";
import axios from "axios";
import { News } from "../../home/components/NewsCarousel";

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

  const extractStrings = (htmlContent: string): string[] => {
    const divElements = new DOMParser()
      .parseFromString(htmlContent, "text/html")
      .querySelectorAll(".x11i5rnm div");
    const strings: string[] = [];
    divElements.forEach((element) => {
      if (element.textContent) {
        strings.push(element.textContent.trim());
      }
    });
    return strings;
  };

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
        <div key={newsItem.id} className="overflow-hidden rounded-lg shadow-lg">
          {images[index] && (
            <img
              src={images[index] || ""}
              alt={newsItem.title.rendered}
              className="object-cover w-full h-40"
            />
          )}
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">
              {newsItem.title.rendered}
            </h3>
            <p className="mb-2 text-gray-600">{formatDate(newsItem.date)}</p>
            <p className="text-gray-800">
              {extractStrings(newsItem.content.rendered)}
            </p>
            <a
              href={newsItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsContainer;
