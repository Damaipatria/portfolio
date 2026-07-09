import { Experiences } from "./types";

export interface ExperienceItemProps {
  data: Experiences;
}

export function ExperienceItem({ data }: ExperienceItemProps) {

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="relative py-6 md:pl-14 pl-9">
        {/* Node */}
        <div className="absolute top-8 left-2 -translate-x-1/2 -translate-y-1/2 size-2 bg-gray-50 border border-black rounded-full"></div>

        <p className="mb-1 font-semibold text-xs text-gray-500 uppercase">
          {formatDate(data?.start_date)} -{" "}
          {data?.end_date ? formatDate(data?.end_date) : "Sekarang"}
        </p>
        <p className="text-xl font-bold font-nunito-sans uppercase">
          {data?.role}
        </p>
        <p className="mb-4 text-base text-gray-700 font-medium italic">{data?.company}</p>
        <ul className="space-y-2 text-sm text-gray-600 font-medium list-none">
          {data?.responsibilities?.map((item, index) => (
            <li key={index} className="flex gap-5">
              <p className="text-xs/5.75 text-gray-400 font-semibold">0{index + 1}</p>
              <p className="text-sm">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}