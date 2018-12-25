import { combineReducers } from "redux";
import searchReducer from "./search_reducer";

export default combineReducers({
  search: searchReducer
});
