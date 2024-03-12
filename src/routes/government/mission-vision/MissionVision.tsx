import servicesBg from "../../../assets/services-bg.png";

const MissionVision = () => {
  return (
    <>
      <div className="grid h-full gap-20 pt-20 pb-20">
        <div
          className="gap-20 p-10 mx-auto bg-center bg-no-repeat bg-cover rounded-md shadow-xl"
          style={{
            backgroundImage: `url(${servicesBg})`,
          }}
        >
          <div className="max-w-lg mx-auto">
            <p className="text-3xl font-extrabold text-center">MISSION</p>
            <p className="mt-10 text-lg font-bold">
              Steered by a transparent and collective governance, it is the
              Mission of the City of Tanauan to improve the quality of life of
              our people through:
            </p>
            <ul className="text-lg font-bold">
              <li>
                1. Adequate, quality and accessible health and social services;
              </li>
              <li>2. Quality education and academic excellence;</li>
              <li>
                3. Livelihood and job opportunities for all with strengthened
                cooperative;
              </li>
              <li>
                4. Sustainable economy with advanced infrastructure facilities;
              </li>
              <li>5. Protected environment in a vibrant tourism industry;</li>
              <li>
                6. Youth and sports development and enriched culture, arts and
                heritage; and
              </li>
              <li>
                7. Safe, peaceful, gender-responsive and disaster-resilient
                community.
              </li>
            </ul>
          </div>
          <div className="max-w-lg mx-auto mt-20 mb-20">
            <p className="text-3xl font-extrabold text-center">VISION</p>
            <p className="mt-10 text-lg font-bold">
              TANAUAN CITY 2025: A Progressive and Ecologically Balanced City
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
