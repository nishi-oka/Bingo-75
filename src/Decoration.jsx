import React, { useState, useEffect } from 'react';
import './Decoration.css';

const Decoration = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ウィンドウサイズの変更を監視
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const generateRandomSize = () => {
    // 画面サイズに応じたサイズをランダムに生成
    if (windowWidth <= 768) {
      return Math.floor(Math.random() * (40 - 10 + 1)) + 5;  // スマホ用
    }
    return Math.floor(Math.random() * (80 - 10 + 1)) + 30; // デスクトップ用
  };

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
            ❄
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decoration;
