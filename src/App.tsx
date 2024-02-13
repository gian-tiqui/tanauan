import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import City from "./routes/city/City";
import Tourism from "./routes/tourism/Tourism";
import Careers from "./routes/careers/Careers";
import { ReactNode } from "react";

interface RouteMapping {
  path: string;
  element: ReactNode;
}

function App() {
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
      </Router>
    </>
  );
}

export default App;
