import type { Metadata } from 'next';
import { Geist_Mono, Kalam, Patrick_Hand, Cedarville_Cursive } from 'next/font/google';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { personalInfo } from '@/data/personal';

import './globals.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const kalam = Kalam({
  variable: '--font-kalam',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const patrickHand = Patrick_Hand({
  variable: '--font-patrick-hand',
  subsets: ['latin'],
  weight: '400',
});

const cedarvilleCursive = Cedarville_Cursive({
  variable: '--font-cedarville-cursive',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sujankumarsah.com.np'),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s - ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: ['Full-Stack Developer', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Portfolio'],
  authors: [{ name: personalInfo.name, url: personalInfo.githubUrl }],
  creator: personalInfo.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    type: 'website',
    url: 'https://sujankumarsah.com.np',
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`
        ${geistMono.variable}
        ${kalam.variable}
        ${patrickHand.variable}
        ${cedarvilleCursive.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-screen flex flex-col">
        <Header name={personalInfo.name} email={personalInfo.email} />

        <main className="flex-1 mx-auto max-w-3xl px-3">{children}</main>

        <Footer
          email={personalInfo.email}
          linkedInUrl={personalInfo.linkedinUrl}
          githubUrl={personalInfo.githubUrl}
        />
      </body>
    </html>
  );
}
