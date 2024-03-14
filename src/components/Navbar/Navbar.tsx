import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PreventContextMenu } from "../../App";
import { useSpring, animated } from "@react-spring/web";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/tanauan_logo.png";
import { BiExit } from "react-icons/bi";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const preventContextMenu = useContext(PreventContextMenu);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleToggleDropdown = (dropdownId: string) => {
    setDropdownOpen((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const handleCloseDropdown = () => {
    setDropdownOpen(null);
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
    <nav className="bg-white">
      <div className="hidden sm:relative md:relative lg:relative sm:hidden md:block lg:block">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center">
              <div>
                <img
                  src={logo}
                  className="mt-10 mb-5 h-36 w-36"
                  onContextMenu={preventContextMenu}
                  draggable="false"
                  alt="Logo"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-red-700">
              CITY GOVERNMENT OF TANAUAN
            </h2>
            <p className="mb-8 text-center text-md">
              Talisay - Tanauan Rd, Tanauan, 4232 Batangas
            </p>
          </div>
        </div>
        <div className="flex justify-center py-3 bg-red-700">
          <div className="flex justify-between">
            <Link
              to={"/"}
              className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
            >
              HOME
            </Link>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onMouseEnter={() => handleToggleDropdown("cityDropdown")}
                onMouseLeave={handleCloseDropdown}
              >
                THE CITY
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "cityDropdown" && (
                <div
                  data-aos="flip-down"
                  className="absolute z-10 py-2 bg-white rounded-md shadow-md w-44"
                  onMouseEnter={() => handleToggleDropdown("cityDropdown")}
                  onMouseLeave={handleCloseDropdown}
                >
                  <Link
                    to={"/news"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    News & Publication
                  </Link>
                  <Link
                    to={"/barangays"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Barangays
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onMouseEnter={() => handleToggleDropdown("governmentDropdown")}
                onMouseLeave={handleCloseDropdown}
              >
                GOVERNMENT
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "governmentDropdown" && (
                <div
                  data-aos="flip-down"
                  className="absolute z-10 py-2 bg-white rounded-md shadow-md w-44"
                  onMouseEnter={() =>
                    handleToggleDropdown("governmentDropdown")
                  }
                  onMouseLeave={handleCloseDropdown}
                >
                  <Link
                    to={"/mission-vision"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Mission / Vision
                  </Link>
                  <Link
                    to={"/city-officials"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    City Officials
                  </Link>
                  <Link
                    to={"/departments"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Departments
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onMouseEnter={() => handleToggleDropdown("servicesDropdown")}
                onMouseLeave={handleCloseDropdown}
              >
                SERVICES
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "servicesDropdown" && (
                <div
                  data-aos="flip-down"
                  className="absolute z-10 py-2 bg-white rounded-md shadow-md w-60"
                  onMouseEnter={() => handleToggleDropdown("servicesDropdown")}
                  onMouseLeave={handleCloseDropdown}
                >
                  <Link
                    to={"/tanauan-e-services"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    E-Services
                  </Link>
                  <Link
                    to={"/csdw-services"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    CSDW Services
                  </Link>
                  <Link
                    to={"/senior-citizen-id-and-benefits"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Senior Citizen ID and Benefits
                  </Link>
                  <Link
                    to={"/pwd-id-and-services"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    PWD ID and Services
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onMouseEnter={() =>
                  handleToggleDropdown("transparencyReportDropdown")
                }
                onMouseLeave={handleCloseDropdown}
              >
                TRANSPARENCY REPORT
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "transparencyReportDropdown" && (
                <div
                  data-aos="flip-down"
                  className="absolute z-10 py-2 bg-white rounded-md shadow-md w-54"
                  onMouseEnter={() =>
                    handleToggleDropdown("transparencyReportDropdown")
                  }
                  onMouseLeave={handleCloseDropdown}
                >
                  <Link
                    to={"/documents"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Documents
                  </Link>
                  <Link
                    to={"/assesors"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Assesor's
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onMouseEnter={() => handleToggleDropdown("careersDropdown")}
                onMouseLeave={handleCloseDropdown}
              >
                CAREERS
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "careersDropdown" && (
                <div
                  data-aos="flip-down"
                  className="absolute z-10 py-2 bg-white rounded-md shadow-md w-44"
                  onMouseEnter={() => handleToggleDropdown("careersDropdown")}
                  onMouseLeave={handleCloseDropdown}
                >
                  <Link
                    to={"/job-fair"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Job Fair
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onMouseEnter={() => handleToggleDropdown("tourismDropdown")}
                onMouseLeave={handleCloseDropdown}
              >
                TOURISM
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "tourismDropdown" && (
                <div
                  data-aos="flip-down"
                  className="absolute z-10 py-2 bg-white rounded-md shadow-md w-44"
                  onMouseEnter={() => handleToggleDropdown("tourismDropdown")}
                  onMouseLeave={handleCloseDropdown}
                >
                  <Link
                    to={"/history"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    History
                  </Link>
                  <Link
                    to={"/destinations"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Destination
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="block sm:block md:hidden lg:hidden">
        <div className="flex justify-between flex-1 py-2">
          <div className="flex items-center flex-1">
            <img src={logo} className="w-16 h-13" alt="Logo" />
            <h2 className="text-sm font-bold">TANAUAN</h2>
          </div>

          <div
            className="flex items-center justify-end flex-1"
            onClick={handleToggleSidebar}
          >
            <img
              onClick={handleToggleSidebar}
              src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
              className="w-10 h-8 px-2 py-1 mr-8 font-bold text-red-800 border border-black rounded"
            ></img>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <animated.div
          className="fixed inset-y-0 left-0 z-50 bg-white w-52 lg:hidden"
          style={sidebarAnimation}
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="flex items-center py-2 bg-white">
              <img src={logo} className="w-16 h-13" alt="Logo" />
              <h2 className="text-sm font-bold">TANAUAN</h2>
            </div>
            <div
              className="flex justify-end mt-3"
              onClick={handleToggleSidebar}
            >
              <p className="w-auto px-2 mr-4">
                <BiExit className="w-auto h-6 text-red-800 rotate-180" />
              </p>
            </div>
            <Link to={"/"} className="ml-5 font-bold text-red-800 text-md">
              Home
            </Link>
            <div className="relative">
              <button
                className="flex items-center ml-5 font-bold text-red-800 text-md"
                onClick={() => handleToggleDropdown("cityDropdownMobile")}
              >
                City
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "cityDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-44">
                  <Link
                    to={"/news"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    News & Publication
                  </Link>
                  <Link
                    to={"/barangays"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Barangays
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center ml-5 font-bold text-red-800 text-md"
                onClick={() => handleToggleDropdown("governmentDropdownMobile")}
              >
                Government
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "governmentDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-44">
                  <Link
                    to={"/mission-vision"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Mission / Vision
                  </Link>
                  <Link
                    to={"/city-officials"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    City Officials
                  </Link>
                  <Link
                    to={"/departments"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Departments
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center ml-5 font-bold text-red-800 text-md"
                onClick={() => handleToggleDropdown("servicesDropdownMobile")}
              >
                Services
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "servicesDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-44">
                  <Link
                    to={"/tanauan-e-services"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Tanauan E-Services
                  </Link>
                  <Link
                    to={"/csdw-services"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    CSDW Services
                  </Link>
                  <Link
                    to={"/senior-citizen-id-and-benefits"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Senior Citizen ID and Benefits
                  </Link>
                  <Link
                    to={"/pwd-id-and-services"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    PWD ID and Services
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center ml-5 font-bold text-red-800 text-md"
                onClick={() =>
                  handleToggleDropdown("transparencyReportDropdownMobile")
                }
              >
                Transparency Report
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "transparencyReportDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-44">
                  <Link
                    to={"/documents"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Documents
                  </Link>
                  <Link
                    to={"/assesors"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Assesor's
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center ml-5 font-bold text-red-800 text-md"
                onClick={() => handleToggleDropdown("careersDropdownMobile")}
              >
                Careers
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "careersDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-44">
                  <Link
                    to={"/job-fair"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Job Fair
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-red-800 hover:text-yellow-500"
                onClick={() => handleToggleDropdown("tourismDropdownMobile")}
              >
                Tourism
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "tourismDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-44">
                  <Link
                    to={"/history"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    History
                  </Link>
                  <Link
                    to={"/destinations"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Destination
                  </Link>
                </div>
              )}
            </div>
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
