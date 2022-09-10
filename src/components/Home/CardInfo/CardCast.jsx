import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchCast } from "../../../api/api";
import { Loader } from "../../Loader/Loader";
const CardCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState();
  useEffect(() => {
    fetchCast(movieId).then((res) => setCasts(res));
  }, [movieId]);
  console.log(casts);
  return (
    <>
      {!casts ? (
        <Loader />
      ) : (
        <ul>
          {casts.map((cast) => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                    : "https://via.placeholder.com/300x450"
                }
                alt={`${cast.original_name}`}
                width="100"
              />
              <div>{cast.original_name}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default CardCast;
