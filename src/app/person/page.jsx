import { Suspense } from "react";
import { getPopularPersons } from "../services/getPopularPersons";
import Loading from "../Loading";
import SearchInput from "@/components/SearchInput";
import Pagination from "@/components/Pagination";
import CardPerson from "./components/CardPerson";

export default async function PersonPage({ searchParams }) {
  const query = searchParams?.search || "";
  const page = searchParams?.page || "1";
  const persons = await getPopularPersons(query, page);
  return (
    <div className="">
      <SearchInput />

      <Suspense key={query} fallback={<Loading />}>
        <div className="w-[90%] m-auto flex flex-wrap justify-between gap-y-8">
          {persons?.results.map((person) => (
            <CardPerson key={person.id} person={person} />
          ))}
        </div>
      </Suspense>
      <Pagination currentPage={persons.page} totalPages={persons.total_pages} />
    </div>
  );
}
