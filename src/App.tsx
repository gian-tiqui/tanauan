import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Tourism from "./routes/tourism/Tourism";
import Careers from "./routes/careers/Careers";
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
import Government from "./routes/government/Government";
import CityTransactions from "./routes/city-transactions/CityTransactions";
import Business from "./routes/business/Business";
import TransparencyReports from "./routes/transparency-reports/TransparencyReports";
import Departments from "./routes/departments/Departments";
import OnlineServices from "./routes/online-services/OnlineServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsArticle from "./routes/news-article/NewsArticle";
import News from "./routes/news/News";
import { News as NewsInterface } from "./routes/home/components/NewsCarousel";
import { City as CityInterface } from "./routes/home/components/CityHighlights";
import Barangays from "./routes/city/Barangays";

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
      path: "/careers",
      element: <Careers />,
    },
    {
      path: "/government",
      element: <Government />,
    },
    {
      path: "/city-transactions",
      element: <CityTransactions />,
    },
    {
      path: "/business",
      element: <Business />,
    },
    {
      path: "/transparency-reports",
      element: <TransparencyReports />,
    },
    {
      path: "/departments",
      element: <Departments />,
    },
    {
      path: "/online-services",
      element: <OnlineServices />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/news/:id",
      element: <NewsArticle />,
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
