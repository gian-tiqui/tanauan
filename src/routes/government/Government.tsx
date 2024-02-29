import MissionVision from "./mission-vision/MissionVision";

const Government = () => {
  return (
    <div className="container px-3 mx-auto">
      <div className="flex pt-10">
        <MissionVision />
      </div>
      <div className="grid justify-center mt-24 text-center grid-col h-52">
        <div>dis is a swiper below oke</div>

        <div className="flex">
          <div>official 1</div>
          <div>official 2</div>
          <div>official 3</div>
          <div>official 4</div>
        </div>
      </div>
    </div>
  );
};

export default Government;
