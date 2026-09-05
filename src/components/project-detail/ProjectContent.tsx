import type { ProjectContentSection } from '@/types';

interface ProjectContentProps {
  sections: ProjectContentSection[];
}

export function ProjectContent({ sections }: ProjectContentProps) {
  return sections.map((section) => (
    <section key={section.heading} className="pb-5">
      <hr className="sketch-rule mb-5" />
      <h2 className="font-hand text-xs font-bold tracking-[0.2em] text-pencil uppercase">
        {section.heading}
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">{section.content}</p>
      {section.bulletPoints && (
        <ul className="mt-3 space-y-1.5">
          {section.bulletPoints.map((b) => (
            <li key={b} className="flex gap-2.5 text-ink-soft">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      )}
    </section>
  ));
}
