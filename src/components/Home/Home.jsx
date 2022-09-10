import { fetchMovies } from "../../api/api";
import { useState, useEffect } from "react";
import Card from "./Card/Card";
import { Loader } from "../Loader/Loader";
const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetchMovies()
      .then(({ data }) => {
        setTopMovies(data.results);
      })
      .finally(() => setLoader(false));
  }, []);

  return <>{loader ? <Loader /> : <Card options={topMovies}></Card>}</>;
};
export default Home;
