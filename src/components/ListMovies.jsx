async function getMovies(query = "") {
  const URL_TRENDING = `${process.env.URL_TMDB}/trending/movie/day?language=en-US`;
  const URL_SEARCH = `${process.env.URL_TMDB}/search/multi?query=${query}&include_adult=false&language=es-US&page=2`;
  const URL = query.length > 0 ? URL_SEARCH : URL_TRENDING;

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

export default async function ListMovies({ query }) {
  const movies = await getMovies(query);
  console.log(movies);

  return (
    <section className="w-[90%] m-auto flex flex-col gap-8">
      {movies?.results.map((movie) => (
        <div
          key={movie.id}
          className="flex gap-2 rounded-md bg-white overflow-hidden"
        >
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.original_title}
            className="w-24"
          />
          <section>
            <h1 className="text-xl">
              {movie.title ? movie.title : movie.name}
            </h1>
            <p>
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </p>
          </section>
        </div>
      ))}
    </section>
  );
}
