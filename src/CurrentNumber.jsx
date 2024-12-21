import React, { useEffect, useState } from 'react';

const CurrentNumber = ({ number, onAnimationEnd }) => {
		const [animate, setAnimate] = useState(false);

		useEffect(() => {
			if (number !== null) {
				setAnimate(true);

				const timeout = setTimeout(() => {
					setAnimate(false);
					if (onAnimationEnd) onAnimationEnd(); // 親にアニメーション終了を通知
				}, 1000); // アニメーションの時間（ms）

				return () => clearTimeout(timeout); // クリーンアップ
			}
		}, [number, onAnimationEnd]);

  return (
    <div className="current-number">
      <p className={animate ? "animate-number" : ""}>{number}</p>
    </div>
  );
};

export default CurrentNumber;
