import { techStacksData } from "@/lib/data/tech-stacks-data";

export function DescriptionTechStack() {
  return (
    <div className="flex flex-wrap gap-2.5 font-nunito">
      {techStacksData?.map((item, index) => (
        <div key={index} className="grow basis-auto py-2 px-7.5 border border-gray-200 rounded-xs shadow-gray-300 transition-all duration-300 hover:shadow-solid-xs hover:">
          <p className="text-center text-sm text-gray-600 font-semibold cursor-default">{item?.name}</p>
        </div>
      ))}
    </div>
  )
}