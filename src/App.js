import "./App.css";
import React, { useState } from "react";
import PreNumber from "./PreNumber";
import StartButton from "./StartButton";
import CurrentNumber from "./CurrentNumber";
import ResetButton from "./ResetButton";

function App() {
  const [randomNumber, setRandomNumber] = useState(null); // 現在の数字
  const [pastNumbers, setPastNumbers] = useState([]); // 過去の数字
  const [isDisabled, setIsDisabled] = useState(false); // Startボタンの無効化
  const [fadeOut, setFadeOut] = useState(false); // フェードアウト状態
  const [isGenerating, setIsGenerating] = useState(false); // generateRandomNumber 処理中かどうか

  // 新しい数字を生成する関数
  const generateRandomNumber = () => {
    if (isDisabled || isGenerating) return; // ボタンが無効化されているか、処理中なら何もしない
    setIsGenerating(true); // 処理中フラグを立てる
    setIsDisabled(true); // Startボタンを無効化

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
      setIsDisabled(false); // Startボタンを有効化
      setIsGenerating(false); // 処理終了フラグを解除
    }, 1000); // フェードアウトアニメーションの時間を調整
  };

  // リセット関数: 初期状態に戻す
  const resetState = () => {
    if (isGenerating) return; // generateRandomNumber 処理中なら何もしない
    setRandomNumber(null);
    setPastNumbers([]);
    setIsDisabled(false);
    setFadeOut(false);
  };

  return (
    <div className="App">
      <div className="content">
        <CurrentNumber number={randomNumber} fadeOut={fadeOut} />
        <StartButton onClick={generateRandomNumber} isDisabled={isDisabled} />
        <ResetButton onClick={resetState} isDisabled={isGenerating} /> {/* Resetボタンを無効化 */}
      </div>
      <PreNumber numbers={pastNumbers} />
    </div>
  );
}

export default App;
