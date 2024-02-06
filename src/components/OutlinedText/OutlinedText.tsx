import { ReactNode } from "react";

interface OutlinedTextProps {
  children: ReactNode;
}

const OutlinedText = ({ children }: OutlinedTextProps) => {
  return (
    <span
      className="text-white my-auto"
      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      {children}
    </span>
  );
};

export default OutlinedText;
