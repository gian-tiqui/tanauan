import React from "react";
import { Link } from "react-router-dom";

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      <div className="w-full h-px ml-2 border-b-2 border-blue-900 sm:ml-4"></div>
      {text === "More news" ? (
        <Link
          to="/news"
          className="px-4 py-2 text-xl font-bold text-white bg-blue-800 border rounded sm:px-5 sm:py-3 sm:text-2xl hover:bg-blue-700"
        >
          <p className="text-sm whitespace-nowrap">{text}</p>
        </Link>
      ) : (
        <p className="mx-2 text-xl font-bold text-blue-900 whitespace-nowrap sm:text-2xl">
          {text}
        </p>
      )}
      <div className="w-full h-px mr-2 border-b-2 border-blue-900 sm:mr-4"></div>
    </div>
  );
};

export default Divider;
