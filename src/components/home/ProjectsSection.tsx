import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className=" text-2xl">Projects</h2>
        <span className="font-hand text-xs tracking-widest text-pencil uppercase">
          Built, broken, fixed
        </span>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
