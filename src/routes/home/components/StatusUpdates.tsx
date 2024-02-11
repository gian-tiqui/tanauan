import { useState } from "react";
import SquareUpdates from "./SquareUpdates";

export interface UpdatesProps {
  val: number;
  title: string;
  unit: string | undefined;
}

const StatusUpdates = () => {
  const [bussin] = useState<UpdatesProps>({
    title: "Registered Business",
    val: 3667,
    unit: undefined,
  });
  const [household] = useState<UpdatesProps>({
    title: "Household",
    val: 60_000,
    unit: undefined,
  });
  const [population] = useState<UpdatesProps>({
    title: "Population",
    val: 193_936,
    unit: undefined,
  });
  const [landArea] = useState<UpdatesProps>({
    title: "Land Area",
    val: 10_987.43,
    unit: "Hectares",
  });

  return (
    <div className="mt-10 pt-5 sm:mt-20 sm:pt-7 md:mt-32 md:pt-10 flex flex-col items-center justify-center text-center pb-7 sm:pb-10 md:pb-20 bg-slate-950">
      <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
        Status Updates as of 2023
      </p>
      <div className="mt-16 text-white">
        <div className="flex flex-wrap justify-center gap-10">
          <SquareUpdates {...bussin} />
          <SquareUpdates {...household} />
          <SquareUpdates {...population} />
          <SquareUpdates {...landArea} />
        </div>
      </div>
    </div>
  );
};

export default StatusUpdates;
