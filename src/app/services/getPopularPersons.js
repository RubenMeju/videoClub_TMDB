export async function getPopularPersons(query, page) {
  const URL_POPULAR_PERSONS = `${process.env.URL_TMDB}/person/popular?language=es-ES&page=${page}`;
  //const URL_SEARCH = `${process.env.URL_TMDB}/search/movie?query=${query}&include_adult=false&language=es-ES&page=1`;
  //const URL = query.length > 0 ? URL_SEARCH : URL_ALL_MOVIES;

  const res = await fetch(URL_POPULAR_PERSONS, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY_TMDB}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
