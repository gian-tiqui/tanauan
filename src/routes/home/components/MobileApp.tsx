import { imageURI } from "../../../large-strings-folder/Strings";

const MobileApp = () => {
  return (
    <div>
      <div className="flex justify-center align-middle mt-32">
        <div className="border shadow grid grid-cols-2">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: imageURI,
              width: "610px",
              height: "300px",
            }}
          ></div>
          <div className="p-4">
            <p>Tanauan 911 App: Tulong sa Emergencies!</p>
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
                  - Share photos: Show what's happening with pictures and
                  videos.
                </p>
              </li>
              <li>
                <p>- Stay informed: Get safety updates and weather alerts.</p>
              </li>
            </ul>
            <p>
              Download the Tanauan 911 App (SENYAS) for free on Google Play!
            </p>
            <div className="flex justify-center pt-20">
              <button className="border rounded bg-black text-white px-3 py-1">
                Google Play
              </button>
              <button className="border rounded bg-black text-white px-3 py-1">
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const l = 1;

export default MobileApp;
