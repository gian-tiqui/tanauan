import MayorImage from "./MayorImage";

const Mayor = () => {
  return (
    <div className="xs:container sm:relative md:relative lg:relative xl:relative">
      <div className="md:flex md:justify-end sm:my-20 md:my-33 my-14">
        <MayorImage />

        <div
          style={{ backgroundColor: "#023F78" }}
          className="flex text-white w-3/4 h-full md:rounded-bl-3xl pb-5"
        >
          <div className="w-full">
            <div className="container mx-auto md:px-20 sm:px-14 lg:px-62 px-3">
              <p className="text-start md:mt-24 sm:mt-12 font-bold sm:text-sm md:text-lg text-s">
                "Bilang Ama ng bawat Tanaueno, nais kong pakinggan ang saloobin
                ng ating mga kababayan, kaya ang karatulang ating ilalagay sa
                ating opisina ay 'Tanggapan ng mga Mamamayan ng Lungsod ng
                Tanauan!' Bubuksan natin ang ating tanggapan para sa lahat,
                walang pinipili at walang bahid ng pulitika."
              </p>
              <p className="text-start mt-8 font-bold sm:text-sm md:text-2xl text-s">
                - Nelson “Sonny” Perez Collantes
              </p>
              <p className="text-start text-md sm:mb-12 md:mb-24 sm:text-xs md:text-md mb-3">
                Mayor of Tanauan City
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mayor;
