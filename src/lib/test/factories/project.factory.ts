import { Project } from "@/features/portfolio/project/types";

export const createProject = (overrides: Partial<Project> = {}): Project => {
  return {
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
    demoUrl: "https://example.com",
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
    ],
    ...overrides,
  }
}

export const createProjects = (
  count = 3,
  overrides: Partial<Project> = {}
): Project[] => {
  return Array.from(
    { length: count },
    (_, index) => createProject({
      id: index + 1,
      ...overrides,
    })
  );
};
