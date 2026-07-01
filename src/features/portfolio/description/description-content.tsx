import { techStacksData } from "@/lib/data/tech-stacks-data";
import { DescriptionTechStack } from "./description-tech-stack";

export function DescriptionContent() {
  return (
    <>
      <div className="mb-8 pb-14 pe-5 relative font-quicksand border-b border-gray-300">
        <div className="absolute top-0 -left-5.5 translate-x-1/2 h-12 w-px bg-black"></div>
        <div className="absolute top-12 -left-5.5 translate-x-1/2 h-17 w-px bg-gray-300"></div>
        <div className="">
          <h1 className="mb-2 text-xs text-gray-400 font-bold font-nunito uppercase tracking-[0.25rem]">
            Siapa saya
          </h1>
          <h2 className="text-4xl font-bold font-nunito-sans uppercase tracking-tighter">
            Tentang Saya
          </h2>
          <br />
          <p className="font-semibold text-lg text-gray-800">Saya Damai, seorang Front-end Web Developer yang berfokus pada pembuatan website yang mudah digunakan, responsif, dan interaktif dengan kode yang bersih serta mudah dikelola.</p>
          <br />
          <p className="text-base text-gray-700">Selama saya bekerja, saya berkontribusi dalam desain, pengembangan dan peningkatan fitur baru, berkolaborasi dengan tim back-end untuk integrasi API, serta melakukan optimasi pada website berbasis React JS.</p>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-xs text-gray-400 font-bold font-nunito uppercase tracking-[0.25rem]">
          Tech Stack
        </h2>
        <DescriptionTechStack />
      </div>
    </>
  )
}