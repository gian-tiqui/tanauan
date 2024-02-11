import React from "react";
import { UpdatesProps } from "./StatusUpdates";

const SquareUpdates: React.FC<UpdatesProps> = ({ title, unit, val }) => {
  return (
    <>
      <div className="rounded-xl border border-white p-5 md:p-8 lg:p-10 flex flex-col items-center justify-center gap-2">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center leading-tight text-ellipsis overflow-hidden whitespace-nowrap">
          {val}
        </p>
        {unit && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center leading-tight text-ellipsis overflow-hidden whitespace-nowrap">
            {unit}
          </p>
        )}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center leading-relaxed">
          {title.split(" ").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </>
  );
};

export default SquareUpdates;
