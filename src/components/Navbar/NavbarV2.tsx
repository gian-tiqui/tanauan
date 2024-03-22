import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PreventContextMenu } from "../../App";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/tanauan_logo.png";
import { BiExit } from "react-icons/bi";

interface DropDownItem {
  name: string;
  link: string;
}

interface DropdownData {
  id: string;
  items: DropDownItem[];
}

interface NavData {
  name: string;
  link: string | null;
  dropdown: DropdownData[] | null;
}

const navData: NavData[] = [
  {
    name: "HOME",
    link: "/",
    dropdown: null,
  },
  {
    name: "THE CITY",
    link: null,
    dropdown: [
      {
        id: "cityDropdown",
        items: [
          {
            name: "News & Publications",
            link: "/news",
          },
          {
            name: "Barangays",
            link: "/barangays",
          },
        ],
      },
    ],
  },
  {
    name: "GOVERNMENT",
    link: null,
    dropdown: [
      {
        id: "governmentDropDown",
        items: [
          {
            name: "Mission and Vision",
            link: "/mission-vision",
          },
          {
            name: "City Officials",
            link: "/city-officials",
          },
          {
            name: "Departments",
            link: "/departments",
          },
        ],
      },
    ],
  },
  {
    name: "SERVICES",
    link: null,
    dropdown: [
      {
        id: "servicesDropdown",
        items: [
          {
            name: "E-Services",
            link: "/tanauan-e-services",
          },
          {
            name: "Senior Citizen ID and Benefits",
            link: "/senior-citizen-id-and-benefits",
          },
          {
            name: "PWD ID and Services",
            link: "/pwd-id-and-services",
          },
        ],
      },
    ],
  },
  {
    name: "TRANSPARENCY REPORT",
    link: null,
    dropdown: [
      {
        id: "transparencyReportDropdown",
        items: [
          {
            name: "Documents",
            link: "/documents",
          },
          {
            name: "Assesor's",
            link: "/assesors",
          },
        ],
      },
    ],
  },
  {
    name: "TOURISM",
    link: null,
    dropdown: [
      {
        id: "tourismDropdown",
        items: [
          {
            name: "History",
            link: "/history",
          },
          {
            name: "Destination",
            link: "/destinations",
          },
        ],
      },
    ],
  },
];

const NavbarV2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const preventContextMenu = useContext(PreventContextMenu);
  const inputRef = useRef<HTMLInputElement>(null);
  const [currTime, setCurrTime] = useState<string>(
    new Date().toLocaleTimeString()
  );
  const [currDate, setCurrDate] = useState<string>(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(new Date().toLocaleDateString());
    }, 24000);

    return () => clearInterval(interval);
  });

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleToggleDropdown = (dropdownId: string) => {
    setDropdownOpen((prev) => (prev === dropdownId ? null : dropdownId));
  };

  const handleCloseDropdown = () => {
    setDropdownOpen(null);
  };

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

  function formatDate(dateString: string): string {
    const parts = dateString.split("/");

    const date = new Date(
      parseInt(parts[2]),
      parseInt(parts[1]) - 1,
      parseInt(parts[0])
    );

    const monthNames: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;

    return formattedDate;
  }

  return (
    <nav className="bg-white">
      <div className="hidden sm:relative md:relative lg:relative sm:hidden md:block lg:block">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center">
              <div>
                <img
                  src={logo}
                  className="h-24 mt-10 mb-5 w-36"
                  onContextMenu={preventContextMenu}
                  draggable="false"
                  alt="Logo"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-red-700">
              CITY GOVERNMENT OF TANAUAN
            </h2>
            <p className="mb-3 text-center text-md">
              Talisay - Tanauan Rd, Tanauan, 4232 Batangas
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center py-1 bg-red-700">
          <div className="flex justify-between">
            {navData.map((data, index) =>
              data.dropdown === null ? (
                <Link
                  className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                  key={index}
                  to={data.link || "/"}
                >
                  {data.name}
                </Link>
              ) : (
                <div className="relative" key={index}>
                  <button
                    className="flex items-center mx-5 my-auto text-sm font-bold text-white hover:text-yellow-500"
                    onMouseEnter={() =>
                      handleToggleDropdown(data.dropdown![0].id)
                    }
                    onMouseLeave={handleCloseDropdown}
                  >
                    {data.name} <MdOutlineKeyboardArrowDown className="ml-1" />
                  </button>
                  {dropdownOpen === data.dropdown![0].id && (
                    <div
                      data-aos="flip-down"
                      className="absolute z-10 py-2 bg-white rounded-md shadow-md w-52"
                      onMouseEnter={() =>
                        handleToggleDropdown(data.dropdown![0].id)
                      }
                      onMouseLeave={handleCloseDropdown}
                    >
                      {data.dropdown![0].items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={handleCloseDropdown}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
          <div className="h-5 mr-3 border border-white"></div>
          <div className="flex p-2 text-white rounded-md w-72">
            <p className="text-center">
              {formatDate(currDate)} {currTime}
            </p>
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
        <div className="fixed inset-y-0 left-0 z-50 bg-white w-52 lg:hidden">
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
            {navData.map((data, index) =>
              data.dropdown === null ? (
                <Link
                  key={index}
                  to={data.link || "/"}
                  className="ml-5 font-bold text-red-800 text-md"
                >
                  {data.name
                    .toLowerCase()
                    .replace(/\b\w/g, (letter) => letter.toUpperCase())}
                </Link>
              ) : (
                <div key={index} className="relative">
                  <button
                    className="flex items-center ml-5 font-bold text-red-800 text-md"
                    onClick={() =>
                      handleToggleDropdown(data.dropdown![0].id + "Mobile")
                    }
                  >
                    {data.name
                      .toLowerCase()
                      .replace(/\b\w/g, (letter) => letter.toUpperCase())}
                    <MdOutlineKeyboardArrowDown />
                  </button>
                  {dropdownOpen === data.dropdown![0].id + "Mobile" && (
                    <div
                      data-aos="flip-down"
                      className="absolute z-10 py-2 bg-white rounded-md shadow-md w-52"
                      onMouseEnter={() =>
                        handleToggleDropdown(data.dropdown![0].id)
                      }
                      onMouseLeave={handleCloseDropdown}
                    >
                      {data.dropdown![0].items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={handleCloseDropdown}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
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

export default NavbarV2;
