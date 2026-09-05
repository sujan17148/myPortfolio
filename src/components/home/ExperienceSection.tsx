import type { Experience } from '@/types';
import { ExperienceCard } from './ExperienceCard';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className=" text-2xl">Where I&apos;ve worked</h2>
        <span className="font-hand text-xs tracking-widest text-pencil uppercase">
          Oldest first
        </span>
      </div>

      <div className="sketch-timeline space-y-7 pl-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.version} experience={experience} />
        ))}
      </div>
    </section>
  );
}
