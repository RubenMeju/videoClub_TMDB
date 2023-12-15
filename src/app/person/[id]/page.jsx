import { getPersonByID } from "@/app/services/getPersonByID";
import { orderDate } from "@/utils/orderDate";

export default async function PersonIdPage({ params }) {
  const person = await getPersonByID(params.id);
  console.log(person);
  return (
    <div className="w-[90%] m-auto">
      <img
        src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
        alt={person.name}
        className="m-auto py-8"
      />
      <section className="text-neutral-100 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">{person.name}</h1>
        <label className="flex flex-col font-semibold">
          Fecha de nacimiento
          <span className="text-neutral-300 font-normal">
            {orderDate(person.birthday)}
          </span>
        </label>
        <label className="flex flex-col font-semibold">
          Lugar de nacimiento
          <span className="text-neutral-300 font-normal">
            {person.place_of_birth}
          </span>
        </label>
        <label className="font-semibold">
          Biografía
          <p className="text-neutral-300 font-normal"> {person.biography}</p>
        </label>
      </section>
    </div>
  );
}
