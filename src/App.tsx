import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
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
import Assesors from "./routes/transparency-reports/assesors/Assesors";
import JobFair from "./routes/careers/job-fair/JobFair";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./routes/home/components/Footer";
import ContextContainer from "./context-container/ContextContainer";
import footerBg from "./assets/footer-bg.png";
import SignIn from "./routes/auth/sign-in/SignIn";
import SignUp from "./routes/auth/sign-up/SignUp";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Destinations from "./routes/tourism/destinations/Destinations";
import History from "./routes/tourism/history/History";
import EmergencyApp from "./routes/emergency-app/EmergencyApp";
import CityOfficials2 from "./routes/government/city-officials/CityOfficials2";
import Documents from "./routes/transparency-reports/documents/Documents";

interface RouteMapping {
  path: string;
  element: ReactNode;
}

export const SetShowFooterContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});

export const SetShowHeaderContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});

export const PreventContextMenu = createContext<
  MouseEventHandler<HTMLImageElement> | undefined
>(undefined);

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
    path: "/destinations",
    element: <Destinations />,
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
    path: "/assesors",
    element: <Assesors />,
  },
  {
    path: "/documents",
    element: <Documents />,
  },
  {
    path: "/job-fair",
    element: <JobFair />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/emergency-application",
    element: <EmergencyApp />,
  },
  {
    path: "/city-officials-2",
    element: <CityOfficials2 />,
  },
];

function App() {
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  useEffect(() => {
    Aos.init();
  }, []);

  const preventContextMenu: MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
  };

  const toastIt = () => {
    toast("hi", { type: "info" });
  };

  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <ContextContainer>
        <SetShowHeaderContext.Provider value={setShowHeader}>
          <SetShowFooterContext.Provider value={setShowFooter}>
            <PreventContextMenu.Provider value={preventContextMenu}>
              <Router>
                <ScrollToTop />
                {showHeader && <Navbar />}
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
                    className="fixed z-10 w-40 h-40 bottom-2 right-2"
                  >
                    <Lottie animationData={profile} />
                  </div>
                </div>

                {showFooter && <Footer />}
              </Router>
            </PreventContextMenu.Provider>
          </SetShowFooterContext.Provider>
        </SetShowHeaderContext.Provider>
      </ContextContainer>
    </div>
  );
}

export default App;
