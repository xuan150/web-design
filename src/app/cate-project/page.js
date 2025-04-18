

export default function CateProject() {
  return (
    <div className="w-full h-full bg-[#DFF3FF] flex flex-col gap-3 items-center overflow-y-scroll px-10 pb-10 rounded-lg">

      <h1 className="text-3xl mt-20 mb-5">My Projects</h1>

      {/* 第一行 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="relative group overflow-hidden rounded-2xl md:col-span-1 h-60"
          style={{
            backgroundImage: `url(https://picsum.photos/seed/1/200)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute left-0 bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-sm opacity-0 rounded-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute left-0 bottom-0 w-full h-1/3 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            text
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-2xl md:col-span-2 h-60"
          style={{
            backgroundImage: `url(https://picsum.photos/seed/2/200)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 rounded-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            text
          </div>
        </div>
      </div>

      {/* 第二行 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="relative group overflow-hidden rounded-2xl md:col-span-2 h-60"
          style={{
            backgroundImage: `url(https://picsum.photos/seed/3/200)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 rounded-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            text
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-2xl md:col-span-1 h-60"
          style={{
            backgroundImage: `url(https://picsum.photos/seed/4/200)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 rounded-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            text
          </div>
        </div>
      </div>

      {/* 第三行 */}
      <div className="w-full grid grid-cols-1 gap-5">
        <div className="relative group overflow-hidden rounded-2xl md:col-span-1 h-60"
          style={{
            backgroundImage: `url(https://picsum.photos/seed/5/200)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 rounded-2xl group-hover:opacity-100 transition duration-300 z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white z-20 transition duration-300">
            text
          </div>
        </div>
      </div>

      
    </div>
  );
}