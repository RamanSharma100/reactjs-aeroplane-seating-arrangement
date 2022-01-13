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
    let allSeats = [...Array(20)].map((r) =>
      [...Array(10)].map((r) => ({ filled: false, number: null }))
    );

    allSeats.map((seatRow, index) => {
      let row = [...seatRow];
      row = seatRow.map((st) => st);
      if (filledSeatsNumber < input) {
        // fill middle seats
        // columnA
        if (filledSeatsNumber < input && row[1].filled === false) {
          row[1].filled = true;
          row[1].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }
        // columnB;
        if (filledSeatsNumber < input && row[4].filled === false) {
          row[4].filled = true;
          row[4].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }

        if (filledSeatsNumber < input && row[5].filled === false) {
          row[5].filled = true;
          row[5].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }

        //columnC
        if (filledSeatsNumber < input && row[8].filled === false) {
          row[8].filled = true;
          row[8].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }

        //filling window seats
        // columnA
        if (filledSeatsNumber < input && row[0].filled === false) {
          row[0].filled = true;
          row[0].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }
        //columnC
        if (filledSeatsNumber < input && row[9].filled === false) {
          row[9].filled = true;
          row[9].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }

        //filling alise seats
        //columnA
        if (filledSeatsNumber < input && row[2].filled === false) {
          row[2].filled = true;
          row[2].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }
        //columnB
        if (filledSeatsNumber < input && row[3].filled === false) {
          row[3].filled = true;
          row[3].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }
        if (filledSeatsNumber < input && row[6].filled === false) {
          row[6].filled = true;
          row[6].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }
        //columnC
        if (filledSeatsNumber < input && row[7].filled === false) {
          row[7].filled = true;
          row[7].number = filledSeatsNumber + 1;
          filledSeatsNumber++;
          setFilledSeats((prevFilled) => prevFilled + 1);
        }

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
