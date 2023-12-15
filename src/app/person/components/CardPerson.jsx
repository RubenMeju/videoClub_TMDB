import Link from "next/link";

export default function CardPerson({ person }) {
  return (
    <Link
      href={`/person/${person.id}`}
      key={person.id}
      className="w-[48%] h-full md:w-auto bg-neutral-100 hover:scale-105 transition duration-300 max-w-[200px]"
    >
      <div className="w-full h-[80%]">
        <img
          src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-20 px-2 flex justify-center items-center">
        <h1 className="text-xl font-semibold">{person.name}</h1>
      </div>
    </Link>
  );
}
