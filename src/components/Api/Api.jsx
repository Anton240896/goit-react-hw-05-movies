import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

/*   ====== KEY API ======*/

const API_KEY = '992758a4802a699e8df27d4d6efc34fb';

/*   ====== REQUEST API ASYNC FUNCTION ⬇️  ======*/

/*   ====== TREND MOVIES FOR TODAY ======*/
export const requestTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

/*   ====== SEARCH MOVIES ======*/
export const requestSearch = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data.results;
};

/*   ====== MOVIE ======*/
export const requestMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

/*   ====== MOVIE ACTORS ======*/
export const requestActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

/*   ====== MOVIE REVIEWS ======*/
export const requestReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

/*   ====== MOVIE TRAILER ======*/
export const requestTrailer = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/videos?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
