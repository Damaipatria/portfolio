import { experiencesData } from "@/lib/data/experiences-data";
import { ExperienceItem } from "./experience-item";

export function ExperienceContent() {
  return (
    <div>
      <h2 className="text-xs text-gray-400 font-bold font-nunito uppercase tracking-[0.25rem]">
        Pengalaman kerja
      </h2>
      <div className="relative">
        <div className="absolute top-5 left-2 -translate-x-1/2 h-[calc(100%-1rem)] w-[0.5px] bg-gray-300"></div>
        {experiencesData.map((experience, index) => (
          <ExperienceItem
            key={index}
            data={experience}
          />
        ))}
      </div>
    </div>
  )
}