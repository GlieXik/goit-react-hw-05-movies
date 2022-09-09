import axios from "axios";
const fetchMovies = async () => {
  try {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=96d1d57673138392a18193bca23574c5"
    );
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchMovies;
