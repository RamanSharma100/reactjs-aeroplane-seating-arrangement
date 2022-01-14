import { useState } from "react";
import SeatsComponent from "./components/SeatsComponent";

import "./App.css";

const App = () => {
  const [input, setInput] = useState(11);

  const [filling, setFilling] = useState(false);
  const [filledSeats, setFilledSeats] = useState(0);
  // const [seats, setSeats] = useState({
  //   column1: { win: [], middle: [], asle: [] },
  //   column2: { win: [], middle: [[], []], asle: [] },
  //   column3: { win: [], middle: [], asle: [] },
  // });
  const [seats, setSeats] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input < 11 || input > 200) {
      return window.alert("min and max no. of seats should be 11 and 200");
    }

    setFilling(true);

    // filling seats
    let filledSeatsNumber = 0;
    let allSeats = [...Array(20)].map(() =>
      [...Array(10)].map(() => ({ filled: false, number: null }))
    );
    let row = [];

    const fillSeat = (seatIndexInRow) => {
      if (filledSeatsNumber < input && row[seatIndexInRow].filled === false) {
        row[seatIndexInRow].filled = true;
        row[seatIndexInRow].number = filledSeatsNumber + 1;
        filledSeatsNumber++;
        setFilledSeats((prevFilled) => prevFilled + 1);
      }
    };

    allSeats.map((seatRow, index) => {
      row = seatRow.map((st) => st);
      if (filledSeatsNumber < input) {
        // fill middle seats
        // columnA
        fillSeat(1);
        // columnB;
        fillSeat(4);
        fillSeat(5);
        //columnC
        fillSeat(8);

        //filling window seats
        // columnA
        fillSeat(0);
        //columnC
        fillSeat(9);

        //filling alise seats
        //columnA
        fillSeat(2);
        //columnB
        fillSeat(3);
        fillSeat(6);
        //columnC
        fillSeat(7);

        allSeats[index] = row;
      }
    });

    setSeats(allSeats);
  };

  return (
    <div className="App">
      <h1>Aeroplane Seating Arrangement</h1>
      <div className="container">
        <form className="header" onSubmit={handleSubmit}>
          <p>number of passangers</p>
          <div>
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="number of passangers"
            />
            <input type="submit" value="click here to calculate seating" />
          </div>
        </form>
        <div className="aeroplane__front">Aeroplane -- Front</div>

        <div className="aeroplane__seats">
          {filling ? (
            filledSeats ? (
              <SeatsComponent seats={seats} />
            ) : (
              "Filling seats"
            )
          ) : (
            "All Seats are Empty"
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
