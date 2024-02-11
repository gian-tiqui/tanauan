import MayorImage from "./MayorImage";

const Mayor = () => {
  return (
    <div className="xs:container sm:relative md:relative lg:relative xl:relative">
      <div className="sm:flex sm:justify-center md:flex md:justify-end sm:my-20 md:my-33 my-14">
        <MayorImage />
        <div className="flex text-white w-full sm:w-3/4 md:w-3/4 lg:w-3/4 h-full md:rounded-bl-3xl pb-5 bg-blue-900">
          <div className="w-full">
            <div className="container mx-auto md:pl-40 sm:px-14 lg:px-62 px-3">
              <p className="text-start md:mt-12 sm:mt-5 font-bold sm:text-sm md:text-lg text-s">
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
