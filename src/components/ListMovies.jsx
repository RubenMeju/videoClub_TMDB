import { orderDate } from "@/utils/orderDate";
import Link from "next/link";

async function getMovies(query, page) {
  const URL_ALL_MOVIES = `${process.env.URL_TMDB}/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${page}`;
  const URL_SEARCH = `${process.env.URL_TMDB}/search/movie?query=${query}&include_adult=false&language=es-ES&page=1`;
  const URL = query.length > 0 ? URL_SEARCH : URL_ALL_MOVIES;

  const res = await fetch(URL, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY_TMDB}`,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ListMovies({ query, page }) {
  const movies = await getMovies(query, page);
  //  console.log(movies);

  return (
    <div className="w-[90%] m-auto flex flex-col gap-8 lg:flex-row lg:flex-wrap">
      {movies?.results.map((movie) => (
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
