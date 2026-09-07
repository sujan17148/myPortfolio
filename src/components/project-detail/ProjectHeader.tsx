import type { ProjectDetail } from '@/types';

interface ProjectHeaderProps {
  project: ProjectDetail;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <section className="py-4">
      <h1 className="font-hand text-4xl sm:text-5xl">
        {project.title}{' '}
        <span className="font-hand align-middle text-2xl font-normal">{project.status}</span>
      </h1>
      <p className="mt-2 text-lg text-ink-soft">{project.subtitle}</p>
      <p className="mt-4 max-w-xl text-ink-soft">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((s) => (
          <li key={s} className="sketch-border-sm border-2 px-1 text-sm cursor-default">
            {s}
          </li>
        ))}
      </ul>

      <div className="cta flex items-center gap-3">
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block sketch-border border-2 px-2 py-1.5 font-hand text-sm transition-all duration-200 ease-out hover:-translate-y-0.5 odd:hover:-rotate-1 even:hover:rotate-1 hover:border-ink active:translate-y-0 motion-reduce:transition-none motion-reduce:transform-none"
          >
            View the code ↗
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block sketch-border border-2 px-2 py-1.5 font-hand text-sm transition-all duration-200 ease-out hover:-translate-y-0.5 odd:hover:-rotate-1 even:hover:rotate-1 hover:border-ink active:translate-y-0 motion-reduce:transition-none motion-reduce:transform-none"
          >
            Live Preview ↗
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block sketch-border border-2 px-2 py-1.5 font-hand text-sm transition-all duration-200 ease-out hover:-translate-y-0.5 odd:hover:-rotate-1 even:hover:rotate-1 hover:border-ink active:translate-y-0 motion-reduce:transition-none motion-reduce:transform-none"
          >
            ▶ Watch the demo
          </a>
        )}
      </div>
    </section>
  );
}
