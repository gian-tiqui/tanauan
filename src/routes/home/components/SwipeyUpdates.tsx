import { IdkCircleProps } from "./StatusUpdates";

interface StatusProps {
  bussin: IdkCircleProps;
  household: IdkCircleProps;
  population: IdkCircleProps;
  landArea: IdkCircleProps;
}

const NonSwipeUpdates: React.FC<StatusProps> = ({
  bussin,
  household,
  population,
  landArea,
}) => {
  const data = [bussin, household, population, landArea];

  return <div></div>;
};

export default NonSwipeUpdates;
