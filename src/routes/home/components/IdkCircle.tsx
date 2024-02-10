import { IdkCircleProps } from "./StatusUpdates";

const IdkCircle = ({ daProps }: { daProps: IdkCircleProps }) => {
  return (
    <div className="rounded-full border border-white p-10 sm:p-5 md:p-8 lg:p-10">
      <div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-nowrap">
          {daProps.val}
        </p>
        {daProps.unit && (
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-nowrap">
            {daProps.unit}
          </p>
        )}
        <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-3 whitespace-normal">
          {daProps.title.split(" ").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default IdkCircle;
