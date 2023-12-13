import SearchInput from "@/components/SearchInput";
import { Suspense } from "react";
import Pagination from "@/components/Pagination";
import Loading from "./Loading";
import CardMovie from "@/components/CardMovie";
import { getMovies } from "./services/getMovies";

export default async function HomePage({ searchParams }) {
  const query = searchParams?.search || "";
  const page = searchParams?.page || "1";

  const movies = await getMovies(query, page);

  return (
    <div>
      <SearchInput />

      <Suspense key={query} fallback={<Loading />}>
        <div className="w-full m-auto flex flex-wrap justify-between gap-y-8">
          {movies?.results.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
      <Pagination />
    </div>
  );
}
