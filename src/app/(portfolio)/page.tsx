import { DescriptionContent } from "@/features/portfolio/description/description-content";
import { ExperienceContent } from "@/features/portfolio/experience/experience-content";
import { HeroContent } from "@/features/portfolio/hero/hero-content";
import { ProjectContent } from "@/features/portfolio/project/project-content";

export default function Home() {
  return (
    <main>
      <section id="beranda">
        <HeroContent />
      </section>
      <section id="tentang" className="flex md:flex-row flex-col justify-center 2xl:gap-24 gap-20 py-20 lg:px-0 md:px-5 px-2 font-quicksand bg-gray-50">
        <div className="lg:basis-104 md:basis-72">
          <DescriptionContent />
        </div>
        <div className="lg:basis-lg md:basis-96">
          <ExperienceContent />
        </div>
      </section>
      <section id="portofolio" className="py-32">
        <ProjectContent />
      </section>
    </main>
  );
}
