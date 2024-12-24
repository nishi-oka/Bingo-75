import "./App.css";
import React, { useState } from "react";
import PreNumber from "./PreNumber";
import StartButton from "./StartButton";
import CurrentNumber from "./CurrentNumber";
import ResetButton from "./ResetButton";


function App() {
  const [randomNumber, setRandomNumber] = useState(null); // 現在の数字
  const [pastNumbers, setPastNumbers] = useState([]); // 過去の数字
  const [isDisabled, setIsDisabled] = useState(false); // ボタンの無効化
  const [fadeOut, setFadeOut] = useState(false); // フェードアウト状態

  // 新しい数字を生成する関数
  const generateRandomNumber = () => {
    if (isDisabled) return; // ボタンが無効化されている場合は何もしない

    setIsDisabled(true); // ボタンを無効化
    setFadeOut(true);

    setTimeout(() => {
      // 過去の数字を更新
      setPastNumbers((prevNumbers) => {
        const updatedNumbers =
          randomNumber !== null ? [...prevNumbers, randomNumber] : prevNumbers;

        let number;
        do {
          number = Math.floor(Math.random() * 100) + 1;
        } while (updatedNumbers.includes(number)); // 重複していたら再生成

        setRandomNumber(number); // 新しい数字をセット
        return updatedNumbers;
      });

      setFadeOut(false); // フェードアウトを終了
    }, 900); // フェードアウトアニメーションの時間を調整

    // 2秒後にボタンを再度有効化
    setTimeout(() => {
      setIsDisabled(false); // ボタンを有効化
    }, 2000);
  };

  // リセット関数: 初期状態に戻す
  const resetState = () => {
    if (isDisabled) return; // ボタンが無効化されている場合は何もしない

    setRandomNumber(null);
    setPastNumbers([]);
    setFadeOut(false);
    setIsDisabled(true); // リセット時も2秒間無効化

    // 2秒後にボタンを再度有効化
    setTimeout(() => {
      setIsDisabled(false); // ボタンを有効化
    }, 1000);
  };

  return (
    <div className="App">
      <div className="content">

        <CurrentNumber number={randomNumber} fadeOut={fadeOut} />
        <StartButton
          onClick={generateRandomNumber}
          isDisabled={isDisabled}
        />{" "}
        {/* ボタン無効化 */}
        <ResetButton onClick={resetState} isDisabled={isDisabled} />{" "}
        {/* Resetボタンも無効化 */}
      </div>
      <PreNumber numbers={pastNumbers} />
    </div>
  );
}

export default App;
