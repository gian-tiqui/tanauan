import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PreventContextMenu } from "../../App";
import { useSpring, animated } from "@react-spring/web";

const linkClass = "mx-5 my-auto text-lg hover:underline text-sm text-white";
const linkClass2 = "mx-5 my-auto text-lg hover:underline text-white text-sm";

interface ComponentNavs {
  componentId: string;
  componentTitle: string;
}

const componentIds: ComponentNavs[] = [
  {
    componentId: "#news-carousel",
    componentTitle: "News",
  },
  {
    componentId: "#public-services",
    componentTitle: "Public Services",
  },
  {
    componentId: "#mobile-app",
    componentTitle: "Mobile Application",
  },
  {
    componentId: "#cgtv",
    componentTitle: "CGTV",
  },
  {
    componentId: "#status-updates",
    componentTitle: "Status Updates",
  },
  {
    componentId: "#city-highlights",
    componentTitle: "City Highlights",
  },
];

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const preventContextMenu = useContext(PreventContextMenu);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchClass, setSearchClass] = useState<boolean>(true);

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarAnimation = useSpring({
    transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
  });

  const showSuggestions = () => {
    setShowSuggestion(!showSuggestion);
    setSearchClass(!searchClass);
  };

  const handleMoveTo = (componentId: string) => {
    window.location.href = componentId;
    setShowSuggestion(!showSuggestion);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestion(false);
        setSearchClass(true);
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
        <div className="flex justify-between py-2">
          <div className="flex">
            <img
              src="../../../logo.png"
              style={{ height: "50px", width: "100px" }}
              onContextMenu={preventContextMenu}
              draggable="false"
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
          <div className="pr-5 my-auto" ref={inputRef}>
            <input
              type="text"
              className={
                searchClass
                  ? "h-6 max-w-xs px-3 my-auto border rounded-md"
                  : "h-6 max-w-xs px-3 my-auto border rounded-t-md"
              }
              placeholder="Search..."
              style={{ borderColor: "#023F78" }}
              onChange={handleSearchTextChange}
              value={searchTxt}
              onClick={showSuggestions}
            />

            {showSuggestion && (
              <div className="absolute z-50 flex flex-col border border-black">
                {componentIds.map((obj, index) => (
                  <a
                    className="w-48 px-3 bg-white border-dark"
                    key={index}
                    onClick={() => handleMoveTo(obj.componentId)}
                  >
                    {obj.componentTitle}
                  </a>
                ))}
              </div>
            )}
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
