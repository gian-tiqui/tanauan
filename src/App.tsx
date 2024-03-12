import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Tourism from "./routes/tourism/Tourism";
import { MouseEventHandler, ReactNode, createContext, useEffect } from "react";
import Lottie from "lottie-react";
import profile from "./assets/profile.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsArticle from "./routes/news-article/NewsArticle";
import News from "./routes/news/News";

import Barangays from "./routes/barangays/Barangays";
import CityOfficials from "./routes/government/city-officials/CityOfficials";
import MissionVision from "./routes/government/mission-vision/MissionVision";
import Departments from "./routes/government/departments/Departments";
import CSDWServices from "./routes/city-transactions/csdw-services/CSDWServices";
import SeniorCitizenIdAndBenefits from "./routes/city-transactions/senior-citizen-id-and-benefits/SeniorCitizenIdAndBenefits";
import PwdIdAndServices from "./routes/city-transactions/pwd-id-and-services/PwdIdAndServices";
import TanauanEServices from "./routes/business/tanauan-e-services/TanauanEServices";
import BidsAndAwards from "./routes/transparency-reports/bids-and-awards/BidsAndAwards";
import Assesors from "./routes/transparency-reports/assesors/Assesors";
import FullDisclosureReport from "./routes/transparency-reports/full-disclosure-report/FullDisclosureReport";
import JobFair from "./routes/careers/job-fair/JobFair";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./routes/home/components/Footer";
import ContextContainer from "./context-container/ContextContainer";
import footerBg from "./assets/footer-bg.png";

interface RouteMapping {
  path: string;
  element: ReactNode;
}

export const PreventContextMenu = createContext<
  MouseEventHandler<HTMLImageElement> | undefined
>(undefined);

function App() {
  const lottie = {
    width: 150,
    height: 150,
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const preventContextMenu: MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
  };

  const routeMaps: RouteMapping[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/barangays",
      element: <Barangays />,
    },
    {
      path: "/tourism",
      element: <Tourism />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/news/:id",
      element: <NewsArticle />,
    },
    {
      path: "/city-officials",
      element: <CityOfficials />,
    },
    {
      path: "/mission-vision",
      element: <MissionVision />,
    },
    {
      path: "/departments",
      element: <Departments />,
    },
    {
      path: "/csdw-services",
      element: <CSDWServices />,
    },
    {
      path: "/senior-citizen-id-and-benefits",
      element: <SeniorCitizenIdAndBenefits />,
    },
    {
      path: "/pwd-id-and-services",
      element: <PwdIdAndServices />,
    },
    {
      path: "/tanauan-e-services",
      element: <TanauanEServices />,
    },
    {
      path: "/bids-and-awards",
      element: <BidsAndAwards />,
    },
    {
      path: "/assesors",
      element: <Assesors />,
    },
    {
      path: "/full-disclosure-report",
      element: <FullDisclosureReport />,
    },
    {
      path: "/job-fair",
      element: <JobFair />,
    },
  ];

  const toastIt = () => {
    toast("hi", { type: "info" });
  };

  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <ContextContainer>
        <PreventContextMenu.Provider value={preventContextMenu}>
          <Router>
            <Navbar />
            <ToastContainer />
            <div className="relative">
              <Routes>
                {routeMaps.map((routeMap, index) => (
                  <Route
                    key={index}
                    path={routeMap.path}
                    element={routeMap.element}
                  />
                ))}
              </Routes>
              <div
                onClick={toastIt}
                className="fixed bottom-2 right-2"
                style={lottie}
              >
                <Lottie animationData={profile} />
              </div>
            </div>
            <Footer />
          </Router>
        </PreventContextMenu.Provider>
      </ContextContainer>
    </div>
  );
}

export default App;
