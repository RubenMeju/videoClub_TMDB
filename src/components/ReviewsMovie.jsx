import { getReviewByID } from "@/app/services/getReviewByID";

export default async function ReviewsMovie(id) {
  const reviews = await getReviewByID(id);
  console.log(reviews);

  return (
    <details>
      <summary className="text-orange-500 text-2xl cursor-pointer">
        Criticas
      </summary>
      {reviews.results.map((review) => (
        <div key={review.id} className="py-2">
          <h1 className="text-white">{review.author}</h1>
          <span className="text-white">{review.content}</span>
        </div>
      ))}
    </details>
  );
}
