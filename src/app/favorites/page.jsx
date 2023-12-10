"use client";

import { orderDate } from "@/utils/orderDate";
import Link from "next/link";

export default function favoritesPage() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  console.log("Favoritos:", movies);
  return (
    <div className="w-[90%] m-auto flex flex-col gap-8 lg:flex-row lg:flex-wrap">
      {movies.map((movie) => (
        <Link
          href={`/${movie.id}`}
          key={movie.id}
          className="w-full max-w-sm flex md:flex-col rounded-lg overflow-hidden bg-neutral-900"
        >
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>

          <div className="w-full p-4">
            <h2 className="text-gray-100 font-bold text-xl mb-2">
              {movie.title ? movie.title : movie.name}
            </h2>
            <p className="text-neutral-400"> {orderDate(movie.release_date)}</p>

            <p className="text-white">Puntuación: {movie.vote_average}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
