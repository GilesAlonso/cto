# cto Next.js Starter

A Next.js 14 app scaffolded with TypeScript, Tailwind CSS, and a base layout (header, footer, container, and dark mode toggle).

## Features
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (dark mode via `class` strategy)
- Base layout with header, footer, and responsive container
- Simple dark mode toggle with localStorage persistence
- ESLint + Prettier

## Prerequisites
- Node.js >= 18.18.0 (Node 20 recommended)
- npm (or your preferred package manager)

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables and set values:
   ```bash
   cp .env.example .env.local
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 in your browser.

## Available scripts
- `npm run dev` – Start the Next.js development server
- `npm run build` – Build the application for production
- `npm run start` – Start the production server
- `npm run lint` – Lint the codebase with ESLint
- `npm run typecheck` – Run TypeScript type checks
- `npm run format` – Format the codebase with Prettier

## Environment variables
Create `.env.local` from `.env.example` and set the following variables:

- `GOOGLE_API_KEY` – Google Generative AI API key
- `GEMINI_MODEL` – Gemini model to use (e.g., `gemini-1.5-pro`)
- `TEMPERATURE` – Temperature for text generation (e.g., `0.7`)

## Tech stack
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## Project structure
```
.
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components
│       ├── Container.tsx
│       ├── Footer.tsx
│       └── Header.tsx
└── public
```

## Notes
- The app runtime is configured for Node.js via `export const runtime = 'nodejs'` in `src/app/layout.tsx`.
- Tailwind is configured with `darkMode: 'class'`. Use the theme toggle in the header to switch modes.
