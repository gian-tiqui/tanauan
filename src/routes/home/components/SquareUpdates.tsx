import React from "react";
import { UpdatesProps } from "./StatusUpdates";

const SquareUpdates: React.FC<UpdatesProps> = ({ title, unit, val }) => {
  const formattedValue = val.toLocaleString();

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
      <div className="w-full h-full rounded-xl border border-white p-10 flex flex-col items-center justify-center">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center leading-tight text-ellipsis overflow-hidden whitespace-nowrap">
          {formattedValue}
        </p>
        {unit && (
          <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-center leading-tight text-ellipsis overflow-hidden whitespace-nowrap">
            {unit}
          </p>
        )}
        <p className="mt-5 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-center leading-relaxed text-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SquareUpdates;
