import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PreventContextMenu } from "../../App";
import { useSpring, animated } from "@react-spring/web";

const linkClass2 =
  "mx-5 my-auto text-lg hover:underline text-white font-bold text-sm";

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const preventContextMenu = useContext(PreventContextMenu);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarAnimation = useSpring({
    transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        console.log("?");
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="hidden sm:relative md:relative lg:relative sm:hidden md:block lg:block">
        <div className="flex justify-center py-2 mt-16">
          <div>
            <img
              src="../../../logo.png"
              className="h-24 mx-auto w-36"
              onContextMenu={preventContextMenu}
              draggable="false"
              alt="Logo"
            />
            <h2 className="my-auto text-2xl font-bold text-center">
              CITY GOVERNMENT OF TANAUAN
            </h2>
            <p className="my-auto text-center text-md">
              Talisay - Tanauan Rd, Tanauan, 4232 Batangas
            </p>
          </div>
        </div>
        <div className="flex justify-center py-3 bg-blue-900">
          <div className="flex justify-between">
            <Link to={"/"} className={linkClass2}>
              HOME
            </Link>
            <Link to={"/city"} className={linkClass2}>
              THE CITY
            </Link>
            <Link to={"/tourism"} className={linkClass2}>
              TOURISM
            </Link>
            <Link to={"/careers"} className={linkClass2}>
              CAREERS
            </Link>
            <Link to={"/government"} className={linkClass2}>
              GOVERNMENT
            </Link>
            <Link to={"/city-transactions"} className={linkClass2}>
              CITY TRANSACTIONS
            </Link>
            <Link to={"/business"} className={linkClass2}>
              BUSINESS
            </Link>
            <Link to={"/transparency-reports"} className={linkClass2}>
              TRANSPARENCY REPORT
            </Link>
            <Link to={"/departments"} className={linkClass2}>
              DEPARTMENT
            </Link>
            <Link to={"/online-services"} className={linkClass2}>
              ONLINE SERVICES
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
        <animated.div
          className="fixed inset-y-0 left-0 z-50 w-36 bg-slate-900 md:hidden lg:hidden"
          style={sidebarAnimation}
        >
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
            <Link
              to={"/government"}
              className="mx-5 font-bold text-white text-md"
            >
              Government
            </Link>
            <Link
              to={"/city-transactions"}
              className="mx-5 font-bold text-white text-md"
            >
              City Transactions
            </Link>
            <Link
              to={"/business"}
              className="mx-5 font-bold text-white text-md"
            >
              Business
            </Link>
            <Link
              to={"/transparency-reports"}
              className="mx-5 font-bold text-white text-md"
            >
              Transparency Report
            </Link>
            <Link
              to={"/departments"}
              className="mx-5 font-bold text-white text-md"
            >
              Departments
            </Link>
            <Link
              to={"/online-services"}
              className="mx-5 font-bold text-white text-md"
            >
              Online Services
            </Link>
          </div>
        </animated.div>
      )}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 w-screen h-screen bg-black opacity-70"
          onClick={handleToggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
