import Divider from "./components/Divider";
import NewsCarousel from "./components/NewsCarousel";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";
import PublicServices from "./components/PublicServices";
import StatusUpdates from "./components/StatusUpdates";
import CityHighlights from "./components/CityHighlights";
import Mayor from "./components/Mayor";
import LogoDivider from "./components/LogoDivider";
import Cgtv from "./components/CGTV";
import VideoHeader from "./components/VideoHeader";

const NEWS_STR: string = "News & Publication";
const MORE_NEWS_FOR_BUTTON_BUT_STILL_STR: string = "More news";

const Home = () => {
  return (
    <div className="static w-full h-full">
      <VideoHeader />
      <Divider text={NEWS_STR} />
      <NewsCarousel />
      <Divider text={MORE_NEWS_FOR_BUTTON_BUT_STILL_STR} />
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
