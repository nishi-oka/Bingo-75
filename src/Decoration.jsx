import React from 'react';
import './Decoration.css';

const Decoration = () => {
  const generateRandomSize = () => Math.floor(Math.random() * (50 - 10 + 1)) + 30;

  return (
    <div className="decoration">
      <div className="snowman">
      </div>
      <div className="snowflakes">
        {[...Array(10)].map((_, index) => (  // 10個の雪flakeを生成
          <div
            key={index}
            className="snowflake"
            style={{
              left: `${Math.random() * 100 < 70 ? Math.random() * 30 : Math.random() * 70 + 30}%`,  // 左70%に多く降らせる
              animationDuration: `${Math.random() * 10 + 5}s`,  // ランダムなアニメーションの速度
              fontSize: `${generateRandomSize()}px`,  // ランダムなサイズを適用
            }}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decoration;
