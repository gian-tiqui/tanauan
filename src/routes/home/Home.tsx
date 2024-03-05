import Divider from "./components/Divider";
import NewsCarousel from "./components/NewsCarousel";
import MobileApp from "./components/MobileApp";
import PublicServices from "./components/PublicServices";
import StatusUpdates from "./components/StatusUpdates";
import CityHighlights from "./components/CityHighlights";
import LogoDivider from "./components/LogoDivider";
import Cgtv from "./components/CGTV";
import VideoHeader from "./components/VideoHeader";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <div id="video-header">
        <VideoHeader />
      </div>
      <div id="divider-news">
        <Divider text="News & Publication" />
      </div>
      <div id="news-carousel">
        <NewsCarousel />
      </div>
      <div id="divider-more-news">
        <Divider text="More news" />
      </div>
      <div id="public-services">
        <PublicServices />
      </div>
      <div id="mobile-app">
        <MobileApp />
      </div>
      <div id="logo-divider">
        <LogoDivider />
      </div>
      <div id="cgtv">
        <Cgtv />
      </div>
      <div id="status-updates">
        <StatusUpdates />
      </div>
      <div id="city-highlights">
        <CityHighlights />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
