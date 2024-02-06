import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const linkClass = "mx-5 my-auto text-lg hover:underline";
const linkClass2 = "mx-6 my-auto text-lg hover:underline text-white";

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value);
  };

  return (
    <nav>
      <div className="flex justify-between py-2">
        <div className="flex">
          <img
            src="../../../logo.png"
            style={{ height: "70px", width: "120px" }}
          />
          <h2 className="my-auto text-2xl font-bold">TANAUAN</h2>
        </div>
        <div className="flex justify-between">
          <Link to={"/"} className={linkClass} style={{ color: "#786649" }}>
            HOME
          </Link>
          <Link to={"/city"} className={linkClass} style={{ color: "#786649" }}>
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
            className="w-64 h-10 px-4 border rounded-md my-auto"
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
    </nav>
  );
};

export default Navbar;
