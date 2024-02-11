import { imageURI } from "../../../large-strings-folder/Strings";

const MobileApp = () => {
  return (
    <div className="flex flex-col my-8 sm:my-16 lg:my-32">
      <div className="mx-auto">
        <h1 className="mb-10 text-start font-bold text-slate-900 text-sm sm:text-lg md:text-xl lg:text-2xl">
          Emergency Alert System and Mobile Application
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="border shadow-lg md:grid md:grid-cols-2 bg-white rounded-lg overflow-hidden">
          <div
            className="md:w-full md:h-auto h-60 sm:h-72 bg-cover bg-center relative"
            style={{
              backgroundImage: imageURI,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="p-4 md:p-6 flex flex-col justify-between">
            <div>
              <p className="text-lg md:text-xl font-bold mb-4">
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
            <div className="flex flex-col sm:flex-row justify-center mt-6">
              <a
                href="#"
                className="border rounded bg-black text-xs sm:text-sm md:text-md text-white px-3 py-1 mb-2 sm:mr-2 sm:mb-0 flex items-center justify-center"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6124/6124997.png"
                  alt="Google Play Icon"
                  className="w-6 h-6 mr-2"
                />
                Google Play
              </a>
              <a
                href="#"
                className="border rounded bg-black text-xs sm:text-sm md:text-md text-white px-3 py-1 mb-2 sm:mb-0 flex items-center justify-center"
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
