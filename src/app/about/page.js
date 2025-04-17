import Image from "next/image";
import AvatarImg from "@/../public/avatar.jpg";
// import { FaReact, FaFigma} from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiBlender, SiArduino } from "react-icons/si";

export default function About() {
  return (
    <div className="w-full h-full bg-[#DFF3FF] flex-col justify-start items-center rounded-2xl py-12 px-10">
      <div className="flex flex-col w-full mb-7">
        <h1 className="text-3xl font-black text-[#334155]">About Me</h1>
        {/* <h4 className="mt-2 mb-6 text-[#475569]">
          一直以來累積ㄉ都在這，其餘尚在整理中
        </h4> */}
      </div>

      <div className="w-full h-[30vh] flex justify-between">
        <div className="w-[600px] font-medium">
          <p>
            本ENFP 大寫的社(會)恐(怖)分子 喜歡玩遊戲跟隨筆撇撇，討厭一成不變的條條框框
          </p>
        </div>

        <div className="bg-[#F8FAFC] w-[200px] rounded-2xl p-6 flex flex-col items-end gap-4">
          <h3 className="text-xl font-semibold mb-2">skills</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {/* <div className="flex items-center gap-2"><FaReact className="text-sky-500" />React</div> */}
            {/* <div className="flex items-center gap-2"><SiNextdotjs className="text-gray-800" />Next.js</div> */}
            {/* <div className="flex items-center gap-2"><SiTailwindcss className="text-cyan-400" />Tailwind</div> */}
            {/* <div className="flex items-center gap-2"><FaFigma className="text-pink-500" />Figma</div> */}
            {/* <div className="flex items-center gap-2"><SiBlender className="text-orange-500" />Blender</div> */}
            {/* <div className="flex items-center gap-2"><SiArduino className="text-green-600" />Arduino</div> */}
          </div>
        </div>
      </div>

      <div className="mt-8 w-full bg-[#F8FAFC] rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">經歷</h3>
        <ul className="space-y-2 text-[15px]">
          <li>🌱 2023｜開始學習前端，種下小小的種子</li>
          <li>💡 2024｜舉辦第二場設計黑客松，與夥伴激發火花</li>
          <li>✨ 2025｜完成畢業展《織夢》，將想像變為實體</li>
          <li>🎮 偶爾掉進創作與遊戲的世界，一玩就是一整天</li>
        </ul>
      </div>

      {/* 漂亮的星星 hover 效果保留區塊，可以放在全局 layout 裡 */}
      {/* 請確認 <MagicCursor /> 是有載入的唷 */}
    </div>
  );
}
