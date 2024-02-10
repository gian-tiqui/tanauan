const MayorImage = () => {
  const mayorImgPath = "../../../tanauanmayor.png";
  const pelepensPath = "../../../republikangpelepens.png";
  const logoPath = "../../../logo.png";

  return (
    <div className="relative left-24 bottom-10 md:w-72 lg:w-96">
      <div className="absolute top-0 left-0">
        <img
          src={pelepensPath}
          className="w-6 sm:w-24 md:w-15 lg:w-20"
          alt="Republikang Pelepens Logo"
        />
        <img
          src={logoPath}
          className="w-6 sm:w-24 md:w-15 lg:w-20"
          alt="Tanauan Logo"
        />
      </div>

      <img src={mayorImgPath} className="w-full sm:w-auto" alt="Mayor Image" />
    </div>
  );
};

export default MayorImage;
