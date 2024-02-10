import { useEffect, useState } from "react";

interface Video {
  title: string;
  uri: string;
}

const City = () => {
  const [Video, setVideo] = useState<Video | undefined>(undefined);

  useEffect(() => {
    setVideo(undefined);
  }, []);

  useEffect(() => {
    console.log(Video);
  }, [Video]);

  return <div className="w-full"></div>;
};

export default City;
