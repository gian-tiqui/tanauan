const StatusUpdates = () => {
  return (
    <div
      className="mt-10 pt-5 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#031525" }}
    >
      <p className="text-white text-2xl font-bold mt-3">
        Status Updates as of 2023
      </p>

      <div className="mt-16 text-white">
        <div className="grid grid-cols-5 text-white gap-5">
          <p>5</p>
          <p>5</p>
          <p>5</p>
          <p>5</p>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default StatusUpdates;
