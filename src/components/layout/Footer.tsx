interface FooterProps {
  email: string;
  linkedInUrl: string;
  githubUrl: string;
}

export function Footer({ email, linkedInUrl, githubUrl }: FooterProps) {
  return (
    <footer className="mt-8 py-10">
      <hr className="sketch-rule px-3 mx-auto mb-8 max-w-3xl" />
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-5 text-sm">
        <p className="font-hand text-lg">
          Want to work together?{' '}
          <a href={`mailto:${email}`} className="sketch-underline font-base text-ink">
            {email}
          </a>
        </p>
        <p className="flex gap-4 text-pencil">
          <a href={linkedInUrl} className="hover:sketch-underline">
            LinkedIn
          </a>
          <a href={githubUrl} className="hover:sketch-underline">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
