import { Project } from '@/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      key={project.slug}
      className="group sketch-border border-2 p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 odd:hover:-rotate-1 even:hover:rotate-1 hover:border-ink motion-reduce:transition-none motion-reduce:transform-none"
    >
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
        Read the story{' '}
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">
          →
        </span>
      </Link>
    </article>
  );
}
