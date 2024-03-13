import { Link } from "react-router-dom";
import mobileApp from "../../../assets/mobile-app.png";
import sMobileApp from "../../../assets/16.png";
import LogoDivider from "./LogoDivider";

const MobileApp = () => {
  return (
    <>
      <LogoDivider />
      <div className="relative my-20 overflow-hidden">
        <div className="pt-16 pb-80 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                The City of Tanuan's Mobile App is here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                The City of Tanauan's Mobile is now available and ready to use
                for the safety and security of the people of the City.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                          <img
                            src={sMobileApp}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            src={sMobileApp}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            src={sMobileApp}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            src={mobileApp}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            src={sMobileApp}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            src={sMobileApp}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                        <div className="h-64 overflow-hidden rounded-lg w-44">
                          <img
                            src={sMobileApp}
                            alt=""
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/emergency-application"
                  className="inline-block px-8 py-3 font-medium text-center text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-700"
                >
                  View Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileApp;
