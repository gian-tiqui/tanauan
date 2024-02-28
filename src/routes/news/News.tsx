import NewsCard from "../home/components/NewsCard";
import { mNews } from "../home/components/NewsCarousel";

const News = () => {
  return (
    <div className="container px-3 mx-auto">
      <div className="flex flex-wrap">
        {mNews.map((news) => (
          <NewsCard key={news.header} {...news} />
        ))}
      </div>
    </div>
  );
};

export default News;
