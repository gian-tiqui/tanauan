import { ChangeEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PreventContextMenu } from "../../App";

const linkClass = "mx-5 my-auto text-lg hover:underline text-sm text-white";
const linkClass2 = "mx-5 my-auto text-lg hover:underline text-white text-sm";

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const preventContextMenu = useContext(PreventContextMenu);

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
              onContextMenu={preventContextMenu}
              draggable="false" // Prevent dragging
              alt="Logo"
            />
            <h2 className="my-auto text-2xl">TANAUAN</h2>
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
              className="px-3 my-auto border rounded-md w-52 h-7"
              placeholder="Search..."
              style={{ borderColor: "#023F78" }}
              onChange={handleSearchTextChange}
              value={searchTxt}
            />
          </div>
        </div>
        <div
          className="flex justify-center py-2"
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

      {/* mobile screen */}

      <div className="block sm:block md:hidden lg:hidden">
        <div className="flex justify-between flex-1 py-2">
          <div className="flex items-center flex-1">
            <img src="../../../logo.png" className="w-16 h-13" alt="Logo" />
            <h2 className="text-sm font-bold">TANAUAN</h2>
          </div>
          <div className="flex justify-center">
            <div className="container mx-auto my-auto">
              <input
                type="text"
                className="h-6 max-w-xs px-3 my-auto ml-8 border border-black rounded-md w-28"
                placeholder="Search..."
                onChange={handleSearchTextChange}
                value={searchTxt}
              />
            </div>
          </div>
          <div
            className="flex items-center justify-end flex-1"
            onClick={handleToggleSidebar}
          >
            <img
              onClick={handleToggleSidebar}
              src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
              className="w-10 h-8 px-2 py-1 mr-8 font-bold text-white border border-black rounded"
            ></img>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-y-0 left-0 z-50 w-36 bg-slate-900 md:hidden lg:hidden">
          <div className="flex flex-col justify-center gap-3">
            <div className="flex items-center py-2 bg-white">
              <img src="../../../logo.png" className="w-16 h-13" alt="Logo" />
              <h2 className="text-sm font-bold">TANAUAN</h2>
            </div>
            <div
              className="flex justify-end mt-3"
              onClick={handleToggleSidebar}
            >
              <p className="px-2 mr-4 font-bold text-white border rounded">x</p>
            </div>
            <Link to={"/"} className="mx-5 font-bold text-white text-md">
              Home
            </Link>
            <Link to={"/city"} className="mx-5 font-bold text-white text-md">
              City
            </Link>
            <Link to={"/tourism"} className="mx-5 font-bold text-white text-md">
              Tourism
            </Link>
            <Link to={"/careers"} className="mx-5 font-bold text-white text-md">
              Careers
            </Link>
            <hr className="mx-3 my-2 bg-white" />
            <Link to={"/"} className="mx-5 font-bold text-white text-md">
              Government
            </Link>
            <Link to={"/"} className="mx-5 font-bold text-white text-md">
              City Transactions
            </Link>
            <Link to={"/"} className="mx-5 font-bold text-white text-md">
              Business
            </Link>
            <Link to={"/"} className="mx-5 font-bold text-white text-md">
              Transparency Report
            </Link>
            <Link to={"/"} className="mx-5 font-bold text-white text-md">
              News & Events
            </Link>
            <Link to={"/"} className="mx-5 font-bold text-white text-md">
              Departments
            </Link>
            <Link to={"/"} className="mx-5 font-bold text-white text-md">
              Online Services
            </Link>
          </div>
        </div>
      )}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 md:hidden lg:hidden"
          onClick={handleToggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
