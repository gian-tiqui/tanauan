import { useContext, useEffect, useState } from "react";
import { SetShowFooterContext, SetShowHeaderContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../../assets/page-fix.json";
import { BiExit } from "react-icons/bi";

const SignUp = () => {
  const setShowHeader = useContext(SetShowHeaderContext);
  const setShowFooter = useContext(SetShowFooterContext);
  const [countdown, setCountdown] = useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    setShowHeader(false);
    setShowFooter(false);

    return () => {
      setShowHeader(true);
      setShowFooter(true);
    };
  }, [setShowHeader, setShowFooter]);

  const navigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }

    setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
  }, [countdown, navigate]);

  return (
    <>
      <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
        <div className="text-center">
          <Lottie
            animationData={animation}
            className="w-40 h-40 mx-auto text-center"
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not available
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, Gian is busy right now 😔
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <p>Redirecting you back to home page in {countdown}...</p>
          </div>
          <div
            onClick={navigateHome}
            className="flex items-center justify-center w-32 h-8 gap-2 mx-auto mt-5 text-white bg-red-800 rounded-md cursor-pointer hover:bg-red-700"
          >
            <BiExit className="w-5 h-5 rotate-180" />
            <p>Exit</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
