const MayorImage = () => {
  const mayorImgPath = "../../../tanauanmayor.png";

  return (
    <div className="mx-auto md:relative absolute md:left-40 md:bottom-16 md:w-72 lg:w-96 flex justify-center">
      <img
        src={mayorImgPath}
        className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80"
        alt="Mayor Image"
      />
    </div>
  );
};

export default MayorImage;
