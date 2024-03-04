import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number;
}

const NewsArticle = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
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

  if (loading) {
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
    <div className="flex justify-center">
      <div className="max-w-lg bg-white rounded-md shadow-md">
        <div className="px-6 py-8">
          {image && (
            <div className="mb-6">
              <img
                src={image}
                alt={newsData?.title.rendered}
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
          <h2 className="mb-2 text-2xl font-semibold">
            {newsData?.title.rendered}
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Published on {formatDate(newsData?.date)}
          </p>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: newsData?.content.rendered }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
