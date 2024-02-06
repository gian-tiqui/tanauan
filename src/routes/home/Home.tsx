import Divider from "./components/Divider";
import NewsCarousel from "./components/NewsCarousel";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";
import PublicServices from "./components/PublicServices";
import StatusUpdates from "./components/StatusUpdates";
import CityHighlights from "./components/CityHighlights";

const Home = () => {
  return (
    <div className="static w-full h-full">
      <div className="w-full">
        <video
          autoPlay
          muted
          loop
          className="w-full object-cover"
          style={{ height: "508px" }}
        >
          <source src="../../tanauan.mp4" type="video/mp4" />
        </video>
      </div>
      <Divider text="News & Publication" />
      <div className="relative z-10"></div>
      <div className="px-20">
        <NewsCarousel />
      </div>
      <Divider text="More news" />
      <PublicServices />
      <MobileApp />
      <StatusUpdates />
      <CityHighlights />
      <Footer />
    </div>
  );
};

export default Home;
