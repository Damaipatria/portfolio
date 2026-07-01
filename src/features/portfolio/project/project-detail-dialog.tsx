"use client";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@radix-ui/react-dialog";
import { Projects } from "./types";
import { ProjectTechTag } from "./project-tech-tag";
import { CodeXml, FileText, UserCog2, XIcon } from "lucide-react";
import { ProjectSkeleton } from "./project-skeleton";

export interface ProjectDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Projects;
}

export function ProjectDetailDialog({ open, onOpenChange, project }: ProjectDetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/50" />
        <DialogContent className="fixed top-1/12 right-1/2 translate-x-1/2 z-50 w-3xl font-nunito bg-white border rounded-xs">
          <div className="relative h-38 border-b overflow-hidden">
            {!project?.confidential ? (
              <figure className="w-full h-full overflow-hidden">
                <img src={project?.image} alt={project?.title} className="w-full h-full object-cover object-center" />
              </figure>
            ) : (
              <ProjectSkeleton type="modal" />
            )}
            <div className="absolute top-0 w-full h-full py-4 px-6 bg-black/45 text-white">
              {project?.confidential && <span className="uppercase text-xs text-gray-300 font-bold font-nunito-sans tracking-wide">NDA - Detail Disesuaikan</span>}
              <DialogTitle className="text-2xl font-extrabold">{project?.title}</DialogTitle>
              <DialogDescription className="text-sm font-quicksand font-medium">{project?.company} - {project?.role}</DialogDescription>
            </div>
            <div className="absolute top-0 right-0 p-1.5">
              <DialogClose asChild>
                <button className="p-1.5 text-sm text-white rounded-sm cursor-pointer hover:bg-white/20 active:bg-white/40">
                  <XIcon size={18} strokeWidth={3} />
                </button>
              </DialogClose>
            </div>
          </div>
          <div className="py-4 px-6">
            <div className="mb-4">
              {project?.technologies?.map((tech, index) => (
                <ProjectTechTag key={index} tech={tech} />
              ))}
            </div>
            <div className="flex gap-4">
              <div className="basis-1/2">
                <div className="mb-4">
                  <div className="flex items-top gap-1 mb-1 text-gray-800">
                    <i><FileText strokeWidth={"2.5px"} size={16} /></i>
                    <p className="text-sm font-bold font-quicksand uppercase">Deskripsi</p>
                  </div>
                  <p className="text-sm text-gray-800 font-medium">{project?.description}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1 text-gray-800">
                    <i><CodeXml strokeWidth={"2.5px"} size={16} /></i>
                    <p className="text-sm font-bold font-quicksand uppercase">Kontribusi</p>
                  </div>
                  <ul className="ps-5 list-disc space-y-1.5 text-sm text-gray-800 font-medium">
                    {project?.contribution?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="flex items-center gap-1 mb-2 text-gray-800">
                  <i><UserCog2 strokeWidth={"2.5px"} size={16} /></i>
                  <p className="text-sm font-bold font-quicksand uppercase">Tanggung Jawab</p>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-800 font-medium">
                  {project?.responsibilities?.map((item, index) => (
                    <li key={index} className="py-1 px-2 text-sm text-gray-700 font-semibold font-quicksand border border-gray-500 rounded-sm bg-gray-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pb-4 px-6">
            <div className="flex justify-between items-center gap-2 pt-2 px-1 border-t border-gray-400">
              <div className="flex items-center gap-1">
                <div className={`${project?.status === "Production" ? "bg-green-500" : project?.status === "Development" ? "bg-yellow-500" : ""} size-1.5 rounded-full`} />
                <p className="text-xs text-gray-700 font-semibold">{project?.status}</p>
              </div>
              <DialogClose asChild>
                <button className="py-1.5 px-3 text-sm text-gray-600 border rounded-sm cursor-pointer hover:bg-gray-800 hover:text-white active:bg-gray-950">Tutup</button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}