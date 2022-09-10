import { Box } from "../../../utils/Box";
import { CardWrapper, CardText } from "./Card.styled";
import { NavLink } from "react-router-dom";

const Card = ({ options }) => {
  return (
    <>
      <Box display="flex" gridGap={20} flexWrap="wrap" justifyContent="center">
        {options.map(({ id, original_title, poster_path }) => (
          <CardWrapper key={id}>
            <NavLink to={`movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="poster"
                width="340"
              />
              <CardText>{original_title}</CardText>
            </NavLink>
          </CardWrapper>
        ))}
      </Box>
    </>
  );
};
export default Card;
