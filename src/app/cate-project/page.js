export default function CateProject() {
  return (
    <div className="w-full h-full bg-[#DFF3FF] flex flex-col gap-3 items-center overflow-y-scroll px-10 py-12 rounded-2xl">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-black text-[#334155]">My Projects</h1>
        <h4 className="mt-2 mb-4 text-[#475569]">
          陸續參與過的一些專案，課堂所需與 side project 皆有
        </h4>
      </div>

      {/* 第一行 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          className="relative group overflow-hidden rounded-2xl md:col-span-1 h-60"
          style={{
            backgroundImage: `url(https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-sm opacity-0 rounded-b-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute bottom-0 w-full h-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            政大考古題網站
          </div>
        </div>
        <div
          className="relative group overflow-hidden rounded-2xl md:col-span-2 h-60"
          style={{
            backgroundImage: `url(https://raw.githubusercontent.com/CitizenMedia-TW/client/ec97e2edcb07c05317572bf1e8c7a80e9cba12b2/public/logoLightS.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-sm opacity-0 rounded-b-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute bottom-0 w-full h-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            公民新聞 UI/UX
          </div>
        </div>
      </div>

      {/* 第二行 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className="relative group overflow-hidden rounded-2xl h-60 bg-black"
          style={{
            backgroundImage: `url(/stadium.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-sm opacity-0 rounded-b-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute bottom-0 w-full h-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            桌球館 App
          </div>
        </div>
        <div
          className="relative group overflow-hidden rounded-2xl md:col-span-1 h-60"
          style={{
            backgroundImage: `url(https://assets-next.mattersprotocol.io/_next/static/2d968336de1cc61c033984d815d5dfa2.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-sm opacity-0 rounded-b-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute bottom-0 w-full h-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            Matters Town 日記
          </div>
        </div>
      </div>

      {/* 第三行 */}
      <div className="w-full grid grid-cols-1 gap-5">
        <div
          className="relative group overflow-hidden rounded-2xl md:col-span-1 h-60"
          style={{
            backgroundImage: `url(https://media.fxhash.xyz/w_768/QmaTANhCYLABusMWWkbo36ra6fNpZGEG4rcLYpeY62fux6)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-sm opacity-0 rounded-b-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute bottom-0 w-full h-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            fx(hash) 作品集
          </div>
        </div>
      </div>
    </div>
  )
}
