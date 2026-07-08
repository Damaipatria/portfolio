import { ShieldAlert } from "lucide-react";

interface ProjectSkeletonProps {
  type: "card" | "modal"
}

export function ProjectSkeleton({ type }: ProjectSkeletonProps) {
  return (
    <>
      <div className="p-2.5 transition-all duration-400 group-hover:scale-105">
        <div className="flex justify-between mb-3">
          <div className="w-4 h-4 bg-gray-400 rounded-sm" />
          <div className="w-20 h-4 bg-gray-800 rounded-sm" />
        </div>
        <div className="flex">
          <div className="basis-4 flex flex-col gap-1.5">
            <div className="w-4 h-4 bg-gray-800 rounded-sm" />
            <div className="w-4 h-4 bg-gray-400 rounded-sm" />
            <div className="w-4 h-4 bg-gray-400 rounded-sm" />
            <div className="w-4 h-4 bg-gray-400 rounded-sm" />
          </div>
          <div className="flex-1 flex flex-col gap-1.5 ml-2">
            <div className="flex justify-between gap-2">
              <div className="w-26 h-2 bg-gray-500 rounded-sm" />
              <div className="w-10 h-2 bg-gray-400 rounded-sm" />
            </div>
            <div className="flex gap-2">
              <div className="w-1/3 h-20 bg-gray-400 rounded-sm" />
              <div className="w-2/3 h-20 bg-gray-500 rounded-sm" />
            </div>
            <div className="w-full h-18 bg-gray-300 rounded-sm" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100/65 backdrop-blur-xs cursor-default">
        {type === "card" ? (
          <div className="flex flex-col justify-center items-center gap-1 h-full text-gray-800">
            <i>
              <ShieldAlert size={26} strokeWidth={1.5} />
            </i>
            <p className="text-xs text-center font-semibold">UI tidak ditampilkan <br /> karena bersifat rahasia</p>
          </div>
        ) : type === "modal" ? (<></>) : null}
      </div>
    </>
  )
}