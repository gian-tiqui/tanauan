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

  return (
    <div className="w-full">
      <video
        autoPlay
        muted
        loop
        className="w-full h-auto object-cover"
        style={{ height: "508px" }}
      >
        <source src="../../j.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default City;
