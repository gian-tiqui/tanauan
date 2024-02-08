import { imageURI } from "../../../large-strings-folder/Strings";

const MobileApp = () => {
  return (
    <div className="flex justify-center align-middle mt-32 mb-32 mx-auto">
      <div className="border shadow md:grid md:grid-cols-2 md:gap-4">
        <div className="md:w-72 md:h-auto h-72 bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageURI})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/* Content */}
        <div className="p-4">
          <p className="text-xl font-bold mb-4">
            Tanauan 911 App: Tulong sa Emergencies!
          </p>
          <ul>
            <li>
              <p>
                - Report emergencies: Fire, medical, police, even disasters -
                all in one app.
              </p>
            </li>
            <li>
              <p>
                - Get help fast: Real-time location tracking means responders
                reach you quickly.
              </p>
            </li>
            <li>
              <p>
                - Share photos: Show what's happening with pictures and videos.
              </p>
            </li>
            <li>
              <p>- Stay informed: Get safety updates and weather alerts.</p>
            </li>
          </ul>
          <p className="mt-4">
            Download the Tanauan 911 App (SENYAS) for free on Google Play!
          </p>
          <div className="flex justify-center mt-6">
            <button className="border rounded bg-black text-white px-3 py-1 mr-2">
              Google Play
            </button>
            <button className="border rounded bg-black text-white px-3 py-1">
              Browse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
