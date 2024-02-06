import { imageURI } from "../../../large-strings-folder/Strings";

const buttonClass = "border rounded bg-black text-white px-3 py-1";

const MobileApp = () => {
  return (
    <div>
      <div className="flex justify-center align-middle mt-7">
        <div className="border shadow grid grid-cols-2">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage: imageURI,
              width: "500px",
              height: "250px",
            }}
          ></div>
          <div className="p-4">
            <ul>
              <li>meow</li>
              <li>meow</li>
              <li>meow</li>
              <li>meow</li>
            </ul>
            <div className="flex justify-center">
              <button className={buttonClass}>Google Play</button>
              <button className={buttonClass}>Browse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
