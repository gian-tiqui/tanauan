import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PreventContextMenu } from "../../App";
import { useSpring, animated } from "@react-spring/web";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const preventContextMenu = useContext(PreventContextMenu);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value);
  };

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
            <Link
              to={"/"}
              className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
            >
              HOME
            </Link>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onClick={() => handleToggleDropdown("cityDropdown")}
              >
                THE CITY
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "cityDropdown" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/news"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    News
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onClick={() => handleToggleDropdown("governmentDropdown")}
              >
                GOVERNMENT
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "governmentDropdown" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onClick={() => handleToggleDropdown("cityTransactionsDropdown")}
              >
                CITY TRANSACTIONS
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "cityTransactionsDropdown" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onClick={() => handleToggleDropdown("businessDropdown")}
              >
                BUSINESS
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "businessDropdown" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onClick={() =>
                  handleToggleDropdown("transparencyReportDropdown")
                }
              >
                TRANSPARENCY REPORT
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "transparencyReportDropdown" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                onClick={() => handleToggleDropdown("careersDropdown")}
              >
                CAREERS
                <MdOutlineKeyboardArrowDown className="ml-1" />
              </button>
              {dropdownOpen === "careersDropdown" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <Link
              to={"/tourism"}
              className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
            >
              TOURISM
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
            <Link to={"/"} className="ml-5 font-bold text-white text-md">
              Home
            </Link>
            <div className="relative">
              <button
                className="ml-5 font-bold text-white text-md"
                onClick={() => handleToggleDropdown("cityDropdownMobile")}
              >
                City
              </button>
              {dropdownOpen === "cityDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/news"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    News
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="ml-5 font-bold text-white text-md"
                onClick={() => handleToggleDropdown("governmentDropdownMobile")}
              >
                Government
              </button>
              {dropdownOpen === "governmentDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="ml-5 font-bold text-white text-md"
                onClick={() =>
                  handleToggleDropdown("cityTransactionsDropdownMobile")
                }
              >
                City Transactions
              </button>
              {dropdownOpen === "cityTransactionsDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="ml-5 font-bold text-white text-md"
                onClick={() => handleToggleDropdown("businessDropdownMobile")}
              >
                Business
              </button>
              {dropdownOpen === "businessDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="font-bold text-white text-md"
                onClick={() =>
                  handleToggleDropdown("transparencyReportDropdownMobile")
                }
              >
                Transparency Report
              </button>
              {dropdownOpen === "transparencyReportDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="ml-5 font-bold text-white text-md"
                onClick={() => handleToggleDropdown("careersDropdownMobile")}
              >
                Careers
              </button>
              {dropdownOpen === "careersDropdownMobile" && (
                <div className="absolute z-10 py-2 mt-2 bg-white rounded-md shadow-md w-36">
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 1
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={handleCloseDropdown}
                  >
                    Item 2
                  </Link>
                </div>
              )}
            </div>
            <Link to={"/tourism"} className="ml-5 font-bold text-white text-md">
              Tourism
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
