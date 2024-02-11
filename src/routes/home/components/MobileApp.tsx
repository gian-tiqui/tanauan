import { imageURI } from "../../../large-strings-folder/Strings";

const MobileApp = () => {
  return (
    <div className="flex flex-col px-3 my-12 sm:my-16 md:px-0 lg:px-0 sm:px-0 lg:my-32">
      <div className="mx-auto">
        <h1 className="mb-10 font-bold text-md text-start text-slate-900 sm:text-lg md:text-xl lg:text-3xl">
          Emergency Alert System and Mobile Application
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="overflow-hidden bg-white border rounded-lg shadow-lg md:grid md:grid-cols-2">
          <div
            className="relative bg-center bg-cover md:w-full md:h-auto h-60 sm:h-72"
            style={{
              backgroundImage: imageURI,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex flex-col justify-between p-4 md:p-6">
            <div>
              <p className="mb-4 text-lg font-bold md:text-xl">
                Tanauan 911 App: Tulong sa Emergencies!
              </p>
              <ul className="text-sm md:text-base">
                <li className="mb-2">
                  <p>
                    - Report emergencies: Fire, medical, police, even disasters
                    - all in one app.
                  </p>
                </li>
                <li className="mb-2">
                  <p>
                    - Get help fast: Real-time location tracking means
                    responders reach you quickly.
                  </p>
                </li>
                <li className="mb-2">
                  <p>
                    - Share photos: Show what's happening with pictures and
                    videos.
                  </p>
                </li>
                <li className="mb-2">
                  <p>- Stay informed: Get safety updates and weather alerts.</p>
                </li>
              </ul>
              <p className="mt-4 text-sm md:text-base">
                Download the Tanauan 911 App (SENYAS) for free on Google Play!
              </p>
            </div>
            <div className="flex flex-col justify-center mt-6 sm:flex-row">
              <a
                href="https://play.google.com/store/games?hl=en&gl=US"
                className="flex items-center justify-center px-3 py-1 mb-2 text-xs text-white bg-black border rounded sm:text-sm md:text-md sm:mr-2 sm:mb-0"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6124/6124997.png"
                  alt="Google Play Icon"
                  className="w-6 h-6 mr-2"
                />
                Google Play
              </a>
              <a
                href="https://tanauancity.gov.ph/tanauan-911-app/"
                className="flex items-center justify-center px-3 py-1 mb-2 text-xs text-white bg-black border rounded sm:text-sm md:text-md sm:mb-0"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/888/888846.png"
                  alt="Browse Icon"
                  className="w-6 h-6 mr-2"
                />
                Browse
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
