import { useParams } from "react-router-dom";

const CityHighlight = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default CityHighlight;
