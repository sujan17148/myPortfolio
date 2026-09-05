import type { Experience as ExperienceType } from '@/types';

interface ExperienceCardProps {
  experience: ExperienceType;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="experience-card relative">
      <span
        className="absolute -left-[29px] top-2 h-3 w-3 rounded-full border-2 border-ink bg-background"
        aria-hidden
      />
      <div className="flex flex-wrap items-baseline gap-x-3">
        <span className="font-hand text-xs text-pencil">{experience.version}</span>
        <h3 className="text-lg">{experience.role}</h3>
        {experience.company && <span className="text-sm text-pencil">· {experience.company}</span>}
        <span className="ml-auto text-sm text-pencil">
          {experience.startDate} — {experience.endDate}
        </span>
      </div>
      <p className="mt-1 max-experience-2xl text-ink-soft">{experience.description} </p>
    </div>
  );
}
