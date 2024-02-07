import { useEffect, useState } from "react";
import IdkCircle from "./IdkCircle";

export interface IdkCircleProps {
  val: number;
  title: string;
  unit: string | undefined;
}

const StatusUpdates = () => {
  const [bussin, setBussin] = useState<IdkCircleProps>({
    title: "meow",
    val: 1,
    unit: undefined,
  });
  const [household, setHousehold] = useState<IdkCircleProps>({
    title: "meow",
    val: 1,
    unit: undefined,
  });
  const [population, setPopulation] = useState<IdkCircleProps>({
    title: "meow",
    val: 1,
    unit: undefined,
  });
  const [landArea, setLandArea] = useState<IdkCircleProps>({
    title: "meow",
    val: 1,
    unit: undefined,
  });

  useEffect(() => {
    setBussin({
      title: "Registered Business",
      val: 3667,
      unit: undefined,
    });

    setHousehold({
      title: "Household",
      val: 60_000,
      unit: undefined,
    });

    setPopulation({
      title: "Population",
      val: 193_936,
      unit: undefined,
    });

    setLandArea({
      title: "Land Area",
      val: 10_987.43,
      unit: "Hectares",
    });
  }, []);

  return (
    <div
      className="mt-10 pt-5 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#031525" }}
    >
      <p className="text-white text-2xl font-bold mt-3">
        Status Updates as of 2023
      </p>

      <div className="mt-16 text-white">
        <div className="flex justify-between text-white gap-5">
          <IdkCircle daProps={bussin} />
          <IdkCircle daProps={household} />
          <IdkCircle daProps={population} />
          <IdkCircle daProps={landArea} />
        </div>
      </div>
    </div>
  );
};

export default StatusUpdates;
