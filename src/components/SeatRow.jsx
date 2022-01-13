import Seat from "./Seat";

const SeatRow = ({ row }) => {
  return (
    <div className="seat_row">
      <div className="seat_columnA column">
        <Seat seat={row[0]} type={0} />
        <Seat seat={row[1]} type={1} />
        <Seat seat={row[2]} type={2} />
      </div>
      <div className="seat_columnB column">
        <Seat seat={row[3]} type={3} />
        <Seat seat={row[4]} type={4} />
        <Seat seat={row[5]} type={5} />
        <Seat seat={row[6]} type={6} />
      </div>
      <div className="seat_columnC column">
        <Seat seat={row[7]} type={7} />
        <Seat seat={row[8]} type={8} />
        <Seat seat={row[9]} type={9} />
      </div>
    </div>
  );
};

export default SeatRow;
