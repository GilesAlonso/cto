import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

export const metadata: Metadata = {
  title: 'cto',
  description: 'Bootstrap Next.js 14 + TypeScript + Tailwind base layout',
};

export const runtime = 'nodejs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main className="min-h-[calc(100vh-8rem)] py-10">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
