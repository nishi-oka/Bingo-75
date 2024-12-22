import "./App.css";
import React, { useState } from "react";
import PreNumber from "./PreNumber";
import StartButton from "./StartButton";
import CurrentNumber from "./CurrentNumber";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [pastNumbers, setPastNumbers] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const generateRandomNumber = () => {
    if (isDisabled) return; // ボタンが無効化されているときはクリックできない
    setIsDisabled(true); // ボタンを無効化

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
    // 2秒後にボタンを再度有効化
    setTimeout(() => {
      setIsDisabled(false); // 2秒後にボタンを有効化
    }, 2000);
  };

  return (
    <div className="App">
      <div className="content">
        <CurrentNumber number={randomNumber} />
        <StartButton onClick={generateRandomNumber} isDisabled={isDisabled} />
      </div>
      <PreNumber numbers={pastNumbers} />
    </div>
  );
}

export default App;
