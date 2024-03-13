import { useContext, useEffect } from "react";
import { SetShowHeaderContext } from "../../../App";
import townBg from "../../../assets/services-bg.png";
import { Link, useNavigate } from "react-router-dom";
import { BiExit } from "react-icons/bi";

const SignIn = () => {
  const setShowHeader = useContext(SetShowHeaderContext);
  const navigate = useNavigate();

  useEffect(() => {
    setShowHeader(false);

    return () => {
      setShowHeader(true);
    };
  }, [setShowHeader]);

  const handleSignUpClicked = () => {
    navigate("/sign-up");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="p-8 bg-center bg-no-repeat bg-cover rounded-lg shadow-lg px-14"
        style={{ backgroundImage: `url(${townBg})` }}
      >
        <div className="flex justify-between">
          <h2 className="mb-4 text-2xl font-semibold">Sign In</h2>
          <Link to={"/"}>
            <BiExit style={{ height: 30, width: 30 }} className="rotate-180" />
          </Link>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-3 py-2 border rounded-lg shadow-sm w-72 focus:outline-none focus:border-blue-700"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="password"
              className="block mb-2 font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <p className="mb-4 text-sm cursor-pointer text-end hover:text-blue-800">
            Forgot password?
          </p>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white transition duration-300 bg-blue-900 rounded-lg hover:bg-blue-800"
          >
            Sign In
          </button>

          <button
            onClick={handleSignUpClicked}
            className="w-full px-4 py-2 mt-2 font-bold text-blue-800 transition duration-300 bg-white border border-blue-800 rounded-lg"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
