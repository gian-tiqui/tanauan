import { ReactNode } from "react";
import LogoDivider from "../../home/components/LogoDivider";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow-2xl">{children}</div>
  );
};

const MissionVision = () => {
  return (
    <div className="pt-10">
      <LogoDivider />
      <div className="flex flex-col justify-center gap-10 px-6 pb-20 pt-52 lg:flex-row lg:px-20 lg:pt-10">
        <Card>
          <div
            data-aos="fade-up"
            className="py-2 mb-6 bg-gray-200 rounded-t-md"
          >
            <h1 className="text-3xl font-bold text-center lg:text-5xl">
              Mission
            </h1>
          </div>

          <div
            data-aos="fade-up"
            className="px-5 py-2 bg-gray-200 rounded-b-md h-96"
          >
            <p className="mb-6 text-lg text-center lg:text-left">
              Steered by a transparent and collective governance, it is the
              Mission of the City of Tanauan to improve the quality of life of
              our people through:
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
          </div>
        </Card>
        <Card>
          <div data-aos="fade-up" className="text-center">
            <div className="py-2 mb-6 bg-gray-200 rounded-t-md">
              <h1 className="text-3xl font-bold lg:text-5xl">Vision</h1>
            </div>
            <div className="px-5 py-2 bg-gray-200 rounded-b-md h-96">
              <p className="mb-6 text-lg py-auto">
                TANAUAN CITY 2025: A Progressive and Ecologically Balanced City
              </p>
            </div>
          </div>
        </Card>
      </div>
      <LogoDivider />
    </div>
  );
};

export default MissionVision;
