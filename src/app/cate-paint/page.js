import Image from "next/image";
import AvatarImg from "@/../public/avatar.jpg";
import Painting1 from "@/image/p5js抽象美女.png"
import Painting2 from "@/image/小天使.png"
import Painting3 from "@/image/XIAO.png"
import Painting4 from "@/image/達賢傍晚.png"
import Painting5 from "@/image/藍天.jpg"

export default function CatePaint() {
  return (
    <div className="w-full h-full bg-[#DFF3FF] flex flex-col justify-start items-center rounded-2xl py-12 px-10 overflow-auto">

      {/* 用大括號包起來代表要執行程式碼 */}
      {/* <Image src={painting1}></Image> */}

      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-black text-[#334155]">
          圖們
        </h1>
        <h4 className="mt-2 mb-4 text-[#475569]">
          一直以來累積ㄉ都在這，其餘尚在整理中
        </h4>
      </div>

      {/* <div className="flex flex-col w-full gap-4 mt-3 ">
        <div className="grid grid-cols-1 sm:grid-cols-7 w-full gap-4 h-[70vh]"> */}
      {/* <div className={`bg-white col-span-2 rounded-2xl `} */}
      {/*   style={{ backgroundImage: `url(${painting1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> */}
      {/**/}
      {/*     <div className="w-[40px] h-[40px] rounded-full bg-red-100 absolute left-1/2 bottom-1/2 -translate-x-0.5 -translate-y-0.5"> */}
      {/*       狗狗 */}
      {/*     </div> */}
      {/**/}
      {/* absolute是把物體放到絕對的位置(後面兩個跟著的是從哪裡對齊) */}
      {/*     <div className="w-full h-[100px] backdrop-blur-md absolute bottom-0 left-0 text-white twxt-2xl font-bold flex justify-center items-center"> */}
      {/*       狗狗 */}
      {/*     </div> */}
      {/**/}
      {/*   內容一 */}
      {/* </div> */}
      {/* <div className="bg-white col-span-2 rounded-2xl"> */}
      {/*   內容二 */}
      {/* </div> */}

      {/* <div 
            className={`bg-gray-200 sm:col-span-2 rounded-2xl relative overflow-hidden`} 

              style={
                { backgroundImage: `url(${painting1.src})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center' }
              }
          >
            
            <div className="w-[40px] h-[40px] rounded-full bg-red-100 absolute 
              left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              狗狗
            </div>

            <div className="w-full h-[40px] backdrop-blur-lg 
              absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
              狗狗
            </div>

          </div> */}

      <div className="grid sm:grid-cols-9 sm:grid-rows-5 w-full h-full mt-3 gap-4">

        <div className="col-span-3 row-span-5 relative group">
          <div className="w-full h-full rounded-2xl"
            style={{
              backgroundImage: `url(${Painting1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 
            rounded-2xl p-4 w-3/4 text-center text-[14px] text-black font-semibold">
              先以p5.js的隨機粒子系統生成基礎圖樣，之後挑選最有意境的一張在平板上做繪圖加工，變成一幅獨一無二的畫。
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-3 relative group">
          <div className="w-full h-full rounded-2xl"
            style={{
              backgroundImage: `url(${Painting2.src})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`
            }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 
            rounded-2xl p-4 w-3/4 text-center text-[14px] text-black font-semibold">
              某堂藝術與社會學結合的課的啟發，把現代社會意涵與某個繪畫派系的風格融合於一。
            </div>
          </div>
        </div>

        <div className="col-span-4 row-span-3 relative group">
          <div className="w-full h-full rounded-2xl"
            style={{
              backgroundImage: `url(${Painting3.src})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`
            }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 
            rounded-2xl p-4 w-3/4 text-center text-[14px] text-black font-semibold">
              很喜歡的遊戲角色，因為太愛了真的忍不住自己提筆畫畫滿足更多想像、完善背景故事。比任何人都要期待它真實存在。
            </div>
          </div>
        </div>

        <div className="col-span-4 row-span-2 relative group">
          <div className="w-full h-full rounded-2xl"
            style={{
              backgroundImage: `url(${Painting4.src})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`
            }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 
            rounded-2xl p-4 w-3/4 text-center text-[14px] text-black font-semibold">
              某天達賢外面傍晚的照片臨摹，因為顏色很好看所以畫了。
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-2 relative group">
          <div className="w-full h-full rounded-2xl"
            style={{
              backgroundImage: `url(${Painting5.src})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`
            }}
          ></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-300 
            rounded-2xl p-4 w-3/4 text-center text-[14px] text-black font-semibold">
              很久之前為了鼓勵自己堅持讀書終究會有回報而摸魚的打氣圖。
            </div>
          </div>
        </div>

      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">

          <div className="bg-gray-200 rounded-2xl"
            style={
              {
                backgroundImage: `url(${Painting1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }
            }
          >
            內容一
          </div>

          <div className="flex flex-col w-full gap-4 mt-3">
            
          </div>

          <div className="bg-gray-200 sm:col-span-2 rounded-2xl h-[40vh]"
            style={
              {
                backgroundImage: `url(${Painting2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }
            }
          >
            內容二
          </div> */}

      {/* <div className="bg-gray-200 sm:col-span-3 rounded-2xl h-[40vh]"
            style={
              {
                backgroundImage: `url(${Painting3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }
            }
          >
            內容三
          </div> */}



      {/* <div className="grid grid-cols-4 w-full gap-4 h-[33vh]">
          <div className="bg-white rounded-2xl"
            style={
              {
                backgroundImage: `url(${Painting2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }
            }
          >
            內容四
          </div>
          <div className="bg-white rounded-2xl"
            style={
              {
                backgroundImage: `url(${Painting2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }
            }
          >
            內容四
          </div>

          <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
            <div className="bg-white rounded-2xl"
              style={
                {
                  backgroundImage: `url(${Painting2.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }
              }
            >
              內容四
            </div>

            <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
              <div className="bg-white rounded-2xl"
                style={
                  {
                    backgroundImage: `url(${Painting2.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }
                }
              >
                內容四
              </div>
            </div>
          </div>


        </div > */}
    </div >
    // </div>
  );
}