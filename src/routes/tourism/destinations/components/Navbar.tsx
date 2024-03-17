import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container px-32 pt-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-white cursor-pointer">
            Destinations in Tanauan
          </p>
        </div>
        <div className="flex items-center justify-between gap-x-10">
          <Link to={"/"} className="text-white cursor-pointer">
            Home
          </Link>
          <Link to={"/news"} className="text-white cursor-pointer">
            News
          </Link>
          <Link to={"/services"} className="text-white cursor-pointer">
            Services
          </Link>
          <Link to={"/documents"} className="text-white cursor-pointer">
            Documents
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
