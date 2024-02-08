const City = () => {
  return (
    <div className="w-full">
      <video
        autoPlay
        muted
        loop
        className="w-full h-auto object-cover"
        style={{ height: "508px" }}
      >
        <source src="../../j.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default City;
