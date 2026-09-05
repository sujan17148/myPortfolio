import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProjectHeader } from '@/components/project-detail/ProjectHeader';
import { ProjectContent } from '@/components/project-detail/ProjectContent';
import type { ProjectDetail } from '@/types';

// Import all project detail files
import keystrokeData from '@/data/project-details/keystroke.json';
import prepmateData from '@/data/project-details/prepmate.json';
import authSystemData from '@/data/project-details/auth-system.json';
import Link from 'next/link';
import { personalInfo } from '@/data/personal';

const projectDetailsMap: Record<string, ProjectDetail> = {
  keystroke: keystrokeData as ProjectDetail,
  prepmate: prepmateData as ProjectDetail,
  'auth-system': authSystemData as ProjectDetail,
};

// Generate static paths for all projects
export function generateStaticParams() {
  return Object.keys(projectDetailsMap).map((slug) => ({
    slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetailsMap[slug];

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const title = `${project.title} - ${project.subtitle}`;

  return {
    title,
    description: project.description,
    keywords: [project.title, ...project.tags],
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      type: 'article',
      url: `/projects/${slug}`,
      siteName: personalInfo.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectDetailsMap[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl">
      <Link href="/" className="mt-8 inline-block font-hand text-lg text-pencil hover:text-ink">
        ← All projects
      </Link>
      <ProjectHeader project={project} />
      <ProjectContent sections={project.sections} />
    </main>
  );
}
