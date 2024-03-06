import Mission from "./components/Mission";
import Vision from "./components/Vision";

const Government = () => {
  return (
    <div className="container px-3 mx-auto">
      <div className="flex justify-center pt-10">
        <Mission />
        <Vision />
      </div>
      <div className="grid justify-center mt-24 text-center grid-col h-52">
        <div>Mayor here</div>

        <div className="flex">
          <div>official 1</div>
          <div>official 2</div>
          <div>official 3</div>
          <div>official 4</div>
        </div>
      </div>
      <div>Departments</div>
    </div>
  );
};

export default Government;
