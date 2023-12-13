import { getReviewByID } from "@/app/services/getReviewByID";

export default async function ReviewsMovie(id) {
  const reviews = await getReviewByID(id);
  console.log(reviews);

  return (
    <section className="flex flex-col gap-8">
      <span className="text-3xl text-neutral-100">Criticas</span>
      {reviews.results.map((review) => (
        <div key={review.id}>
          <h1 className="text-white">{review.author}</h1>
          <span className="text-white">{review.content}</span>
        </div>
      ))}
    </section>
  );
}
