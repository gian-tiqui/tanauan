const MayorImage = () => {
  const mayorImgPath = "../../../tanauanmayor.png";
  const pelepensPath = "../../../republikangpelepens.png";
  const logoPath = "../../../logo.png";

  return (
    <div className="relative left-36 bottom-14">
      <div className="absolute">
        <img src={pelepensPath} style={{ width: "130px", height: "auto" }} />
        <img src={logoPath} style={{ width: "150px", height: "auto" }} />
      </div>

      <img src={mayorImgPath} style={{ width: "360px", height: "auto" }} />
    </div>
  );
};

export default MayorImage;
