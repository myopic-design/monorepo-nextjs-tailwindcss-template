import Head from "next/head";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Myopic Design — Page Not Found</title>
        <meta name="description" content="Sorry, the page you're looking for isn't there." />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Page Not Found
        </h1>
        <div className="mx-auto mt-5 text-center text-white">
          Sorry, the page you&#39;re looking for isn&#39;t there. Maybe it got moved, or deleted?
        </div>
      </main>
    </div>
  );
}
