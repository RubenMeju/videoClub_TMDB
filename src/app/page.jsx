import ListMovies from "@/components/ListMovies";
import SearchInput from "@/components/SearchInput";
import { Suspense } from "react";
import Pagination from "@/components/Pagination";

export default async function Home({ searchParams }) {
  const query = searchParams?.search || "";
  const page = searchParams?.page || "1";

  console.log(page);
  return (
    <div className="bg-slate-300">
      <SearchInput />

      <Suspense key={query} fallback={<p>Pensandoooooooo....</p>}>
        <ListMovies query={query} page={page} />
      </Suspense>
      <Pagination />
    </div>
  );
}
