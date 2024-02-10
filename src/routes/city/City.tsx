import { useEffect, useState } from "react";

interface DaVid {
  title: string;
  uri: string;
}

const City = () => {
  const [daVid, setDaVid] = useState<DaVid | undefined>(undefined);

  useEffect(() => {
    setDaVid(undefined);
  }, []);

  useEffect(() => {
    console.log(daVid);
  }, [daVid]);

  return <div className="w-full"></div>;
};

export default City;
