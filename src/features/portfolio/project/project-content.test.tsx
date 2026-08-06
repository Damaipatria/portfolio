import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { ProjectContent } from "./project-content";
import type { ProjectCardProps } from "./project-card";
import { projects } from "@/lib/test/fixtures/project.fixture";
import { ProjectDetailDialogProps } from "./project-detail-dialog";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

// Data tiruan untuk menghindari rendering data asli dalam pengujian ProjectContent.
vi.mock('@/lib/data/projects-data', async () => {
  const { projects } = await import('@/lib/test/fixtures/project.fixture');
  return {
    projectsData: projects
  }
});

// Komponen ProjectCard tiruan untuk menghindari rendering komponen yang kompleks dalam pengujian ProjectContent.
vi.mock('./project-card', () => {
  return {
    ProjectCard: ({ onOpenModal }: Pick<ProjectCardProps, "onOpenModal">) => (
      <div data-testid="project-card">
        <button
          onClick={() => onOpenModal(projects[0])}
        >
          Open Dialog
        </button>
      </div>
    )
  }
});

// Komponen ProjectDetailDialog tiruan untuk menghindari rendering komponen yang kompleks dalam pengujian ProjectContent.
vi.mock('./project-detail-dialog', () => {
  return {
    ProjectDetailDialog: ({ open }: Pick<ProjectDetailDialogProps, "open">) => (
      <div data-testid="project-detail-dialog">
        <h1>Project Detail Dialog</h1>
        <p>{open ? "Dialog is shown" : "Dialog is hidden"}</p>
      </div>
    )
  }
})

describe("ProjectContent", () => {
  test("should render project content correctly", () => {
    render(<ProjectContent />);

    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Berikut beberapa proyek yang telah saya kerjakan.")).toBeInTheDocument();
    expect(screen.getAllByTestId("project-card").length).toEqual(projects.length);
  });

  test("should show project detail dialog after clicking project card button", async () => {
    render(<ProjectContent />);

    const [openDialogButton] = screen.getAllByRole("button", {
      name: /open dialog/i,
    });

    expect(screen.getByText("Dialog is hidden")).toBeInTheDocument();
    await user.click(openDialogButton);
    expect(screen.getByText("Dialog is shown")).toBeInTheDocument();
    expect(screen.queryByText("Dialog is hidden")).not.toBeInTheDocument();
  });
});