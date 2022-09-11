import { useState, useEffect } from "react";
import { fetchSearch } from "../../api/api";
import SearchBar from "../SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import Card from "../Home/Card/Card";
import { Loader } from "../Loader/Loader";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const movieQuery = searchParams.get("query") || "";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!movieQuery) return;
    setLoader(true);
    setMovies([]);
    fetchSearch(movieQuery)
      .then((res) => setMovies(res))
      .finally(() => setLoader(false));
  }, [movieQuery]);

  return (
    <>
      <SearchBar handleSubmit={handleSubmit}></SearchBar>
      {loader ? <Loader /> : ""}
      <Card options={movies}></Card>
    </>
  );
};
export default Movies;
