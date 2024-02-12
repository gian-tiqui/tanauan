import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-950">
      <div className="mt-32 md:flex lg:flex">
        <div className="flex-1 pt-7 pl-7">
          <p className="font-bold text-white text-md">STAY CONNECTED</p>

          <div className="flex gap-24 mt-6">
            <ul className="mt-5 text-white text-sm sm:text-base md:text-lg">
              <li className="mb-2">
                <a
                  href="https://www.facebook.com/TanauanCityGovernment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500"
                >
                  Facebook: https://www.facebook.com/TanauanCityGovernment
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="underline hover:text-blue-500">
                  Twitter:
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="underline hover:text-blue-500">
                  Instagram:
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@CityGovernmentofTanauan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500"
                >
                  Youtube: https://www.youtube.com/@CityGovernmentofTanauan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 pt-7 pl-7">
          <p className="font-bold text-white text-md">LINKS</p>
          <div className="flex gap-24 mt-6">
            <ul className="mt-5 text-white sm:text-sm md:text-lg">
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
            <ul className="mt-5 text-white sm:text-sm md:text-lg">
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
      <hr className="mt-12" />
      <div className="flex justify-center">
        <Link to="/" className="my-1 text-sm text-white sm:text-sm md:text-lg">
          Talisay - Tanauan Rd, Tanauan, 4232 Batangas | Maps
        </Link>
      </div>
      <hr />
      <div className="flex justify-center">
        <Link to="/" className="my-3 text-sm text-white sm:text-sm md:text-lg">
          TANAUAN CITY GOVERMENT© 2022 All Rights Reserved
        </Link>
      </div>
    </div>
  );
};

export default Footer;
