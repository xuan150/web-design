import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AvatarImg from "@/../public/avatar.jpg";
import Link from "next/link";
import Linkimg1 from "@/image/new.png"
import Insta from "@/../public/insta.svg"
import Web from "@/../public/web.svg"
import Home from "@/../public/home.svg"
import Gmail from "@/../public/gmail.svg"
import MagicCursor from "../component/MagicCursor"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "張瑄的數位履歷",
  description: "只要一百塊馬上帶回家",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-white p-8">

          {/* <div className="min-w-[320px] w-full sm:w-[320px] h-[90vh] bg-blue-200 rounded-4xl flex justify-start items-center  */}
          {/* flex-col p-[30px] pt-[60px] overflow-y-auto overflow-x-hidden"> */}

          <div className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-[#DFF3FF] flex 
          justify-start items-center flex-col p-[30px] pt-[40px] overflow-y-auto overflow-x-hidden">
            {/* <img src={AvatarImg.src} className="w-[80px] h-[80px] rounded-full"></img> */}

            <div className="w-full flex justify-start items-start">
              <Link href="/">
                {/* <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div> */}
                <Image src={Home} height={24} width={24} alt="back to home" />
              </Link>
            </div>

            {/* margin是把別人推走 padding是自己往內縮 */}
            <img src={AvatarImg.src} className="w-[80px] h-[80px] rounded-full my-4"></img>
            {/* Image src={AvatarImg} alt="avatar" className="w-[80px] h-[80px] justify-center items-center" */}
            <h1 className="mt-4 text-[#334155] text-xl font-semibold">張芷瑄</h1>
            <p className="max-w-[380px] text-center text-[#475569] text-[14px] mt-0.5">
              喜歡天馬行空的水星水瓶人
            </p>

            {/* 社群連結*/}
            {/* my是margin在y軸的意思 */}
            <div className="flex gap-3 my-3">
              <a href="https://www.instagram.com/littles0209/" target="_blank">
                {/* <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div> */}
                <div><Image src={Insta} height={24} width={24} alt="my instragram" /></div>
              </a>
              <a href="https://google.com" target="_blank">
                {/* <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div> */}
                <div><Image src={Web} height={26} width={26} alt="my weebly" /></div>
              </a>
              <a href="mailto:waxd369@gmail.com">
                a
                {/* <div><Image src={Gmail} height={26} width={26} alt="send me letter" /></div> */}
              </a>
              {/* <a href="https://google.com" target="_blank">
                <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div>
              </a> */}
            </div>

            {/* 頁面切換*/}
            {/* flex-col轉換排列方式 */}
            <div className="w-full flex flex-col gap-4 my-3">
              <Link href="/about">
                { /*<div className="w-full h-[84px] bg-gray-300 rounded-2xl">about</div> */}
                <div className={`w-full h-[84px] bg-[#F8FAFC] rounded-2xl flex justify-center items-center text-[#64748B] font-black
                   transition-all duration-300 hover:bg-[#abb9c8] hover:scale-105 hover:shadow-md hover:text-[#F8FAFC]`}>ABOUT ME 小檔案</div>
              </Link>

              <Link href="/cate-paint">
                <div className="w-full h-[84px] bg-[#F8FAFC] rounded-2xl flex justify-center items-center text-[#64748B] font-black
                 transition-all duration-300 hover:bg-[#abb9c8] hover:scale-105 hover:shadow-md hover:text-[#F8FAFC]">PAINTING 圖堆</div>
              </Link>

              <Link href="/cate-blender">
                <div className="w-full h-[84px] bg-[#F8FAFC] rounded-2xl flex justify-center items-center text-[#64748B] font-black
                 transition-all duration-300 hover:bg-[#abb9c8] hover:scale-105 hover:shadow-md hover:text-[#F8FAFC]">PROJECT 專案</div>
              </Link>

              {/* <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類三</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類一</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類二</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類三</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類一</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類二</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類三</div> */}
            </div>

          </div>

          <MagicCursor />
          {children}
          {/* 就是page */}

        </div>

      </body>
    </html>
  );
}
