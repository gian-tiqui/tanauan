import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsArticle = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://tanauancity.gov.ph/wp-json/wp/v2/posts/${id}`
        );

        const data = response.data;
        setNewsData(data);
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

  return (
    <div>
      {newsData ? (
        <>
          <h2>{newsData.title.rendered}</h2>
          <p dangerouslySetInnerHTML={{ __html: newsData.content.rendered }} />
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default NewsArticle;
