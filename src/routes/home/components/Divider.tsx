interface DividerProps {
  text: string;
}

const dividerWith = "37%";

const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex align-middle justify-center gap-10 mt-10">
      <div
        className="border border-black my-auto"
        style={{ height: "1px", width: dividerWith, borderColor: "#023F78" }}
      ></div>
      <p className="font-bold text-2xl" style={{ color: "#023F78" }}>
        {text}
      </p>
      <div
        className="border border-black my-auto"
        style={{ height: "1px", width: dividerWith, borderColor: "#023F78" }}
      ></div>
    </div>
  );
};

export default Divider;
