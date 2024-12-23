import React, { useEffect, useState } from "react";

const CurrentNumber = ({ number, onAnimationEnd, fadeOut }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (number !== null) {
      setAnimate(false); // アニメーションを一度リセット

      const animationTimeout = setTimeout(() => {
        setAnimate(true); // 新しい数字にアニメーションを適用
      }, fadeOut ? 1000 : 0); // フェードアウトが完了してからアニメーション開始

      return () => clearTimeout(animationTimeout); // クリーンアップ
    }
  }, [number, fadeOut]);

  return (
    <div className="current-number">
      <p
        className={`${fadeOut ? "fade-out" : ""} ${
          animate ? "animate-number" : ""
        } ${number === null ? "bingo-text" : ""}`}
      >
        {number === null ? "Let's Bingo!" : number}
      </p>
    </div>
  );
};

export default CurrentNumber;
