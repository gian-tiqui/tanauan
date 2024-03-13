import { Link } from "react-router-dom";
import footerBg from "../../../assets/footer-bg.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="h-8 bg-red-700 "></div>
      <div className="md:flex lg:flex">
        <div className="flex-1 pt-7 pl-7">
          <p className="font-bold text-black text-md">STAY CONNECTED</p>
          <div className="flex gap-24 mt-6">
            <ul className="mt-5 text-sm text-white sm:text-base md:text-lg">
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/TanauanCityGovernment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                    style={{ height: 50, width: 50 }}
                  />
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="underline hover:text-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
                    style={{ height: 50, width: 50 }}
                  />
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="underline hover:text-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                    style={{ height: 50, width: 50 }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@CityGovernmentofTanauan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png"
                    style={{ height: 50, width: 50 }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 pt-7 pl-7">
          <p className="font-bold text-black text-md">LINKS</p>
          <div className="flex gap-24 mt-6">
            <ul className="mt-5 text-black sm:text-sm md:text-lg">
              <li>
                <Link to="/" className="hover:text-red-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/barangays" className="hover:text-red-800">
                  Barangays
                </Link>
              </li>
              <li>
                <Link to="/tanauan-e-services" className="hover:text-red-800">
                  Tanauan E-Services
                </Link>
              </li>
              <li>
                <Link to="/csdw-services" className="hover:text-red-800">
                  CSDW Services
                </Link>
              </li>
              <li>
                <Link to="/pwd-id-and-services" className="hover:text-red-800">
                  PWD ID and Services
                </Link>
              </li>
              <li>
                <Link
                  to="/senior-citizen-id-and-benefits"
                  className="hover:text-red-800"
                >
                  Senior Citizen ID and Benefits
                </Link>
              </li>
              <li>
                <Link to="/city-officials" className="hover:text-red-800">
                  City Officials
                </Link>
              </li>
            </ul>
            <ul className="mt-5 text-black sm:text-sm md:text-lg">
              <li>
                <Link to="/departments" className="hover:text-red-800">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/mission-vision" className="hover:text-red-800">
                  Mission Vision
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-red-800">
                  News
                </Link>
              </li>
              <li>
                <Link to="/assesors" className="hover:text-red-800">
                  Assesors
                </Link>
              </li>
              <li>
                <Link to="/bids-and-awards" className="hover:text-red-800">
                  Bids and Awards
                </Link>
              </li>
              <li>
                <Link
                  to="/full-disclosure-report"
                  className="hover:text-red-800"
                >
                  Full Disclosure Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-12" />
      <div className="flex justify-center bg-red-700">
        <Link to="/" className="my-1 text-sm text-white sm:text-sm md:text-lg">
          Talisay - Tanauan Rd, Tanauan, 4232 Batangas
        </Link>
      </div>
      <hr />
      <div className="flex justify-center">
        <Link to="/" className="my-3 text-sm text-black sm:text-sm md:text-lg">
          CITY INFORMATION OFFICE © 2022 All Rights Reserved
        </Link>
      </div>
    </div>
  );
};

export default Footer;
