import { orderDate } from "@/utils/orderDate";
import { getMovieByID } from "../services/getMovieByID";
import AddWatched from "@/components/client/AddWatched";

export default async function MovieIdPage({ params }) {
  const data = await getMovieByID(params?.id);
  console.log(data);

  return (
    <div>
      <div className="relative pt-8 flex justify-end items-center max-w-4xl">
        <img
          src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
          alt={data.original_title}
          className="absolute left-4 w-[25%]"
        />

        <img
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
          alt={data.original_title}
          className="w-[85%]"
        />
      </div>

      <section className="w-[90%] m-auto py-8 flex flex-col gap-4">
        <header>
          <h1 className="text-white text-3xl text-center font-semibold">
            {data.title}
          </h1>

          <p className="text-neutral-400 text-center">
            {orderDate(data.release_date)}
          </p>
        </header>

        <p className="text-neutral-400 text-xl">{data.tagline}</p>

        <div>
          <p className="text-neutral-100 font-semibold text-2xl">Sipnosis</p>
          <span className="text-neutral-100">{data.overview}</span>
        </div>

        <p className="text-white">Puntuación: {data.vote_average}</p>
        <AddWatched movie={data} />
      </section>
    </div>
  );
}
