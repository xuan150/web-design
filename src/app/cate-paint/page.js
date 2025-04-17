import Image from "next/image";
import AvatarImg from "@/../public/avatar.jpg";
import painting1 from "@/image/1.png"

export default function CatePaint() {
  return (
    <div className="w-full h-full bg-[#DFF3FF] flex flex-col justify-start items-center rounded-2xl py-12 px-6">

      {/* 用大括號包起來代表要執行程式碼 */}
      {/* <Image src={painting1}></Image> */}

      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold">
          圖們
        </h1>
        <h3>
          因為我很喜歡畫畫，
        </h3>
      </div>

      <div className="flex flex-col w-full gap-4 mt-3 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 h-[33vh]">
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

          <div 
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

            <div className="w-full h-[100px] backdrop-blur-lg 
              absolute bottom-0 left-0 text-white text-2xl flex justify-center items-center">
              狗狗
            </div>

          </div>


          <div className="bg-gray-200 rounded-2xl"
          
            // style={
            //   { backgroundImage: `url(${Painting2.src})`, 
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center' }
            // }

          >
            內容二
          </div>

        </div>

        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          <div className="bg-white rounded-2xl">
            內容四
          </div>
          <div className="bg-white rounded-2xl">
            內容五
          </div>
        </div>
      </div>


    </div>
  );
}
