import { CodeXml, Mail } from "lucide-react"
import Image from "next/image"

export function HeroContent() {
  return (
    <div className="relative flex justify-center md:items-center items-end xl:gap-36 lg:gap-16 md:gap-5 h-dvh font-quicksand text-gray-950 overflow-hidden">
      <div className="z-10 lg:basis-md md:basis-100 md:px-0 sm:pb-30 pb-14 px-2.5 bg-white/70 backdrop-blur-xs">
        <p className="w-fit mb-7 pt-7 text-gray-950 font-black italic underline">
          Selamat Datang
        </p>
        <h1 className="text-7xl font-nunito-sans font-bold uppercase">
          HI, SAYA DAMAI
        </h1>
        <br />
        <p className="lg:mb-10 md:mb-7 mb-10 text-justify md:font-normal font-medium leading-7">
          Front-end Web Developer berpengalaman yang berfokus pada pembuatan website responsif, interaktif, serta mudah digunakan dengan kode yang terstruktur dan berkolaborasi efektif dalam pengembangan fitur dan API.
        </p>
        <div className="flex md:justify-start justify-between items-center md:gap-x-9 gap-x-0 lg:pt-5 font-semibold text-gray-600">
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
      <div className="md:static absolute md:translate-y-0 top-15 md:basis-xs md:w-auto w-full">
        <div className="md:w-80 w-full">
          <figure className="relative md:h-96 h-136 md:border md:rounded-xs md:shadow-solid-sm overflow-hidden">
            <Image
              src="https://amowvrssevrsklcnlvrm.supabase.co/storage/v1/object/public/portfolio%20tumbnail/photo_hero_section.webp"
              alt="HTML Code"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              className="p-px md:rounded-xs rounded-sm brightness-200"
            />
          </figure>
        </div>
      </div>
    </div>
  )
}