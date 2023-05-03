import Head from "next/head";
import { Button, Container } from "ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Myopic Design — Next.js & Tailwind CSS Monorepo Template</title>
        <meta
          name="description"
          content="A monorepo template using TypeScript, Next.js, Tailwind CSS, Storybook, Jest, Playwright, Lighthouse, ESLint, CommitLint, and Prettier."
        />
      </Head>

      <Container>
        <main className="pb-8 pt-16 sm:pt-24">
          <h1 className="mx-auto text-center text-6xl font-extrabold text-neutral-900 dark:text-white sm:text-7xl lg:text-8xl">
            Next.js & Tailwind CSS Monorepo Template
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text py-8 text-transparent">
              Myopic Design
            </span>
          </h1>
          <div className="mx-auto mt-5 flex max-w-xl justify-center md:mt-8">
            <Button>Read the docs</Button>
          </div>
        </main>
      </Container>
    </>
  );
}
