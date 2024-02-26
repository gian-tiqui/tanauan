import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import City from "./routes/city/City";
import Tourism from "./routes/tourism/Tourism";
import Careers from "./routes/careers/Careers";
import { MouseEventHandler, ReactNode, createContext } from "react";
import Footer from "./routes/home/components/Footer";

interface RouteMapping {
  path: string;
  element: ReactNode;
}

export const PreventContextMenu = createContext<
  MouseEventHandler<HTMLImageElement> | undefined
>(undefined);

function App() {
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
  ];

  return (
    <>
      <PreventContextMenu.Provider value={preventContextMenu}>
        <Router>
          <Navbar />
          <Routes>
            {routeMaps.map((routeMap, index) => (
              <Route
                key={index}
                path={routeMap.path}
                element={routeMap.element}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </PreventContextMenu.Provider>
    </>
  );
}

export default App;
