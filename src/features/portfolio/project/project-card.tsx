"use client";

import { Projects } from "./types";
import { ProjectTechTag } from "./project-tech-tag";
import { ExternalLink, ShieldAlert } from "lucide-react";

export interface ProjectCardProps {
  data: Projects;
  onOpenModal: (project: Projects) => void;
}

export function ProjectCard({ data, onOpenModal }: ProjectCardProps) {
  return (
    <div className="basis-72 border rounded-xs overflow-hidden transition-all duration-400 group hover:shadow-solid-sm">
      <div className="relative h-56 overflow-hidden">
        {!data?.confidential ? (
          <>
            <figure>
              <img src={data?.image} alt={data?.title} className="w-full h-full object-cover object-top transition-all duration-400 group-hover:scale-105" />
            </figure>
            <div className="absolute inset-0 bg-black/60  opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <div className="flex items-center justify-center h-full">
                <button
                  className="flex items-center gap-1 py-1.5 px-3 text-sm text-white border border-white rounded-sm cursor-pointer hover:bg-gray-900 hover:text-white active:bg-gray-950"
                  onClick={() => window.open(data?.demoUrl, "_blank")}
                >
                  <ExternalLink size={16} />
                  <p className="font-bold">Kunjungi</p>
                </button>
              </div>
            </div>
          </>
        ) : (
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
              <div className="flex flex-col justify-center items-center gap-1 h-full text-gray-800">
                <i>
                  <ShieldAlert size={26} strokeWidth={1.5} />
                </i>
                <p className="text-xs text-center font-semibold">UI tidak ditampilkan <br /> karena bersifat rahasia</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col h-[calc(100%-14rem)] p-2">
        <h2 className="text-base font-bold font-nunito">{data?.title}</h2>
        <p className="mt-1 text-sm text-gray-600 text-justify">{data?.description}</p>
        <div className="mt-1 mb-2">
          {data?.technologies?.slice(0, 3)?.map((tech, index) => (
            <ProjectTechTag key={index} tech={tech} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-400">
          <div className="flex items-center gap-1">
            <div className={`${data.status === "Production" ? "bg-green-500" : data.status === "Development" ? "bg-yellow-500" : ""} size-1.5 rounded-full`} />
            <p className="text-xs text-gray-700 font-semibold">{data.status}</p>
          </div>
          <button
            className="py-1.5 px-3 text-sm text-gray-600 border rounded-sm cursor-pointer hover:bg-gray-800 hover:text-white active:bg-gray-950"
            onClick={() => onOpenModal(data)}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  )
}