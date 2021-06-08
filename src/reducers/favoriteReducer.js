import { FAVORITE_MOVIE } from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_MOVIE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
