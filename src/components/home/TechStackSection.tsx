import type { TechItem } from '@/types';

interface TechStackSectionProps {
  items: TechItem[];
}

export function TechStackSection({ items }: TechStackSectionProps) {
  return (
    <section id="tech-stack" className=" py-12">
      <h2 className="text-2xl">What I work with</h2>
      <p className="mt-2 max-w-xl text-ink-soft">
        The tools I reach for most. I care more about picking the right one for the problem than
        about how many I might see on this list.
      </p>

      <ul className="mt-8">
        {items.map((item) => (
          <li key={item.name} className="sketch-row flex flex-wrap items-baseline gap-x-4 py-2.5">
            <span className="text-lg">{item.name}</span>
            <span className="ml-auto text-sm text-pencil">{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
