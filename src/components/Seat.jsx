import {
  MIDDLE_SEATS_ROW_INDEXES,
  WINDOW_SEATS_ROW_INDEXES,
} from "../constants";

const Seat = ({ seat, type }) => {
  if (MIDDLE_SEATS_ROW_INDEXES.includes(type)) {
    return <div className="seat seat__middle">{seat.number}</div>;
  }
  if (WINDOW_SEATS_ROW_INDEXES.includes(type)) {
    return <div className="seat seat__window">{seat.number}</div>;
  }
  return <div className="seat seat__aisle">{seat.number}</div>;
};

export default Seat;
