import ListMovies from "@/components/ListMovies";
import SearchInput from "@/components/SearchInput";
import { Suspense } from "react";
import Pagination from "@/components/Pagination";
import Loading from "./Loading";

export default async function HomePage({ searchParams }) {
  const query = searchParams?.search || "";
  const page = searchParams?.page || "1";

  return (
    <div>
      <SearchInput />

      <Suspense key={query} fallback={<Loading />}>
        <ListMovies query={query} page={page} />
      </Suspense>
      <Pagination />
    </div>
  );
}
