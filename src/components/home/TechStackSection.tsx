interface TechStackSectionProps {
  items: readonly string[];
}

export function TechStackSection({ items }: TechStackSectionProps) {
  return (
    <section id="tech-stack" className=" pt-12">
      <h2 className="text-2xl">What I work with</h2>
      <p className="mt-2 max-w-xl text-ink-soft">
        The tools I reach for most. I care more about picking the right one for the problem than
        about how many I might see on this list.
      </p>

      <ul className="mt-5 flex flex-wrap gap-2 items-center justify-start">
        {items.map((item) => (
          <li
            key={item}
            className="cursor-default sketch-border border-2 px-2 py-1 transition-all duration-200 ease-out hover:-translate-y-0.5 odd:hover:-rotate-1 even:hover:rotate-1 hover:border-ink motion-reduce:transition-none motion-reduce:transform-none"
          >
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
