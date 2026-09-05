import type { PersonalInfo } from '@/types';

export function HeroSection({ info }: { info: PersonalInfo }) {
  return (
    <section className="relative py-12 sm:py-16">
      <h1 className="max-w-lg font-hand text-4xl leading-tight sm:text-5xl">
        {info.name}
        <span className="mt-1 block whitespace-nowrap text-primary text-3xl sm:text-4xl">
          {info.title}
        </span>
      </h1>
      <p className="mt-5 max-w-xl text-lg text-ink-soft">{info.description}</p>
      <p className="mt-6 text-sm text-pencil">
        Biratnagar, Nepal · UTC+5:45 &nbsp;·&nbsp;
        <a href={`mailto:${info.email}`} className="sketch-underline text-ink">
          {info.email}
        </a>
      </p>
    </section>
  );
}
