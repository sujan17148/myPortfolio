import Link from 'next/link';

interface HeaderProps {
  name: string;
  email: string;
}

export function Header({ name, email }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10  bg-background/85 backdrop-blur">
      <nav className="mx-auto max-w-3xl relative flex items-center justify-between p-3 py-4">
        <Link href="/" className="flex items-center gap-2 font-hand font-bold">
          {name}
        </Link>
        <a href={`mailto:${email}`} className="sketch-border border-2  px-2 py-1 leading-none ">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
