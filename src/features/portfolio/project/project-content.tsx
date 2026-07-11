"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { ProjectDetailDialog } from "./project-detail-dialog";
import { projectsData } from "@/lib/data/projects-data";
import { Projects } from "./types";

export function ProjectContent() {

  const [modalConfig, setModalConfig] = useState<{
    open: boolean;
    project?: Projects;
  }>({ open: false });

  const handleOpenModal = (project: Projects) => {
    setModalConfig({ open: true, project });
  }

  return (
    <div className="font-quicksand">
      <h1 className="text-4xl font-extrabold text-center font-nunito uppercase tracking-wider">Portfolio</h1>
      <p className="mt-1.5 text-base text-center text-gray-400 font-extralight font-nunito-sans tracking-wide">Berikut beberapa proyek yang telah saya kerjakan.</p>
      <div className="lg:max-w-4xl md:max-w-2xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 md:px-0 px-4">
          {projectsData?.map((project) => (
            <ProjectCard key={project.id} data={project} onOpenModal={handleOpenModal} />
          ))}
        </div>
      </div>

      <ProjectDetailDialog
        open={modalConfig.open}
        onOpenChange={() => setModalConfig({ open: false, project: undefined })}
        project={modalConfig.project}
      />
    </div>
  )
}