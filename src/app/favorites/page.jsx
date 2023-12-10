"use client";

import CardMovie from "@/components/CardMovie";

export default function favoritesPage() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  return (
    <div className="w-[90%] m-auto flex flex-col gap-8 lg:flex-row lg:flex-wrap">
      {movies.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
