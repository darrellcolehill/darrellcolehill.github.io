import React from "react";
import ProjectCard from "../components/ProjectCard";

const modules = import.meta.glob('../projects/*/index.md', { eager: true });

type Project = {
  title: string;
  image: string;
  href: string;
  markdown: string;
};

const projects: Project[] = Object.entries(modules).map(([path, mod]: any) => {
  const folderName = path.split('/').slice(-2, -1)[0];
  return {
    title: folderName.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()),
    image: `/projects/${folderName}/cover.jpg`,
    href: `#/projects/${folderName}`,
    markdown: mod.default
  };
});

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;