import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container px-4 pt-8 md:px-32">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0">
          <p className="text-2xl font-bold text-white cursor-pointer">
            Destinations in Tanauan
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-x-10">
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
