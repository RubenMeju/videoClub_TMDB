"use client";

import CardMovie from "@/components/CardMovie";
export default function WatchedPage() {
  const movies = localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies"))
    : [];

  return (
    <div className="w-full m-auto mt-8 flex flex-wrap justify-between gap-y-8 md:justify-normal md:gap-x-8">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
