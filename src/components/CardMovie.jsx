import Link from "next/link";

export default function CardMovie({ movie }) {
  return (
    <Link
      href={`/${movie.id}`}
      key={movie.id}
      className="w-[48%] md:w-auto bg-neutral-950 hover:scale-105 transition duration-300"
    >
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.original_title}
        className="w-full"
      />
    </Link>
  );
}
