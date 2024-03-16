import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NewsContext } from "../../context-container/ContextContainer";
import { News } from "../home/components/NewsCarousel";

const NewsArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [newsData, setNewsData] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const [prevNews, setPrevNews] = useState<News | null>(null);
  const [nextNews, setNextNews] = useState<News | null>(null);
  const news = useContext(NewsContext);

  useEffect(() => {
    const currNewsId = id;
    const currentIndex = news.findIndex(
      (item) => item.id.toString() === currNewsId
    );

    const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
    const nextIndex = currentIndex < news.length - 1 ? currentIndex + 1 : null;

    const prev = prevIndex !== null ? news[prevIndex] : null;
    const next = nextIndex !== null ? news[nextIndex] : null;

    setPrevNews(prev);
    setNextNews(next);
  }, [id, news]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<News>(
          `https://tanauancity.gov.ph/wp-json/wp/v2/posts/${id}`
        );

        const data = response.data;
        setNewsData(data);

        if (data.featured_media) {
          const mediaResponse = await axios.get(
            `https://tanauancity.gov.ph/wp-json/wp/v2/media/${data.featured_media}`
          );
          const mediaData = mediaResponse.data;
          setImage(mediaData.source_url);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

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

  if (loading || !newsData) {
    return <p>Loading...</p>;
  }

  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="flex justify-center py-10">
      <Link to={`/news/${prevNews?.id}`}>{prevNews?.title.rendered}</Link>
      <Link to={`/news/${nextNews?.id}`}>{prevNews?.title.rendered}</Link>
      <div className="max-w-xl bg-white rounded-md shadow-md">
        <div className="px-6 py-8">
          {image && (
            <div className="mb-6">
              <img
                src={image}
                alt={newsData.title.rendered}
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
          <h2 className="mb-2 text-2xl font-semibold">
            {newsData.title.rendered}
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Published on {formatDate(newsData.date)}
          </p>
          <div className="text-base text-gray-700">
            <div>
              {extractStrings(newsData.content.rendered).map(
                (string: string, index: number) => (
                  <p key={index} className="text-sm text-gray-800">
                    {string}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
