import { START_LOADING } from '../actions/loader_actions';
import { RECEIVE_NOTES } from '../actions/notes_actions';

const initialState = { loading: false };

const loaderReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTES:
      return Object.assign({}, state, { loading: false })
    default:
      return state;
  }
};

export default loaderReducer;