import Link from "next/link";
import AddFavorites from "./client/AddFavorites";
import { orderDate } from "@/utils/orderDate";

export default function CardMovie({ movie }) {
  return (
    <Link
      href={`/${movie.id}`}
      key={movie.id}
      className="w-[48%] bg-neutral-950"
    >
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.original_title}
        className=""
      />
    </Link>
  );
}
