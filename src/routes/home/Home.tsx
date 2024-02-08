import Divider from "./components/Divider";
import NewsCarousel from "./components/NewsCarousel";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";
import PublicServices from "./components/PublicServices";
import StatusUpdates from "./components/StatusUpdates";
import CityHighlights from "./components/CityHighlights";
import Mayor from "./components/Mayor";
import LogoDivider from "./components/LogoDivider";
import Cgtv from "./components/Cgtv";
import VideoHeader from "./components/VideoHeader";

const Home = () => {
  return (
    <div className="static w-full h-full">
      <VideoHeader />
      <Divider text="News & Publication" />
      <NewsCarousel />
      <Divider text="More news" />
      <Mayor />
      <PublicServices />
      <MobileApp />
      <LogoDivider />
      <Cgtv />
      <LogoDivider />
      <StatusUpdates />
      <CityHighlights />
      <Footer />
    </div>
  );
};

export default Home;
