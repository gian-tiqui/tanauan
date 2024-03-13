import { Link } from "react-router-dom";
import PublicServices from "../../home/components/PublicServices";

const TanauanEServices = () => {
  return (
    <div className="mb-20">
      <h1 className="mx-auto mt-24 text-4xl font-extrabold text-center text-red-800 max-w-96">
        The City's Modern Public Service
      </h1>

      <p className="mx-auto mt-5 font-bold text-center text-red-800 text-md max-w-96">
        The Official eService Portal of Tanauan City, created to provide
        citizens of Tanauan City a convenient one-stop solution platform for
        online services and information.
      </p>

      <div className="grid justify-center gap-2 mt-7">
        <Link
          to={"/sign-in"}
          className="px-10 py-2 text-sm font-bold text-white bg-blue-800 rounded-md"
        >
          Sign in
        </Link>
        <Link
          to={"/sign-up"}
          className="px-10 py-2 text-sm font-bold text-blue-800 bg-white border border-blue-800 rounded-md"
        >
          Sign up
        </Link>
      </div>

      <PublicServices showText={false} />
    </div>
  );
};

export default TanauanEServices;
