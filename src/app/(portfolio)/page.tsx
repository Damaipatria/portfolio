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
      <section id="tentang" className="flex justify-center 2xl:gap-24 gap-3 py-20 font-quicksand bg-gray-50">
        <div className="basis-104">
          <DescriptionContent />
        </div>
        <div className="basis-lg">
          <ExperienceContent />
        </div>
      </section>
      <section id="portofolio" className="py-32">
        <ProjectContent />
      </section>
    </main>
  );
}
