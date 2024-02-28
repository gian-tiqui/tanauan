import { mNews } from "../../large-strings-folder/Dummy";
import Divider from "../home/components/Divider";
import NewsCard from "./components/NewsCard2";

const News = () => {
  return (
    <div className="container px-3 mx-auto mt-8">
      <Divider text="News" />
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {mNews.map((news) => (
          <NewsCard key={news.header} {...news} />
        ))}
      </div>
    </div>
  );
};

export default News;
