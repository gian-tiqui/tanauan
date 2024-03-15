import Divider from "./components/Divider";
import NewsCarousel from "./components/NewsCarousel";
import MobileApp from "./components/MobileApp";
import PublicServices from "./components/PublicServices";
import StatusUpdates from "./components/StatusUpdates";
import CityHighlights from "./components/CityHighlights";
import Cgtv from "./components/CGTV";
import VideoHeader from "./components/VideoHeader";

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <div id="video-header">
        <VideoHeader />
      </div>
      <div data-aos="fade-up" id="divider-news">
        <Divider text="News & Publication" />
      </div>
      <div data-aos="fade-up" id="news-carousel">
        <NewsCarousel />
      </div>
      <div data-aos="fade-up" id="divider-more-news">
        <Divider text="More news" />
      </div>
      <div data-aos="fade-up" id="public-services">
        <PublicServices showText={true} />
      </div>
      <div data-aos="fade-up" id="mobile-app">
        <MobileApp />
      </div>
      <div data-aos="fade-up" id="cgtv">
        <Cgtv />
      </div>
      <div data-aos="fade-up" id="status-updates">
        <StatusUpdates />
      </div>
      <div data-aos="fade-up" id="city-highlights">
        <CityHighlights />
      </div>
    </div>
  );
};

export default Home;
