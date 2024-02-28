import { mNews } from "../home/components/NewsCarousel";
import NewsCard from "./components/NewsCard2";

const News = () => {
  return (
    <div className="container px-3 mx-auto">
      <div className="flex flex-wrap justify-center gap-5">
        {mNews.map((news) => (
          <NewsCard key={news.header} {...news} />
        ))}
      </div>
    </div>
  );
};

export default News;
