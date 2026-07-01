"use client";

import { Projects } from "./types";
import { ProjectTechTag } from "./project-tech-tag";
import { ExternalLink } from "lucide-react";
import { ProjectSkeleton } from "./project-skeleton";

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
          <ProjectSkeleton type="card" />
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