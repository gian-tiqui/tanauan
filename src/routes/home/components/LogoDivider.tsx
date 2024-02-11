const dividerWidth = "100%";

const LogoDivider = () => {
  return (
    <div className="flex justify-center gap-24 mt-10 mb-10">
      <div
        className="border border-black my-auto ml-10"
        style={{ height: "1px", width: dividerWidth, borderColor: "#023F78" }}
      ></div>
      <img src="../../../logo.png" className="sm:h-14 md:h-20 h-14" />
      <div
        className="border border-black my-auto mr-10"
        style={{ height: "1px", width: dividerWidth, borderColor: "#023F78" }}
      ></div>
    </div>
  );
};

export default LogoDivider;
