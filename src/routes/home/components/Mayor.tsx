import MayorImage from "./MayorImage";

const Mayor = () => {
  return (
    <div className="relative">
      <div className="flex justify-end my-44">
        <MayorImage />

        <div
          style={{ backgroundColor: "#023F78", borderBottomLeftRadius: 100 }}
          className="flex justify-center text-white w-3/4 h-96"
        >
          <div className="w-full px-40 pl-64">
            <p className="text-start text-2xl mt-24 font-bold">
              "Bilang Ama ng bawat Tanaueno, nais kong pakinggan ang saloobin ng
              ating mga kababayan, kaya ang karatulang ating ilalagay sa ating
              opisina ay 'Tanggapan ng mga Mamamayan ng Lungsod ng Tanauan!'
              Bubuksan natin ang ating tanggapan para sa lahat, walang pinipili
              at walang bahid ng pulitika."
            </p>
            <p className="text-start text-2xl mt-8 font-bold">
              - Nelson “Sonny” Perez Collantes
            </p>
            <p className="text-start text-lg font-bold">
              Mayor of Tanauan City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mayor;
