const API_KEY = "59e5e2cc6c24a3ecaa34bae895107a41";

export function fetchTrendMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then((response) => response.json());
}

export function fetchSearchMovies(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((response) => response.json());
}

export function fetcMovieInfo(movieid) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

export function fetchMovieActors(movieid) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
}

export function fetchMovieReviews(movieid) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
}
