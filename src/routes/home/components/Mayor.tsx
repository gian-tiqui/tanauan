import MayorImage from "./MayorImage";

const Mayor = () => {
  return (
    <div className="my-5 sm:relative md:relative lg:relative xl:relative sm:my-24 md:my-44 lg:my-44">
      {/* larger screens */}
      <div className="hidden sm:relative md:relative lg:relative sm:hidden md:block lg:block">
        <div className="flex kistof sm:flex sm:justify-end md:flex md:justify-end lg:flex lg:justify-end sm:my-20 md:my-33 my-14">
          <MayorImage />
          <div className="flex w-full h-full text-white bg-blue-900 sm:w-3/4 md:w-3/4 lg:w-3/4 md:rounded-bl-3xl">
            <div className="w-full">
              <div className="container px-3 mx-auto md:pl-40 sm:px-14 lg:px-62">
                <p className="font-bold text-start md:mt-12 sm:mt-5 sm:text-xl md:text-2xl text-s">
                  "Bilang Ama ng bawat Tanaueno, nais kong pakinggan ang
                  saloobin ng ating mga kababayan, kaya ang karatulang ating
                  ilalagay sa ating opisina ay 'Tanggapan ng mga Mamamayan ng
                  Lungsod ng Tanauan!' Bubuksan natin ang ating tanggapan para
                  sa lahat, walang pinipili at walang bahid ng pulitika."
                </p>
                <p className="mt-8 font-bold text-start sm:text-xl md:text-2xl text-s">
                  - Nelson “Sonny” Perez Collantes
                </p>
                <p className="mb-3 text-start text-md sm:mb-12 md:mb-20 sm:text-xs md:text-lg">
                  Mayor of Tanauan City
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile screens */}
      <div className="block sm:block md:hidden lg:hidden">
        <div className="sm:flex sm:justify-center md:flex md:justify-end sm:my-20 md:my-33 mb-14">
          <MayorImage />
          <div className="flex justify-end w-full h-full pt-24 pb-5 text-white bg-blue-900 rounded-t-3xl sm:w-3/4 md:w-3/4 lg:w-3/4 md:rounded-bl-3xl">
            <div className="w-full">
              <div className="container px-3 mx-auto md:pl-40 sm:px-14 lg:px-62">
                <p className="font-bold text-start md:mt-12 sm:mt-5 sm:text-sm md:text-lg text-s">
                  "Bilang Ama ng bawat Tanaueno, nais kong pakinggan ang
                  saloobin ng ating mga kababayan, kaya ang karatulang ating
                  ilalagay sa ating opisina ay 'Tanggapan ng mga Mamamayan ng
                  Lungsod ng Tanauan!' Bubuksan natin ang ating tanggapan para
                  sa lahat, walang pinipili at walang bahid ng pulitika."
                </p>
                <p className="mt-8 font-bold text-start sm:text-sm md:text-2xl text-s">
                  - Nelson “Sonny” Perez Collantes
                </p>
                <p className="mb-3 text-start text-md sm:mb-12 md:mb-24 sm:text-xs md:text-md">
                  Mayor of Tanauan City
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mayor;
