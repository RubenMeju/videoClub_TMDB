import { getCreditsMovieByID } from "@/app/services/getCreditsMovieByID.js";
import SliderCharacters from "./client/SliderCharacters";
import Link from "next/link";

export default async function CreditsMovie({ id }) {
  const credits = await getCreditsMovieByID(id);

  //si no tiene imagen la descarto
  const filteredCast = credits.cast.filter((actor) => actor.profile_path);

  return (
    <div className="w-full">
      <h1 className="mb-4 text-2xl text-orange-500">Reparto Principal</h1>
      <SliderCharacters>
        {filteredCast.map((actor) => (
          <div key={actor.id} className="max-w-xs bg-neutral-800 cursor-grab">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
                className=""
              />
            </div>

            <div className="px-2 py-4 h-24">
              <h1 className="text-neutral-100 font-semibold">
                {actor.original_name}
              </h1>
              <h1 className=" text-sm text-neutral-300">{actor.character}</h1>

              <Link href="/person">Ver biografía</Link>
            </div>
          </div>
        ))}
      </SliderCharacters>
    </div>
  );
}
