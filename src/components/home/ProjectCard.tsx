import { Project } from '@/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article key={project.slug} className="sketch-border border-2 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl">{project.title}</h3>
        <span className="font-hand text-sm ">{project.status}</span>
      </div>
      <p className="text-sm text-pencil">{project.subtitle}</p>
      <p className="mt-3 text-ink-soft line-clamp-3">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((s) => (
          <li key={s} className="sketch-border-sm border-2 px-1 text-sm cursor-default">
            {s}
          </li>
        ))}
      </ul>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-4 inline-block font-hand text-sm sketch-underline"
      >
        Read the story →
      </Link>
    </article>
  );
}
