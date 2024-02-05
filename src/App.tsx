import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import City from "./routes/city/City";
import Tourism from "./routes/tourism/Tourism";
import Careers from "./routes/careers/Careers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
