import { NavLink, useLocation, useParams, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { fetchMoviesByid } from "../../../api/api";
import { Box } from "../../../utils/Box";
import { BackButton } from "../../Buttons/buttons.styled";
import { Loader } from "../../Loader/Loader";
const CardInfo = () => {
  const { movieId } = useParams();
  const [state, setState] = useState();
  const location = useLocation();

  const prevLocation = location.state?.from ?? "/";

  useEffect(() => {
    fetchMoviesByid(movieId).then(({ data }) => {
      setState(data);
    });
  }, [movieId]);

  return (
    <>
      {!state ? (
        <Loader />
      ) : (
        <>
          <BackButton to={prevLocation}>Back</BackButton>
          <Box display="flex">
            <img
              src={`https://image.tmdb.org/t/p/w300/${state.poster_path}`}
              alt={`${state.original_title}`}
              width="300"
              height="500"
            />
            <Box p={3} bg="#fff" mx={4} border="normal" borderRadius="lg">
              <h2>{state.original_title}</h2>
              <span>{state.original_title}</span>
              <h3>Overview</h3>
              <span>{state.overview}</span>
              <h3>Genres</h3>
              <span>
                {state.genres.map((genres) => genres.name).join(", ")}
              </span>
              <h3>More: </h3>
              <ul>
                <li>
                  <NavLink to={`cast`}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={`reviews`}>Reviews</NavLink>
                </li>
              </ul>
              <Suspense fallback={<Loader></Loader>}>
                <Outlet></Outlet>
              </Suspense>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
export default CardInfo;
