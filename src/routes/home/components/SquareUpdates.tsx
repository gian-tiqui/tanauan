import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Updates } from "./StatusUpdates";

const useOnScreen = (ref: React.RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this threshold as needed
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return isIntersecting;
};

const SquareUpdates: React.FC<Updates> = (
  { title, unit, val },
  key: number
) => {
  const countUpRef = useRef(null);
  const isVisible = useOnScreen(countUpRef);

  return (
    <div
      className="w-1/2 p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
      key={key}
      ref={countUpRef}
    >
      <div className="flex flex-col items-center justify-center w-full h-full p-10 border border-white rounded-xl">
        <CountUp
          start={0}
          end={isVisible ? val : 0}
          duration={2}
          separator=","
          className="overflow-hidden text-lg leading-tight text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-ellipsis whitespace-nowrap"
        />
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
