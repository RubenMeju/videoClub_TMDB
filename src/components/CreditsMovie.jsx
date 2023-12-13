import { getCreditsMovieByID } from "@/app/services/getCreditsMovieByID.js";
import React from "react";

export default async function CreditsMovie({ id }) {
  console.log(id);
  const credits = await getCreditsMovieByID(id);
  return (
    <div>
      <h1 className="text-3xl text-orange-500">Reparto Principal</h1>
      <ul className="flex flex-wrap justify-between gap-8">
        {credits.cast.map((actor) => (
          <li key={actor.id} className="text-neutral-100">
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
              className="w-[130px] xl:w-full"
            />

            <h1>{actor.original_name}</h1>
            <h1>{actor.character}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
