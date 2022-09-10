import axios from "axios";
export const fetchMovies = async () => {
  try {
    const movies = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=96d1d57673138392a18193bca23574c5"
    );
    return movies;
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchMoviesByid = async (id) => {
  try {
    const moviesId = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=96d1d57673138392a18193bca23574c5`
    );
    return moviesId;
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchCast = async (id) => {
  try {
    const cast = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=96d1d57673138392a18193bca23574c5`
    );
    return cast.data.cast;
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchReviews = async (id) => {
  try {
    const reviews = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=96d1d57673138392a18193bca23574c5`
    );
    return reviews.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
