import React from "react";
import { Updates } from "./StatusUpdates";

const SquareUpdates: React.FC<Updates> = ({ title, unit, val }) => {
  const formattedValue = val.toLocaleString();

  return (
    <div className="w-1/2 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <div className="flex flex-col items-center justify-center w-full h-full p-10 border border-white rounded-xl">
        <p className="overflow-hidden text-lg leading-tight text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-ellipsis whitespace-nowrap">
          {formattedValue}
        </p>
        {unit && (
          <p className="overflow-hidden text-xs leading-tight text-center sm:text-sm md:text-md lg:text-lg xl:text-xl text-ellipsis whitespace-nowrap">
            {unit}
          </p>
        )}
        <p className="mt-5 text-xs leading-relaxed text-center sm:text-sm md:text-md lg:text-lg xl:text-xl text-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SquareUpdates;
