import { Link } from "react-router-dom";
import { News } from "../../home/components/NewsCarousel";

const LatestNewsCard: React.FC<News> = ({ title, date, id }) => {
  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <Link
      className="grid p-1 px-4 text-sm cursor-pointer hover:bg-gray-200"
      to={`/news/${id}`}
    >
      <p className="font-extrabold truncate">{title.rendered}</p>
      <p>{formatDate(date)}</p>
    </Link>
  );
};

export default LatestNewsCard;
