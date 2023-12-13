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
  console.log(movies.total_pages);
  return (
    <div>
      <SearchInput />

      <Suspense key={query} fallback={<Loading />}>
        <div className="w-[90%] m-auto flex flex-wrap justify-between gap-y-8 2xl:w-full 2xl:gap-x-8">
          {movies?.results.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
      <Pagination currentPage={movies.page} totalPages={movies.total_pages} />
    </div>
  );
}
