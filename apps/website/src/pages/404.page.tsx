import Head from "next/head";
import { Container } from "ui";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Myopic Design — Page Not Found</title>
        <meta name="description" content="Sorry, the page you're looking for isn't there." />
      </Head>

      <Container>
        <main className="pb-8 pt-16 sm:pt-24">
          <h1 className="mx-auto text-center text-6xl font-extrabold text-neutral-900 dark:text-white sm:text-7xl lg:text-8xl">
            Page Not Found
          </h1>
          <div className="mx-auto mt-5 text-center text-neutral-900 dark:text-white">
            Sorry, the page you&#39;re looking for isn&#39;t there. Maybe it got moved, or deleted?
          </div>
        </main>
      </Container>
    </>
  );
}
