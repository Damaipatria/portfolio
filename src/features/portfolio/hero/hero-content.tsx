export function HeroContent() {
  return (
    <div className="flex justify-center items-center xl:gap-36 lg:gap-16 h-dvh font-quicksand text-gray-950">
      <div className="basis-md">
        <p className="w-fit mb-7 pb-0.5 pe-1.5 text-gray-500 font-medium rounded-xs shadow-gray-400 shadow-solid-sm">
          Selamat Datang
        </p>
        <h1 className="text-7xl font-nunito-sans font-bold uppercase">
          HI, SAYA DAMAI
        </h1>
        <br />
        <p className="mb-10 text-justify leading-7">
          Front-end Web Developer berpengalaman yang berfokus pada pembuatan website responsif, interaktif, serta mudah digunakan dengan kode yang terstruktur dan berkolaborasi efektif dalam pengembangan fitur dan API.
        </p>
        <div className="mt-3 flex items-start gap-x-3">
          <p className="text-xl font-bold underline">Kontak Saya</p>
        </div>
      </div>
      <div className="basis-xs">
        <div className="relative">
          <figure className="relative h-96 border rounded-xs shadow-solid-sm overflow-hidden">
            {/* <Image
                src="https://picsum.photos/id/77/300/300"
                alt="photo"
                fill={true}
              /> */}
          </figure>
        </div>
      </div>
    </div>
  )
}