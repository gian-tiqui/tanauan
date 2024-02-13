const VideoHeader = () => {
  return (
    <div className="w-full">
      <video
        autoPlay
        muted
        className="object-cover w-full"
        style={{ height: "508px" }}
      >
        <source src="../../../video24.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoHeader;
