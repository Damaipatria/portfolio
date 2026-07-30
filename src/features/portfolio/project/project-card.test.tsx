
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './project-card';
import { Projects } from './types';


const projectDummy: Projects = {
  id: 1,
  title: "title",
  company: "company",
  role: "role",
  description:
    "description",
  technologies: [
    "technologies 1",
    "technologies 2",
  ],
  category: "category",
  image: "/image",
  status: "Production",
  featured: true,
  confidential: true,
  demoUrl: "https://demo.com",
  contribution: [
    "contribution 1",
    "contribution 2",
    "contribution 3",
  ],
  responsibilities: [
    "responsibilities 1",
    "responsibilities 2",
    "responsibilities 3",
    "responsibilities 4",
    "responsibilities 5"
  ]
}

describe("ProjectCard", () => {
  test("should render project information", () => {
    render(
      <ProjectCard
        data={projectDummy}
        onOpenModal={() => { }}
      />
    );

    expect(screen.getByText(projectDummy.title)).toBeInTheDocument();
    expect(screen.getByText(projectDummy.description)).toBeInTheDocument();
    expect(screen.getByText(projectDummy.status)).toBeInTheDocument();
    projectDummy.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    })
  });
});

describe("ProjectCard", () => {
  test("should render not confidential project content", () => {
    const projcetNonConfidential = { ...projectDummy, confidential: false };

    render(
      <ProjectCard
        data={projcetNonConfidential}
        onOpenModal={() => { }}
      />
    );

    expect(screen.getByRole("img")).toHaveAttribute("src", projcetNonConfidential.image);
    expect(screen.getByRole("img")).toHaveAttribute("alt", projcetNonConfidential.title);
    expect(screen.getAllByRole("button", { name: /kunjungi/i })).toHaveLength(2);
  });
});

describe("ProjectCard", () => {
  test("should render confidential project content", () => {
    const projcetNonConfidential = { ...projectDummy, confidential: true };

    render(
      <ProjectCard
        data={projcetNonConfidential}
        onOpenModal={() => { }}
      />
    );

    expect(screen.getByTestId("project-card-skeleton")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /kunjungi/i })).not.toBeInTheDocument();
  });
});

describe("ProjectCard", async () => {
  test("should render confidential project content", () => {

    const openModalMock = vi.fn(() => console.info("open modal"));

    render(
      <ProjectCard
        data={projectDummy}
        onOpenModal={() => openModalMock()}
      />
    );

    const openModalButton = screen.getByRole("button", { name: /detail/i });
    
    expect(openModalMock).not.toHaveBeenCalled();
    openModalButton.click();
    expect(openModalMock).toHaveBeenCalledTimes(1);
  });
});