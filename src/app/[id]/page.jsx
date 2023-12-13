import { convertirMinutosAHorasYMinutos, orderDate } from "@/utils/orderDate";
import { getMovieByID } from "../services/getMovieByID";
import AddWatched from "@/components/client/AddWatched";
import ReviewsMovie from "@/components/ReviewsMovie";
import CreditsMovie from "@/components/CreditsMovie";

export default async function MovieIdPage({ params }) {
  const data = await getMovieByID(params?.id);
  //console.log(data);

  const { horas, minutos } = convertirMinutosAHorasYMinutos(data.runtime);

  return (
    <div className="w-full mt-20 xl:flex">
      <div className="relative max-w-xl pt-8 flex justify-end items-center m-auto xl:w-[50%]">
        <img
          src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
          alt={data.original_title}
          className="absolute left-4 w-[25%]"
        />

        <img
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
          alt={data.original_title}
          className="w-[85%] xl:w-full"
        />
      </div>

      <section className="w-[90%] m-auto py-8 flex flex-col gap-4 xl:w-[50%] xl:p-8">
        <div className="flex flex-col">
          <h1 className="text-white text-3xl font-semibold">{data.title}</h1>

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
          <p className="text-neutral-100 font-semibold text-2xl">Sipnosis</p>
          <span className="text-neutral-100">{data.overview}</span>
        </div>

        <p className="text-white">Puntuación: {data.vote_average}</p>
        <AddWatched movie={data} />

        <CreditsMovie id={data.id} />

        <ReviewsMovie id={data.id} />
      </section>
    </div>
  );
}
