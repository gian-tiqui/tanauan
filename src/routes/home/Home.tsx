import Divider from "./components/Divider";

const Home = () => {
  return (
    <div className="relative w-full h-80">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="../../j.mp4" type="video/mp4" />
      </video>
      <Divider text="News & Publication" />
      <div className="relative z-10"></div>
    </div>
  );
};

export default Home;
