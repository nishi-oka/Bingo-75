import React, { useEffect, useState } from "react";

const CurrentNumber = ({ number, fadeOut }) => {
  const [animate, setAnimate] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(null);

  useEffect(() => {
    if (fadeOut) {
      // フェードアウト中は一旦数字を非表示にする
      setAnimate(false);
      const fadeTimeout = setTimeout(() => {
        setDisplayNumber(number); // フェードアウト完了後に数字を更新
        setAnimate(true); // 新しい数字にアニメーションを適用
      }, 1000); // フェードアウト時間 (App.js に合わせて調整)

      return () => clearTimeout(fadeTimeout); // クリーンアップ
    } else {
      setDisplayNumber(number); // フェードアウトがない場合は即時更新
      setAnimate(true); // アニメーションを適用
    }
  }, [number, fadeOut]);

  return (
    <div className="current-number">
      <p
        className={`${fadeOut ? "fade-out" : ""} ${
          animate ? "animate-number" : ""
        } ${displayNumber === null ? "bingo-text" : ""}`}
      >
        {displayNumber === null ? "Let's Bingo!" : displayNumber}
      </p>
    </div>
  );
};

export default CurrentNumber;
