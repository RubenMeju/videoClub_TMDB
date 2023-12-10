export async function getMovieByID(id) {
  console.log(id);

  const URL_BY_ID = `${process.env.URL_TMDB}/movie/${id}?language=es-ES`;
  const res = await fetch(URL_BY_ID, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY_TMDB}`,
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
