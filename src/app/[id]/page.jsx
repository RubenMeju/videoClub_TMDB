import { convertirMinutosAHorasYMinutos, orderDate } from "@/utils/orderDate";
import { getMovieByID } from "../services/getMovieByID";
import AddWatched from "@/app/[id]/components/client/AddWatched";
import ReviewsMovie from "@/app/[id]/components/ReviewsMovie";
import CreditsMovie from "@/app/[id]/components/CreditsMovie";

export default async function MovieIdPage({ params }) {
  const data = await getMovieByID(params?.id);
  //console.log(data);

  const { horas, minutos } = convertirMinutosAHorasYMinutos(data.runtime);

  return (
    <div className="w-[90%] m-auto 2xl:w-full">
      <div className="flex flex-col gap-4 py-8 xl:flex-row">
        <section className="relative w-full flex justify-end items-center xl:w-[50%]">
          <img
            src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
            alt={data.original_title}
            className="absolute left-0 w-[25%]"
          />

          <img
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            alt={data.original_title}
            className="w-[90%]"
          />
        </section>

        <section className="w-full m-auto flex flex-col gap-4 xl:w-[50%] xl:p-8">
          <div className="flex flex-col">
            <h1 className="text-sky-500 text-3xl font-semibold">
              {data.title}
            </h1>

            <div className="flex gap-2">
              <p className="text-neutral-400 text-center">
                {orderDate(data.release_date)}
              </p>
              <span className="text-neutral-50">•</span>
              <p className="text-neutral-400 text-center">
                {horas}h {minutos}m
              </p>
            </div>
            <ul className="flex text-neutral-400">
              {data.genres.map((genre, index) => (
                <>
                  <li key={genre.id}>{genre.name}</li>
                  {index < data.genres.length - 1 && <span>,</span>}
                </>
              ))}
            </ul>
          </div>

          <p className="text-neutral-400 text-xl">{data.tagline}</p>

          <div>
            <p className="text-orange-500 font-semibold text-2xl">Sipnosis</p>
            <span className="text-neutral-100">{data.overview}</span>
          </div>

          <p className="text-white">
            Puntuación: {data.vote_average.toFixed(1)}
          </p>
          <AddWatched movie={data} />
        </section>
      </div>

      <section className="w-full m-auto py-8 flex flex-col gap-4 xl:w-[100%] ">
        <CreditsMovie id={data.id} />

        <ReviewsMovie id={data.id} />
      </section>
    </div>
  );
}
