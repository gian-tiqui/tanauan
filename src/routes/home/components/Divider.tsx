import { Link } from "react-router-dom";

interface DividerProps {
  text: string;
}

const dividerWidth = "100%";

const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex align-middle justify-center gap-10 mt-10">
      <div
        className="border border-black my-auto ml-10"
        style={{ height: "1px", width: dividerWidth, borderColor: "#023F78" }}
      ></div>
      {text === "More news" ? (
        <Link
          to="/"
          className="border px-5 py-2 rounded font-bold text-xl"
          style={{ backgroundColor: "#023F78" }}
        >
          <p className="text-sm text-white whitespace-nowrap">{text}</p>
        </Link>
      ) : (
        <p
          className="font-bold text-xl mx-2 whitespace-nowrap"
          style={{ color: "#023F78" }}
        >
          {text}
        </p>
      )}

      <div
        className="border border-black my-auto mr-10"
        style={{ height: "1px", width: dividerWidth, borderColor: "#023F78" }}
      ></div>
    </div>
  );
};

export default Divider;
