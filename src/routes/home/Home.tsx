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
      <div data-aos="fade-right" id="divider-news">
        <Divider text="News & Publication" />
      </div>
      <div data-aos="fade-left" id="news-carousel">
        <NewsCarousel />
      </div>
      <div data-aos="fade-up-right" id="divider-more-news">
        <Divider text="More news" />
      </div>
      <div data-aos="fade-up-left" id="public-services">
        <PublicServices />
      </div>
      <div data-aos="fade-down-right" id="mobile-app">
        <MobileApp />
      </div>
      <div data-aos="fade-down-left" id="logo-divider">
        <LogoDivider />
      </div>
      <div data-aos="fade-right" id="cgtv">
        <Cgtv />
      </div>
      <div data-aos="fade-left" id="status-updates">
        <StatusUpdates />
      </div>
      <div data-aos="fade-up-right" id="city-highlights">
        <CityHighlights />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
