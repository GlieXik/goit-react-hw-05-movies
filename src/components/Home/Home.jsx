import fetchMovies from "../../api/api";
import { useState, useEffect } from "react";
import Card from "./Card/Card";
const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(({ data }) => setTopMovies(data.results));
  }, []);

  return (
    <>
      <Card options={topMovies}></Card>
    </>
  );
};
export default Home;
