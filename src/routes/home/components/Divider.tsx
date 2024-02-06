import { Link } from "react-router-dom";

interface DividerProps {
  text: string;
}

const dividerWith = "100%";

const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex align-middle justify-center gap-10 mt-5">
      <div
        className="border border-black my-auto ml-10"
        style={{ height: "1px", width: dividerWith, borderColor: "#023F78" }}
      ></div>
      {text === "More news" ? (
        <Link to="/" className="border px-2 rounded font-bold text-xl">
          <p className="text-sm">{text}</p>
        </Link>
      ) : (
        <p className="font-bold text-xl mx-5" style={{ color: "#023F78" }}>
          {text}
        </p>
      )}

      <div
        className="border border-black my-auto mr-10"
        style={{ height: "1px", width: dividerWith, borderColor: "#023F78" }}
      ></div>
    </div>
  );
};

export default Divider;
