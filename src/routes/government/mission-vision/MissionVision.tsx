import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-2xl">{children}</div>
  );
};

const MissionVision = () => {
  return (
    <div className="flex flex-col justify-center h-screen gap-10 px-6 pb-20 pt-52 lg:flex-row lg:px-20 lg:pt-20">
      <Card>
        <h1 className="mb-6 text-3xl font-bold text-center lg:text-5xl">
          Mission
        </h1>
        <p className="mb-6 text-lg text-center lg:text-left">
          Steered by a transparent and collective governance, it is the Mission
          of the City of Tanauan to improve the quality of life of our people
          through:
        </p>
        <ul className="mb-6 text-lg text-center lg:text-left">
          <li>
            1. Adequate, quality and accessible health and social services
          </li>
          <li>2. Quality education and academic excellence</li>
          <li>
            3. Livelihood and job opportunities for all with strengthened
            cooperative
          </li>
          <li>
            4. Sustainable economy with advanced infrastructure facilities
          </li>
          <li>5. Protected environment in a vibrant tourism industry</li>
          <li>
            6. Youth and sports development and enriched culture, arts and
            heritage
          </li>
          <li>
            7. Safe, peaceful, gender-responsive and disaster-resilient
            community
          </li>
        </ul>
      </Card>
      <Card>
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-bold lg:text-5xl">Vision</h1>
          <p className="mb-6 text-lg">
            TANAUAN CITY 2025: A Progressive and Ecologically Balanced City
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MissionVision;
