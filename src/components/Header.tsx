import Link from 'next/link';
import Container from './Container';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-gray-950/70">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold">
            cto
          </Link>
          <nav className="hidden gap-6 sm:flex">
            <Link href="/">Home</Link>
          </nav>
        </div>
        <ThemeToggle />
      </Container>
    </header>
  );
}
