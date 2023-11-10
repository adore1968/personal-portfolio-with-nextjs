import Link from "next/link";

function PageNotFound() {
  return (
    <section className="flex justify-center min-h-[calc(100vh-20rem)]">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Error 404, page not found
        </h1>
        <Link
          href="/"
          className="block w-fit mx-auto px-4 mt-5 py-2 bg-red-600 hover:bg-red-500 transition-colors text-gray-50 rounded ease-in text-lg sm:text-xl"
        >
          Go to home
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
