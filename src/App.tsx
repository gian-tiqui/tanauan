import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import City from "./routes/city/City";
import Tourism from "./routes/tourism/Tourism";
import Careers from "./routes/careers/Careers";
import { MouseEventHandler, ReactNode, createContext } from "react";
import Footer from "./routes/home/components/Footer";
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

  const preventContextMenu: MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
  };

  const routeMaps: RouteMapping[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/city",
      element: <City />,
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
  ];

  const toastIt = () => {
    toast("hi", { type: "info" });
  };

  return (
    <>
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
    </>
  );
}

export default App;
