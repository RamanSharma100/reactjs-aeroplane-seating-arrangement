import SeatRow from "./SeatRow";

const SeatsComponent = ({ seats }) => {
  return (
    <div className="all__seats">
      <div className="seats__header">
        <p>Column A</p>
        <p>Column B</p>
        <p>Column C</p>
      </div>
      {seats.map((seatRow, index) => (
        <>
          <SeatRow row={seatRow} key={index * 45321532 + index * 4532} />
        </>
      ))}
    </div>
  );
};

export default SeatsComponent;
