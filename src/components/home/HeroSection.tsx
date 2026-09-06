import type { PersonalInfo } from '@/types';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export function HeroSection({ info }: { info: PersonalInfo }) {
  return (
    <section className="relative py-12 sm:pt-16">
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

      <div className="flex items-center mt-3 gap-3">
        <a
          href={info.linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
          className="pencil-circle inline-flex size-8 items-center justify-center text-foreground transition-all hover:-translate-y-0.5 hover:-rotate-6 hover:text-stable-foreground"
        >
         <FaLinkedinIn size={15} strokeWidth={1.8} aria-hidden="true" />
        </a>
        <a
          href={info.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
          className="pencil-circle inline-flex size-8 items-center justify-center text-foreground transition-all hover:-translate-y-0.5 hover:rotate-6 hover:text-stable-foreground"
        >
          <FaGithub size={15} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
