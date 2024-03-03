import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  title: { rendered: string };
  content: { rendered: string };
  date: string;
}

const NewsArticle = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [extractedStrings, setExtractedStrings] = useState<string[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://tanauancity.gov.ph/wp-json/wp/v2/posts/${id}`
        );

        const data = response.data;
        const extractedContent = extractStrings(data.content.rendered);
        setExtractedStrings(extractedContent);
        setNewsData(data);
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-lg overflow-hidden bg-white rounded-md shadow-md">
        <div className="px-6 py-4">
          <h2 className="mb-2 text-xl font-semibold">
            {newsData?.title.rendered}
          </h2>
          <pre className="text-gray-700">{extractedStrings.join("\n")}</pre>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
