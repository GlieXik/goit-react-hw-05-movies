import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchReviews } from "../../../api/api";
import { Loader } from "../../Loader/Loader";
const CardReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetchReviews(movieId).then((res) => setReviews(res));
  }, [movieId]);
  return (
    <>
      {!reviews ? (
        <Loader />
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <div>
                <h3>{review.author}</h3>
                <div>{review.content}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default CardReviews;
