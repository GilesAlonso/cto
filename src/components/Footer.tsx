import Container from './Container';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-white/50 py-6 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-950/50 dark:text-gray-400">
      <Container className="flex items-center justify-between">
        <p>© {year} cto. All rights reserved.</p>
        <p>Built with Next.js 14, TypeScript, and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
