import React, { useEffect, useState } from 'react';

const CurrentNumber = ({ number }) => {
		const [animate, setAnimate] = useState(false);

		useEffect(() => {
			if (number !== null) {
				setAnimate(true);
				// アニメーションが終了したらクラスをリセット
				const timeout = setTimeout(() => setAnimate(false), 1500); // 1500ms後にアニメーションをリセット
				return () => clearTimeout(timeout); // クリーンアップ
			}
		}, [number]);

  return (
    <div className="current-number">
      <p className={animate ? "animate-number" : ""}>{number}</p>
    </div>
  );
};

export default CurrentNumber;
