import { CodeXml, Mail } from "lucide-react"
import Image from "next/image"

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
        <div className="flex items-center gap-x-9 pt-5 font-semibold text-gray-600">
          <a href="mailto:damaipatriasuyana10@gmail.com?subject=Halo%20Damai%2C%20saya%20tertarik%20berdiskusi" className="hover-underline flex items-center gap-1 pb-1 px-2 text-sm hover:text-gray-950 hover:border-gray-950">
            <i><Mail size={16} /></i>
            <p>Email</p>
          </a>
          <div className="w-px h-4 border border-gray-300" />
          <a href="https://www.linkedin.com/in/damai-patria-suyana/" target="_blank" rel="noopener noreferrer" className="hover-underline pb-1 px-2 text-sm hover:text-gray-950 hover:border-gray-950">LinkedIn</a>
          <div className="w-px h-4 border border-gray-300" />
          <a href="https://github.com/Damaipatria" target="_blank" rel="noopener noreferrer" className="hover-underline flex items-center gap-1 pb-1 px-2 text-sm hover:text-gray-950 hover:border-gray-950">
            <i><CodeXml size={16} /></i>
            <p>GitHub</p>
          </a>
        </div>
      </div>
      <div className="basis-xs">
        <div className="relative">
          <figure className="relative h-96 border rounded-xs shadow-solid-sm overflow-hidden">
            <Image
              src="https://amowvrssevrsklcnlvrm.supabase.co/storage/v1/object/public/portfolio%20tumbnail/photo_hero_section.webp"
              alt="HTML Code"
              width={400}
              height={400}
              loading="eager"
              className="p-px rounded-xs brightness-200"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}