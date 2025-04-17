import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AvatarImg from "@/../public/avatar.jpg";
import Link from "next/link";
import Linkimg1 from "@/image/new.png"
import Insta from "@/../public/insta.svg"
import Web from "@/../public/web.svg"


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

          <div className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-blue-200 flex 
          justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">

            <img src={AvatarImg.src} className="w-[80px] h-[80px] rounded-full"></img>
            {/* Image src={AvatarImg} alt="avatar" className="w-[80px] h-[80px] justify-center items-center" */}
            <h1 className="mt-2">張芷瑄</h1>
            <p className="max-w-[380px] text-center">
              簡介簡介
            </p>

            {/* 社群連結*/}
            {/* my是margin在y軸的意思 */}
            <div className="flex gap-2 my-4">
              <a href="https://www.instagram.com/littles0209/" target="_blank">
                {/* <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div> */}
                <div><Image src={Insta} height={40} width={40} alt="my instragram" /></div>
              </a>
              <a href="https://google.com" target="_blank">
                {/* <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div> */}
                <div><Image src={Web} height={40} width={40} alt="my website" /></div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-200 w-[40px] h-[40px] rounded-4xl"></div>
              </a>
            </div>

            {/* 頁面切換*/}
            {/* flex-col轉換排列方式 */}
            <div className="w-full flex flex-col gap-2">
              <Link href="/">
                <div className="w-full h-[84px] bg-gray-300 rounded-2xl">home</div>
              </Link>

              <Link href="/about">
                { /*<div className="w-full h-[84px] bg-gray-300 rounded-2xl">about</div> */}
                <div className={`w-full h-[84px] bg-gray-300 rounded-2xl`}>about</div>
              </Link>

              <Link href="/cate-web">
                <div className="w-full h-[84px] bg-gray-300 rounded-2xl">cate-web</div>
              </Link>

              <Link href="/cate-paint">
                <div className="w-full h-[84px] bg-gray-300 rounded-2xl">cate-paint</div>
              </Link>

              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類三</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類一</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類二</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類三</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類一</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類二</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-2xl">作品分類三</div>
            </div>

          </div>

          {children}
          {/* 就是page */}

        </div>

      </body>
    </html>
  );
}
