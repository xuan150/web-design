'use client'
import Image from 'next/image'
// import AvatarImg from "@/../public/avatar.jpg";
import HeartImg from '@/../public/heart.png'
import { useState, useEffect, useRef } from 'react'
import BlurText from "../component/BlurText"

export default function Home() {
  const [heart, setHeart] = useState(0)

  const addHeart = function () {
    setHeart(heart + 1)
  }

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

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
    <div className="relative overflow-hidden w-full h-full flex flex-col bg-[#DFF3FF]  justify-center items-center rounded-2xl">
      {/* <div
        className="absolute top-0 left-0 w-[100px] h-[100px] rounded-full bg-[#ffffff] blur-[50px] transition-all duration-450 
        ease-out pointer-events-none -translate-0.5"
        ref={blobRef}
      >
        {/* 幫妳加一個酷酷的東東(顏色可以自己調整) */}
        {/* 用法：聯絡 chaotingchen10@gmail.com aka 妳的嚕嚕寶 */}
      {/* </div> */}

      <BlurText
        text="boo boo boo"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-4"
      />


      <div
        className="cursor-pointer flex flex-col justify-center items-center"
        onClick={addHeart}
      >
        {/* <Image width={200} height={200} src="/heart.png"></Image> */}
        <Image src={HeartImg} className="w-[70px]" alt="heart" />
        {/* <div>愛心</div> */}
        <div className="text-2xl">{heart}</div>
      </div>
    </div>
  )
}
