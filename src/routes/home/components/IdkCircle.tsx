import { IdkCircleProps } from "./StatusUpdates";

const IdkCircle = (daProps: { daProps: IdkCircleProps }) => {
  return (
    <div
      style={{
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        padding: 80,
      }}
    >
      <div>
        <p className="text-lg text-nowrap">{daProps.daProps.val}</p>
        {daProps.daProps.unit && (
          <p className="text-xs text-nowrap">{daProps.daProps.unit}</p>
        )}
        <p className="text-md text-nowrap mt-3">{daProps.daProps.title}</p>
      </div>
    </div>
  );
};

export default IdkCircle;
