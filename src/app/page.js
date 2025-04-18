'use client'
import Image from 'next/image'
// import AvatarImg from "@/../public/avatar.jpg";
// import HeartImg from '@/../public/heart.png'
import { useState, useEffect, useRef } from 'react'
import TrueFocus from "../component/TrueFocus"
import Booble from "@/../public/bobo.svg"
import Explosion from "@/../public/explosion.svg"

export default function Home() {
  const [stage, setStage] = useState(0)

  const maxStage = 8

  const handleClick = () => {
    if (stage < maxStage) {
      setStage(stage + 1);
    } else {
      setStage("explode"); // 進入爆炸狀態
      setTimeout(() => setStage(0), 1000); // 爆炸動畫後重置
    }
  };

  let bubbleClass =
    "transition-all duration-300 flex items-center justify-center cursor-pointer";
    if (stage === 1) bubbleClass += " scale-105";
    if (stage === 2) bubbleClass += " scale-110";
    if (stage === 3) bubbleClass += " scale-115";
    if (stage === 4) bubbleClass += " scale-120";
    if (stage === 5) bubbleClass += " scale-130";
    if (stage === 6) bubbleClass += " scale-140";
    if (stage === 7) bubbleClass += " scale-150";
    if (stage === 8) bubbleClass += " scale-160";
    if (stage === "explode") bubbleClass += " opacity-0 scale-200";

  // // 背景圈圈
  // const blobRef = useRef(null)
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     if (blobRef.current) {
  //       const parent = blobRef.current.parentElement
  //       const rect = parent.getBoundingClientRect()
  //       const x = e.clientX - rect.left
  //       const y = e.clientY - rect.top
  //       blobRef.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
  //     }
  //   }

  //   const parent = blobRef.current?.parentElement
  //   parent?.addEventListener('mousemove', handleMouseMove)
  //   return () => {
  //     parent?.removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, [])
  // // 背景圈圈

  return (
    // 方法一:預設隱藏(invisible)，大於一定尺寸後(sm:invisible)右邊的頁面出現
    <div className="relative overflow-hidden w-full h-full flex flex-col bg-[#DFF3FF]  justify-center items-center rounded-2xl text-[#64748B] gap-20">
      {/* <div
        className="absolute top-0 left-0 w-[100px] h-[100px] rounded-full bg-[#ffffff] blur-[50px] transition-all duration-450 
        ease-out pointer-events-none -translate-0.5"
        ref={blobRef}
      >
        {/* 幫妳加一個酷酷的東東(顏色可以自己調整) */}
      {/* 用法：聯絡 chaotingchen10@gmail.com aka 妳的嚕嚕寶 */}
      {/* </div> */}

      <TrueFocus
        sentence="讓  它  爆  炸  吧"
        manualMode={true}
        blurAmount={20}
        borderColor="rgba(255, 212, 100, 1)"
        animationDuration={0.5}
      />


      <div
        className="cursor-pointer flex flex-col justify-center items-center">
          <div className={bubbleClass} onClick={handleClick}>{stage === "explode" ? (<Image src={Explosion} className="w-[70px] mb-2.5" alt="bubble" />):(<Image src={Booble} className="w-[70px] mb-2.5" alt="bubble" />)}</div>
          <div className="mt-4 text-2xl text-[#64748B]">{stage === "explode" ? "Boom!" : stage}</div>
        {/* <Image width={200} height={200} src="/heart.png"></Image> */}
        {/* <div className="text-2xl">{heart}</div> */}
      </div>
    </div>
  )
}
