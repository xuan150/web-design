import Skill1 from "@/image/figma.svg";
import Blender1 from "@/image/nofaceman.png";
import Blender2 from "@/image/bird.png"

export default function About() {
  return (
    <div className="w-full h-full bg-[#DFF3FF] flex flex-col items-center rounded-2xl py-12 px-10 overflow-y-scroll">
      <div className="w-full mb-7">
        <h1 className="text-3xl font-black text-[#334155]">About Me</h1>
        {/* <h4 className="mt-2 mb-6 text-[#475569]">
          一直以來累積ㄉ都在這，其餘尚在整理中
        </h4> */}
      </div>

      <div className="w-full flex flex-col xl:flex-row gap-8 mb-8">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col text-[16px] font-medium gap-4 tracking-wide leading-normal" >
            <p>
              本ENFP 大寫的社(會)恐(怖)分子 喜歡玩遊戲跟隨筆撇撇，討厭一成不變的條條框框。
            </p>
            <p>
              日常喜歡走走看看，相信很酷的東西能夠激發靈感創作，比起證據更細歡感覺(當然學術時還是會調查後拿數據說服人啦(ㆆᴗㆆ))。
            </p>
            <p>
              粗淺學過很多軟體和工具，不敢說專精但基本都會，最近為了沒有超專特長而在苦惱職涯中。
              目前對繪圖、UIUX跟建模最有興趣，但考慮到社會出路不得不學點 coding ( ´•̥×•̥` )。夢想是可以靠接案過活YA。
            </p>
            <p>
              超級甜點控，但在甜食和臉黃中游移不定，希望有能解決這種問題的神仙產品我一定愛爆、、、 
            </p>
          </div>

          <div className="flex flex-wrap xl:flex-nowrap gap-4 mt-4">
            <img src={Blender1.src} alt="photo1" className="w-[150px] h-[128px] object-cover rounded-md bg-gray-300" />
            <img src={Blender2.src} alt="photo1" className="w-[150px] h-[128px] object-cover rounded-md bg-gray-300" />
            <img src={Blender1.src}  className="w-[150px] h-[128px] object-cover rounded-md bg-gray-300" />
            <img src={Blender2.src}  className="w-[150px] h-[128px] object-cover rounded-md bg-gray-300" />
          </div>
        </div>

        <div className="bg-[#F8FAFC] min-w-[200px] h-fit rounded-2xl p-6 flex flex-col items-end gap-4 border-2 border-[#abb9c8]">
          <h3 className="text-[14px] font-semibold">skills</h3>
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">Canva</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">Blender</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">Figma</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">Python</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">R</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">C#</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">C</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">JavaScript</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">CSS</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">HTML</div>
            <div className="inline-flex items-center justify-center border-2 border-[#64748B] rounded-full px-4 py-2 text-[#64748B] font-bold text-[12px]">NextJS</div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F8FAFC] rounded-2xl flex flex-col items-center justify-center text-[16px] border-2 border-[#abb9c8] p-6 gap-4">
        <section className="w-full px-3 rounded-md flex flex-col">
          <h2 className="text-xl font-semibold">Education</h2>
            <strong>National ChengChi University</strong>
            <p>Bachelor's of Science in Digital Content and Techonologies</p>
            <p>Double major in Sociology</p>
        </section>

        <hr className="w-[97%] mx-auto border-t-2 border-[#D1D5DB]" style={{borderTop:"dashed 2px"}} />

        <section className="w-full px-3 rounded-md flex flex-col">
          <h2 className="text-xl font-semibold">Work Experience</h2>
            <strong>Freelance UI/UX Designer</strong>
            <p>Self-Employed</p>
            <p>Double major in Sociology</p>
          <ul className="list-disc pl-5">
            <li>Conducted user research and usability testing, leading to data-driven design decisions that enhanced product usability.</li>
            <li>Designed user-friendly interfaces and interactive prototypes for 2 client projects, improving user engagement.</li>
          </ul>
        </section>
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
