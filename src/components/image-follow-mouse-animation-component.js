import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const ImageFollowMouse = ({ src, alt, customStyle }) => {
  const [rotation, setRotation] = useState(0);

  const { transform } = useSpring({
    transform: `rotate(${rotation}deg)`,
    config: { mass: 5, tension: 350, friction: 40 },
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // 确保图片元素已经加载并获取其位置
      const imgElement = document.getElementById("followMouseImage");
      if (imgElement) {
        const rect = imgElement.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);
        const angle = Math.atan2(y, x) * (180 / Math.PI);
        setRotation(angle + 25);
      }
    };

    // 绑定事件监听器到window对象
    window.addEventListener("mousemove", handleMouseMove);

    // 清理函数
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <animated.img
        src={src}
      style={{ ...customStyle, transform }}
      id="followMouseImage"
    >
      {/* <img src={src} alt={alt} /> */}
    </animated.img>
  );
};

export default ImageFollowMouse;
