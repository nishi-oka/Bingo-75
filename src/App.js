import "./App.css";
import React, { useState } from "react";
import PreNumber from "./PreNumber";
import StartButton from "./StartButton";
import CurrentNumber from "./CurrentNumber";
import ResetButton from "./ResetButton";
import "./PreNumber.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(null); // 現在の数字
  const [pastNumbers, setPastNumbers] = useState([]); // 過去の数字
  const [isDisabled, setIsDisabled] = useState(false); // ボタンの無効化
  const [fadeOut, setFadeOut] = useState(false); // フェードアウト状態
  const [isStarted, setIsStarted] = useState(false);

  // 新しい数字を生成する関数
  const generateRandomNumber = () => {
    if (isDisabled) return; // ボタンが無効化されている場合は何もしない
    if (!isStarted) setIsStarted(true);

    setIsDisabled(true); // ボタンを無効化
    setFadeOut(true);

    setTimeout(() => {
      // 過去の数字を更新
      setPastNumbers((prevNumbers) => {
        const updatedNumbers =
          randomNumber !== null ? [...prevNumbers, randomNumber] : prevNumbers;

        if (updatedNumbers.length >= 75) {
          setRandomNumber(null); // 新しい数字はセットしない
          return updatedNumbers;
        }

        let number;
        do {
          number = Math.floor(Math.random() * 75) + 1;
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
    setIsStarted(false);
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
      {isStarted && (
        <div className="fadeInPreNumber">
          <PreNumber numbers={pastNumbers} />
        </div>
      )}
    </div>
  );
}

export default App;
