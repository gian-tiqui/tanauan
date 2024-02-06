import { Container } from "@mui/material";
import Divider from "./components/Divider";
import NewsCarousel from "./components/NewsCarousel";
import MobileApp from "./components/MobileApp";

const Home = () => {
  return (
    <div className="static w-full h-full">
      <video autoPlay muted loop className="w-full h-96 object-cover">
        <source src="../../j.mp4" type="video/mp4" />
      </video>
      <Divider text="News & Publication" />
      <div className="relative z-10"></div>
      <div className="px-20">
        <NewsCarousel />
      </div>
      <Divider text="More news" />
      <MobileApp />
    </div>
  );
};

export default Home;
