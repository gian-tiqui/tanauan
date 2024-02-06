import { Container } from "@mui/material";
import Divider from "./components/Divider";
import NewsCarousel from "./components/NewsCarousel";

const Home = () => {
  return (
    <div className="relative w-full h-80">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="../../j.mp4" type="video/mp4" />
      </video>
      <Divider text="News & Publication" />
      <div className="relative z-10"></div>
      <Container>
        <NewsCarousel />
      </Container>
    </div>
  );
};

export default Home;
