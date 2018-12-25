import { SEARCH_QUERY } from "../actions/search_actions";

const initialState = { searchQuery: "" };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return action.queryString;
    default:
      return state;
  }
};

export default searchReducer;
