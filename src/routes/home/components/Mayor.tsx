import MayorImage from "./MayorImage";

const Mayor = () => {
  return (
    <div className="relative">
      <div className="flex justify-end my-44">
        <MayorImage />

        <div
          style={{ backgroundColor: "#023F78", borderBottomLeftRadius: 100 }}
          className="flex justify-center text-white w-3/4 h-full"
        >
          <div className="w-full">
            <div className="container mx-auto px-40">
              <p className="text-start text-2xl mt-24 font-bold">
                "Bilang Ama ng bawat Tanaueno, nais kong pakinggan ang saloobin
                ng ating mga kababayan, kaya ang karatulang ating ilalagay sa
                ating opisina ay 'Tanggapan ng mga Mamamayan ng Lungsod ng
                Tanauan!' Bubuksan natin ang ating tanggapan para sa lahat,
                walang pinipili at walang bahid ng pulitika."
              </p>
              <p className="text-start text-2xl mt-8 font-bold">
                - Nelson “Sonny” Perez Collantes
              </p>
              <p className="text-start text-md mb-24">Mayor of Tanauan City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mayor;
