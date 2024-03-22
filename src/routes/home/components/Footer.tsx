import { Link } from "react-router-dom";
import footerBg from "../../../assets/footer-bg.png";

const Footer = () => {
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="h-8 bg-red-700"></div>
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="flex-1 pt-7 pl-7">
          <p className="font-bold text-black text-md">STAY CONNECTED</p>
          <div className="flex gap-4 mt-6 sm:gap-6 md:gap-8">
            <ul className="flex">
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/TanauanCityGovernment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                    alt="Facebook"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="underline hover:text-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
                    alt="Twitter"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  />
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="underline hover:text-blue-500">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                    alt="Instagram"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
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
                    alt="YouTube"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 pt-7 pl-7">
          <p className="font-bold text-black text-md">LINKS</p>
          <div className="flex gap-4 mt-6 sm:gap-6 md:gap-8">
            <ul className="flex flex-col">
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
            <ul className="flex flex-col">
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
                <Link to="/documents" className="hover:text-red-800">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-6 sm:mt-8 md:mt-10" />
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
