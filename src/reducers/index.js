import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
