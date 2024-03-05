interface CardProps {
  colSpan?: number;
  rowSpan?: number;
}

const NewsCardV2: React.FC<CardProps> = ({ colSpan = "1", rowSpan = "1" }) => {
  return (
    <div
      className={`border border-black col-span-${colSpan} row-span-${rowSpan}`}
    >
      News Card
    </div>
  );
};

export default NewsCardV2;
