import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const linkClass = "mx-5 my-auto text-lg hover:underline text-sm text-white";
const linkClass2 = "mx-5 my-auto text-lg hover:underline text-white text-sm";

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav>
      <div className="hidden sm:relative md:relative lg:relative sm:hidden md:block lg:block">
        <div className="flex justify-between py-2">
          <div className="flex">
            <img
              src="../../../logo.png"
              style={{ height: "50px", width: "100px" }}
            />
            <h2 className="text-2xl my-auto">TANAUAN</h2>
          </div>
          <div className="flex justify-between">
            <Link to={"/"} className={linkClass} style={{ color: "#786649" }}>
              HOME
            </Link>
            <Link
              to={"/city"}
              className={linkClass}
              style={{ color: "#786649" }}
            >
              THE CITY
            </Link>
            <Link
              to={"/tourism"}
              className={linkClass}
              style={{ color: "#786649" }}
            >
              TOURISM
            </Link>
            <Link
              to={"/careers"}
              className={linkClass}
              style={{ color: "#786649" }}
            >
              CAREERS
            </Link>
          </div>
          <div className="flex pr-5">
            <input
              type="text"
              className="w-52 h-7 px-3 border rounded-md my-auto"
              placeholder="Search..."
              style={{ borderColor: "#023F78" }}
              onChange={handleSearchTextChange}
              value={searchTxt}
            />
          </div>
        </div>
        <div
          className="py-2 flex justify-center"
          style={{ backgroundColor: "#023F78" }}
        >
          <div className="flex justify-between">
            <Link to={"/"} className={linkClass2}>
              Government
            </Link>
            <Link to={"/"} className={linkClass2}>
              City Transactions
            </Link>
            <Link to={"/"} className={linkClass2}>
              Business
            </Link>
            <Link to={"/"} className={linkClass2}>
              Transparency Report
            </Link>
            <Link to={"/"} className={linkClass2}>
              News & Events
            </Link>
            <Link to={"/"} className={linkClass2}>
              Departments
            </Link>
            <Link to={"/"} className={linkClass2}>
              Online Services
            </Link>
          </div>
        </div>
      </div>

      <div className="block sm:block md:hidden lg:hidden">
        <div className="flex flex-1 justify-between py-2">
          <div className="flex flex-1 items-center">
            <img src="../../../logo.png" className="w-16 h-13" alt="Logo" />
            <h2 className="text-sm font-bold">TANAUAN</h2>
          </div>
          <div className="flex justify-center">
            <div className="container mx-auto my-auto">
              <input
                type="text"
                className="ml-8 w-28 max-w-xs h-6 px-3 border rounded-md my-auto"
                placeholder="Search..."
                style={{ borderColor: "#023F78" }}
                onChange={handleSearchTextChange}
                value={searchTxt}
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
              onClick={handleToggleSidebar}
              className="w-10 h-8 text-white font-bold py-1 px-2 rounded mr-3 border border-black"
            ></img>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-y-0 left-0 z-50 w-36 bg-slate-900 md:hidden lg:hidden">
          <div className="flex flex-col justify-center gap-3">
            <div className="flex items-center bg-white py-2">
              <img src="../../../logo.png" className="w-16 h-13" alt="Logo" />
              <h2 className="text-sm font-bold">TANAUAN</h2>
            </div>
            <div
              className="flex justify-end mt-3"
              onClick={handleToggleSidebar}
            >
              <p className="text-white font-bold mr-4 border px-2 rounded">x</p>
            </div>
            <Link to={"/"} className="text-md mx-5 font-bold text-white">
              Home
            </Link>
            <Link to={"/city"} className="text-md mx-5 font-bold text-white">
              City
            </Link>
            <Link to={"/tourism"} className="text-md mx-5 font-bold text-white">
              Tourism
            </Link>
            <Link to={"/careers"} className="text-md mx-5 font-bold text-white">
              Careers
            </Link>
            <hr className="bg-white my-2 mx-3" />
            <Link to={"/"} className="text-md mx-5 font-bold text-white">
              Government
            </Link>
            <Link to={"/"} className="text-md mx-5 font-bold text-white">
              City Transactions
            </Link>
            <Link to={"/"} className="text-md mx-5 font-bold text-white">
              Business
            </Link>
            <Link to={"/"} className="text-md mx-5 font-bold text-white">
              Transparency Report
            </Link>
            <Link to={"/"} className="text-md mx-5 font-bold text-white">
              News & Events
            </Link>
            <Link to={"/"} className="text-md mx-5 font-bold text-white">
              Departments
            </Link>
            <Link to={"/"} className="text-md mx-5 font-bold text-white">
              Online Services
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
