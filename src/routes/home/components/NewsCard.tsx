import React from "react";
import { Typography } from "@mui/material";
import { News } from "./NewsCarousel";
import { Link } from "react-router-dom";

const NewsCard: React.FC<News> = ({ header, date, link, imageURI }) => {
  return (
    <div
      className="rounded-lg border shadow overflow-hidden"
      style={{
        background: `url(${imageURI})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
      }}
    >
      <div className="p-4 bg-white bg-opacity-80">
        <Typography variant="h6">{header}</Typography>
        <Typography variant="body2">{date}</Typography>

        <Link className="border p-3" to={link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
