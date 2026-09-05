import { HeroSection } from '@/components/home/HeroSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { TechStackSection } from '@/components/home/TechStackSection';
import { techStack } from '@/data/techstack';
import experienceData from '@/data/experience.json';
import projectsData from '@/data/projects.json';
import type { Experience, Project } from '@/types';
import { personalInfo } from '@/data/personal';

export default function HomePage() {
  return (
    <>
      <HeroSection info={personalInfo} />
      <hr className="sketch-rule" />
      <ExperienceSection experiences={experienceData as Experience[]} />
      <hr className="sketch-rule" />
      <ProjectsSection projects={projectsData as Project[]} />
      <hr className="sketch-rule" />
      <TechStackSection items={techStack} />
    </>
  );
}
