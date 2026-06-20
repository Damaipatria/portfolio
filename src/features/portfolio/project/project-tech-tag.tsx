"use client";

const techColors: Record<string, string> = {
  "react js": "bg-blue-100 text-blue-800 border border-blue-300",
  "typescript": "bg-cyan-100 text-cyan-800 border border-cyan-300",
  "vue js": "bg-emerald-100 text-emerald-800 border border-emerald-300",
  "laravel": "bg-red-100 text-red-800 border border-red-300",
  "mysql": "bg-cyan-100 text-cyan-800 border border-cyan-300",
  "next js": "bg-gray-100 text-gray-800 border border-gray-300",
  "tailwind css": "bg-sky-100 text-sky-800 border border-sky-300",
  "tanstack query": "bg-amber-200 text-amber-800 border border-amber-400",
  "axios": "bg-violet-200 text-violet-800 border border-violet-400",
  "default": "bg-gray-100 text-gray-800 border border-gray-300",
}

export function ProjectTechTag({ tech }: { tech: string }) {
  const techColor = techColors[tech.toLowerCase() || "default"] || techColors["default"];
  return (
    <span className={`inline-block mr-2 px-2 py-0.5 text-[0.625rem] rounded-xs ${techColor}`}>
      {tech}
    </span>
  )
}