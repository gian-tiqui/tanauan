import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NewsContext } from "../../context-container/ContextContainer";
import { News } from "../home/components/NewsCarousel";
import LatestNewsContainer from "../news/components/LatestNewsContainer";

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
    <div className="flex justify-center gap-5 py-10">
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
      <div className="flex flex-col gap-3 w-72">
        <div className="py-4 bg-white shadow-lg sm:w-64 md:w-72 lg:w-96 rounded-2xl">
          <p className="mb-3 ml-4 text-lg font-bold">Latest News</p>
          <LatestNewsContainer />
        </div>
        {prevNews && (
          <Link to={`/news/${prevNews?.id}`}>
            <div className="py-4 bg-white shadow-lg sm:w-64 md:w-72 lg:w-96 rounded-2xl">
              <p className="mx-3 truncate">{prevNews?.title.rendered}</p>
            </div>
          </Link>
        )}
        {nextNews && (
          <Link to={`/news/${nextNews?.id}`}>
            <div className="py-4 bg-white shadow-lg sm:w-64 md:w-72 lg:w-96 rounded-2xl">
              <p className="mx-3 truncate">{nextNews?.title.rendered}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsArticle;
