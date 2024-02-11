import React from "react";
import { Link } from "react-router-dom";

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      <div className="border-b-2 border-blue-900 h-px w-full ml-2 sm:ml-4"></div>
      {text === "More news" ? (
        <Link
          to="/"
          className="border border-blue-900 px-4 py-2 rounded font-bold text-xl bg-blue-800 text-white sm:px-5 sm:py-3 sm:text-2xl"
        >
          <p className="text-sm whitespace-nowrap">{text}</p>
        </Link>
      ) : (
        <p className="font-bold text-xl mx-2 whitespace-nowrap text-blue-900 sm:text-2xl">
          {text}
        </p>
      )}
      <div className="border-b-2 border-blue-900 h-px w-full mr-2 sm:mr-4"></div>
    </div>
  );
};

export default Divider;
