import "./App.css";
import React, { useState } from "react";
import PreNumber from "./PreNumber";
import StartButton from "./StartButton";
import CurrentNumber from "./CurrentNumber";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [pastNumbers, setPastNumbers] = useState([]);

  const generateRandomNumber = () => {
    setPastNumbers((prevNumbers) => {
      const updatedNumbers =
        randomNumber !== null ? [...prevNumbers, randomNumber] : prevNumbers;

      let number;
      do {
        number = Math.floor(Math.random() * 100) + 1;
      } while (updatedNumbers.includes(number)); // 重複していたら再生成

      setRandomNumber(number);
      return updatedNumbers;
    });
  };

  return (
    <div className="App">
      <div className="content">
        <CurrentNumber number={randomNumber} />
        <StartButton onClick={generateRandomNumber} />
      </div>
      <PreNumber numbers={pastNumbers} />
    </div>
  );
}

export default App;
