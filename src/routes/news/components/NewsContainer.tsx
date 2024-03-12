import { useContext } from "react";
import { NewsContext } from "../../../context-container/ContextContainer";

interface NewsContProps {
  id: number;
}

const NewsContainer = ({ id }: NewsContProps) => {
  const news = useContext(NewsContext);

  const modifiedNews = news.filter((ns) => {
    return ns.tagss.includes(id);
  });

  return (
    <div>
      {modifiedNews.map((news) => (
        <pre>{JSON.stringify(news, null, 2)}</pre>
      ))}
    </div>
  );
};

export default NewsContainer;
