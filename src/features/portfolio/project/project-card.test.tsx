
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './project-card';
import userEvent from '@testing-library/user-event';
import { createProject } from '@/lib/test/factories/project.factory';

const project = createProject()
const user = userEvent.setup();

describe("ProjectCard", () => {
  test("should render project information correctly", () => {

    render(
      <ProjectCard
        data={project}
        onOpenModal={() => { }}
      />
    );

    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByText(project.status)).toBeInTheDocument();
    project.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    })
  });

  test("should render not confidential project content", () => {
    let projectNonConfidential = createProject({ confidential: false });

    render(
      <ProjectCard
        data={projectNonConfidential}
        onOpenModal={() => { }}
      />
    );

    expect(screen.getByRole("img", { name: projectNonConfidential.title })).toHaveAttribute("src", projectNonConfidential.image);
    expect(screen.getByRole("img", { name: projectNonConfidential.title })).toHaveAttribute("alt", projectNonConfidential.title);
    expect(screen.getAllByRole("button", { name: /kunjungi/i })).toHaveLength(2);
  });

  test("should render confidential project content", () => {
    let projectConfidential = createProject({ confidential: true });

    render(
      <ProjectCard
        data={projectConfidential}
        onOpenModal={() => { }}
      />
    );

    expect(screen.getByTestId("project-card-skeleton-type-card")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /kunjungi/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("img", { name: projectConfidential.title })).not.toBeInTheDocument();
  });

  test("should open project detail dialog when detail button is clicked", async () => {
    const openModalMock = vi.fn();

    render(
      <ProjectCard
        data={project}
        onOpenModal={openModalMock}
      />
    );

    const openModalButton = screen.getByRole("button", { name: /detail/i });

    expect(openModalMock).not.toHaveBeenCalled();
    await user.click(openModalButton);
    expect(openModalMock).toHaveBeenCalledTimes(1);
    expect(openModalMock).toHaveBeenCalledWith(project);
  });

  test("should open project demo in a new tab when visit button is clicked", async () => {
    const openNewTabMock = vi.spyOn(window, "open")

    render(
      <ProjectCard
        data={project}
        onOpenModal={() => { }}
      />
    );

    const [visitButton] = screen.getAllByRole("button", { name: /kunjungi/i });

    expect(openNewTabMock).not.toHaveBeenCalled();
    await user.click(visitButton);
    expect(openNewTabMock).toHaveBeenCalledTimes(1);
    expect(openNewTabMock).toHaveBeenCalledWith(project.demoUrl, "_blank");
    openNewTabMock.mockRestore();
  })
});