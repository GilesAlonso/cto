export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl">Welcome to cto</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This is a fresh Next.js 14 app scaffolded with TypeScript and Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
          <h2 className="mb-2 text-xl font-medium">Getting Started</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Edit <code>src/app/page.tsx</code> to start building your app.</li>
            <li>Use the theme toggle in the header to switch between light and dark modes.</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
          <h2 className="mb-2 text-xl font-medium">Environment Variables</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Copy <code>.env.example</code> to <code>.env.local</code> and set your variables.
          </p>
        </div>
      </div>
    </section>
  );
}
