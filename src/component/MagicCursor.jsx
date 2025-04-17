"use client";
import { useEffect, useState } from "react";

export default function MagicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  // 滑鼠移動
  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 點擊產生多顆星星
  useEffect(() => {
    const click = (e) => {
      const newStars = [];
      const count = Math.floor(Math.random() * 3) + 2; // 2~4顆

      for (let i = 0; i < count; i++) {
        const id = Date.now() + i;
        const angle = Math.random() * Math.PI * 2; // 隨機方向
        const distance = Math.random() * 80 + 30; // 30~110 px
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;
        const rotation = Math.random() * 360;

        newStars.push({
          id,
          x: e.clientX,
          y: e.clientY,
          offsetX,
          offsetY,
          rotation,
        });
      }

      setStars((prev) => [...prev, ...newStars]);

      setTimeout(() => {
        setStars((prev) => prev.filter((s) => !newStars.find((ns) => ns.id === s.id)));
      }, 800);
    };

    window.addEventListener("click", click);
    return () => window.removeEventListener("click", click);
  }, []);

  return (
    <>
      {/* 全域隱藏游標 */}
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          left: position.x - 20,
          top: position.y - 20,
          width: 50,
          height: 50,
          backgroundImage: "url('/cursorStar.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />

      {/* 點擊星星動畫 */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: "fixed",
            left: star.x - 10,
            top: star.y - 10,
            width: 20,
            height: 20,
            backgroundImage: "url('/littleStar.svg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            transform: `translate(${star.offsetX}px, ${star.offsetY}px) rotate(${star.rotation}deg)`,
            animation: "pop 0.8s ease-out",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      ))}

      {/* 星星動畫效果 */}
      <style jsx>{`
        @keyframes pop {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), var(--y)) scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}