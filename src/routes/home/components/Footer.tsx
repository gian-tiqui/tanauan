import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#031525" }}>
      <div className="mt-32 flex">
        <div className="flex-1 pt-7 pl-7">
          <p className="text-md text-white font-bold">STAY CONNECTED</p>
        </div>
        <div className="flex-1 pt-7">
          <p className="text-md text-white font-bold">LINKS</p>
          <div className="flex gap-24 mt-6">
            <ul className="text-white mt-5">
              <li>
                <Link to="/">Goverment</Link>
              </li>
              <li>
                <Link to="/">City Transactions</Link>
              </li>
              <li>
                <Link to="/">Business</Link>
              </li>
              <li>
                <Link to="/">Transparency Report</Link>
              </li>
              <li>
                <Link to="/">News & Events</Link>
              </li>
              <li>
                <Link to="/">Departments</Link>
              </li>
            </ul>
            <ul className="text-white mt-5">
              <li>
                <Link to="/">Departments</Link>
              </li>
              <li>
                <Link to="/">Online Services</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Tourism</Link>
              </li>
              <li>
                <Link to="/">The City</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Divider sx={{ backgroundColor: "white", marginTop: 4 }} />
      <div className="flex justify-center">
        <Link to="/" className="text-white my-1">
          Talisay - Tanauan Rd, Tanauan, 4232 Batangas | Maps
        </Link>
      </div>
      <Divider sx={{ backgroundColor: "white", height: "1px" }} />
      <div className="flex justify-center">
        <Link to="/" className="text-white my-3">
          TANAUAN CITY GOVERMENT© 2022 All Rights Reserved
        </Link>
      </div>
    </div>
  );
};

export default Footer;
