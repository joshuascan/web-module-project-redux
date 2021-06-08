export const FAVORITE_MOVIE = "FAVORITE_MOVIE";

export const favoriteMovie = (movie) => {
  return { type: FAVORITE_MOVIE, payload: movie };
};
