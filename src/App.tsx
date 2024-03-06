import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Tourism from "./routes/tourism/Tourism";
import {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import Lottie from "lottie-react";
import profile from "./assets/profile.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsArticle from "./routes/news-article/NewsArticle";
import News from "./routes/news/News";
import { News as NewsInterface } from "./routes/home/components/NewsCarousel";
import { City as CityInterface } from "./routes/home/components/CityHighlights";
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

interface RouteMapping {
  path: string;
  element: ReactNode;
}

export const PreventContextMenu = createContext<
  MouseEventHandler<HTMLImageElement> | undefined
>(undefined);

export const NewsContext = createContext<NewsInterface[]>([]);
export const SetNewsContext = createContext<
  Dispatch<SetStateAction<NewsInterface[]>>
>(() => {});

export const CityContext = createContext<CityInterface[]>([]);
export const SetCityContext = createContext<
  Dispatch<SetStateAction<CityInterface[]>>
>(() => {});

function App() {
  const [news, setNews] = useState<NewsInterface[]>([]);
  const [cities, setCities] = useState<CityInterface[]>([]);

  const lottie = {
    width: 150,
    height: 150,
  };

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
    <>
      <SetCityContext.Provider value={setCities}>
        <CityContext.Provider value={cities}>
          <SetNewsContext.Provider value={setNews}>
            <NewsContext.Provider value={news}>
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
                </Router>
              </PreventContextMenu.Provider>
            </NewsContext.Provider>
          </SetNewsContext.Provider>
        </CityContext.Provider>
      </SetCityContext.Provider>
    </>
  );
}

export default App;
