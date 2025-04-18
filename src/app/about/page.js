import Skill1 from "@/image/figma.svg";
import AvatarImg from "@/../public/avatar.jpg";
// import { FaReact, FaFigma} from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiBlender, SiArduino } from "react-icons/si";

export default function About() {
  return (
    <div className="w-full h-full bg-[#DFF3FF] flex flex-col justify-start items-center rounded-2xl py-12 px-10 overflow-auto">
      <div className="w-full mb-7">
        <h1 className="text-3xl font-black text-[#334155]">About Me</h1>
        {/* <h4 className="mt-2 mb-6 text-[#475569]">
          一直以來累積ㄉ都在這，其餘尚在整理中
        </h4> */}
      </div>

      <div className="w-full flex flex-wrap gap-8 mb-8">
        <div className="flex flex-col grow justify-between">
          <div className="h-[64px] flex text-[16px] font-medium mb-4" >
            本ENFP 大寫的社(會)恐(怖)分子 喜歡玩遊戲跟隨筆撇撇，討厭一成不變的條條框框
          </div>

          {/* 下方四個方塊 */}
          <div className="flex flex-wrap gap-4 mt-auto">
            <img src={AvatarImg.jpg} alt="photo1" className="w-[64px] h-[64px] object-cover rounded-md bg-gray-300" />
            <img src={AvatarImg.jpg} alt="photo1" className="w-[64px] h-[64px] object-cover rounded-md bg-gray-300" />
            <img src={AvatarImg.jpg} alt="photo1" className="w-[64px] h-[64px] object-cover rounded-md bg-gray-300" />
            <img src={AvatarImg.jpg} alt="photo1" className="w-[64px] h-[64px] object-cover rounded-md bg-gray-300" />
          </div>
        </div>

        {/* <div className="">aaa</div> */}

        <div className="bg-[#F8FAFC] w-[220px] h-[300px] rounded-2xl p-6 flex flex-col items-ed gap-4">
          <h3 className="text-xl font-semibold mb-2">skills</h3>
          <div className="flex flex-wrap gap-2">
            
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">Figma</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">Canva</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">Blender</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">R</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">Python</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">JavaScript</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">C#</div>
          </div>
        </div>
        {/* <div className="w-[40px] h-[40px] rounded-4xl flex items-center gap-2  border-black border-1"></div> */}
      </div>

      <div className="w-full h-[120px] bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-lg">
        經歷區塊
      </div>




      {/* <div className="mt-8 w-full bg-[#F8FAFC] rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">經歷</h3>
        <ul className="space-y-2 text-[15px]">
          <li>🌱 2023｜開始學習前端，種下小小的種子</li>
          <li>💡 2024｜舉辦第二場設計黑客松，與夥伴激發火花</li>
          <li>✨ 2025｜完成畢業展《織夢》，將想像變為實體</li>
          <li>🎮 偶爾掉進創作與遊戲的世界，一玩就是一整天</li>
        </ul>
      </div> */}
    </div>
  );
}
