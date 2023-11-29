import ListMovies from "@/components/ListMovies";
import SearchInput from "@/components/SearchInput";
import { Suspense } from "react";

export default async function Home({ searchParams }) {
  const query = searchParams?.search || "";

  //console.log(movies);
  return (
    <div className="bg-slate-300">
      <SearchInput />

      <Suspense key={query} fallback={<p>Pensandoooooooo....</p>}>
        <ListMovies query={query} />
      </Suspense>
    </div>
  );
}
