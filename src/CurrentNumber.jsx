import React, { useEffect, useState } from 'react';

const CurrentNumber = ({ number, onAnimationEnd }) => {
		const [animate, setAnimate] = useState(false);
		const [fadeOut, setFadeOut] = useState(false);

		useEffect(() => {
			if (number !== null) {
				setFadeOut(false);
				setAnimate(true);

				const timeout = setTimeout(() => {
					setFadeOut(true);
					setAnimate(false);
					if (onAnimationEnd) onAnimationEnd(); // 親にアニメーション終了を通知
				}, 1000); // アニメーションの時間（ms）

				return () => clearTimeout(timeout); // クリーンアップ
			}
		}, [number, onAnimationEnd]);

  return (
    <div className="current-number">
      <p className={`${fadeOut ? "fade-out" : ""}${animate ? "animate-number" : ""} ${number === null ? "bingo-text" : ""}`}>{number === null ? "Let's Bingo!" : number}</p>
    </div>
  );
};

export default CurrentNumber;
