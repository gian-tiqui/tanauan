const dividerWidth = "100%";

const LogoDivider = () => {
  return (
    <div className="flex align-middle justify-center gap-10 mt-10">
      <div
        className="border border-black my-auto ml-10"
        style={{ height: "1px", width: dividerWidth, borderColor: "#023F78" }}
      ></div>
      <img src="../../../logo.png" className="h-20" />
      <div
        className="border border-black my-auto mr-10"
        style={{ height: "1px", width: dividerWidth, borderColor: "#023F78" }}
      ></div>
    </div>
  );
};

export default LogoDivider;
