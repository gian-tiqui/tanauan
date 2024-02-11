import { useEffect, useState } from "react";
import IdkCircle from "./IdkCircle";
import UpdatesDivider from "./UpdatesDivider";

export interface IdkCircleProps {
  val: number;
  title: string;
  unit: string | undefined;
}

const StatusUpdates = () => {
  const [bussin] = useState<IdkCircleProps>({
    title: "Registered Business",
    val: 3667,
    unit: undefined,
  });
  const [household] = useState<IdkCircleProps>({
    title: "Household",
    val: 60_000,
    unit: undefined,
  });
  const [population] = useState<IdkCircleProps>({
    title: "Population",
    val: 193_936,
    unit: undefined,
  });
  const [landArea] = useState<IdkCircleProps>({
    title: "Land Area",
    val: 10_987.43,
    unit: "Hectares",
  });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-32 pt-10 flex flex-col items-center justify-center text-center pb-20 bg-slate-950">
      <p className="text-white text-2xl font-bold">Status Updates as of 2023</p>

      <div className="mt-16 text-white">
        {screenWidth > 1280 ? (
          <div className="flex justify-between text-white gap-5">
            <IdkCircle {...bussin} />
            <UpdatesDivider />
            <IdkCircle {...household} />
            <UpdatesDivider />
            <IdkCircle {...population} />
            <UpdatesDivider />
            <IdkCircle {...landArea} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StatusUpdates;
