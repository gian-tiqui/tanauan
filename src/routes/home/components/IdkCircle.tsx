import React from "react";
import { IdkCircleProps } from "./StatusUpdates";

const IdkCircle: React.FC<IdkCircleProps> = ({ title, unit, val }) => {
  return (
    <div
      className={`rounded-full border border-white p-10 sm:p-5 md:p-8 lg:p-10 flex flex-col items-center justify-center gap-2`}
    >
      <p
        className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-tight text-ellipsis overflow-hidden whitespace-nowrap`}
      >
        {val}
      </p>
      {unit && (
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center leading-tight text-ellipsis overflow-hidden whitespace-nowrap`}
        >
          {unit}
        </p>
      )}
      <p
        className={`text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center leading-relaxed`}
      >
        {title.split(" ").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default IdkCircle;
