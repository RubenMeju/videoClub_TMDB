import Link from "next/link";
import AddFavorites from "./client/AddFavorites";
import { orderDate } from "@/utils/orderDate";

export default function CardMovie({ movie }) {
  return (
    <div
      key={movie.id}
      className="w-full max-w-sm flex md:flex-col rounded-lg overflow-hidden bg-neutral-950"
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

        <div className="py-4 flex gap-4">
          <button className="px-4 py-2 text-neutral-100 bg-blue-500">
            <Link href={`/${movie.id}`}>Ver más</Link>
          </button>
          <AddFavorites movie={movie} />
        </div>
      </div>
    </div>
  );
}
