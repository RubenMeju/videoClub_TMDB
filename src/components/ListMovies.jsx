import CardMovie from "./CardMovie";

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

  return (
    <div className="w-[90%] m-auto flex flex-col gap-8 lg:flex-row lg:flex-wrap">
      {movies?.results.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
