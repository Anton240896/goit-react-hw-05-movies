import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

/*   ====== FETCH REQUEST API ======*/
const API_KEY = '64832fedcffbe340ec8c3c22e595e81';
const ENGLISH_LANG = 'language=en-US';
const TRENDING = 'trending/movie/day';
const SEARCH = 'search/movie';
const MOVIE = 'movie/';
const CREDITS = '/credits';
const REVIEWS = '/reviews';
const PAGE = 'page=1';
const ADULT_FALSE = 'include_adult=false';

/*   ====== REQUEST API ASYNC FUNCTION ⬇️  ======*/

/*   ====== TREND MOVIES FOR TODAY ======*/
export const requestTrending = async () => {
  const response = await axios.get(`${TRENDING}?${API_KEY}`);
  return response.data.results;
};

/*   ====== SEARCH MOVIES ======*/
export const requestSearch = async keyword => {
  const response = await axios.get(
    `${SEARCH}?${API_KEY}&${ENGLISH_LANG}&${PAGE}&${ADULT_FALSE}&query=${keyword}`
  );
  return response.data.results;
};

/*   ====== MOVIE ======*/
export const requestMovieDetails = async movieId => {
  const response = await axios.get(
    `${MOVIE}${movieId}?${API_KEY}&${ENGLISH_LANG}`
  );
  return response.data;
};

/*   ====== MOVIE ACTORS ======*/
export const requestActors = async movieId => {
  const response = await axios.get(
    `${MOVIE}${movieId}${CREDITS}?${API_KEY}&${ENGLISH_LANG}`
  );
  return response.data.cast;
};

/*   ====== MOVIE REVIEWS ======*/
export const requestReviews = async movieId => {
  const response = await axios.get(
    `${MOVIE}${movieId}${REVIEWS}?${API_KEY}&${ENGLISH_LANG}&${PAGE}`
  );
  return response.data.results;
};
