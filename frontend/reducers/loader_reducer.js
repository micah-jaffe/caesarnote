import { START_LOADING } from '../actions/loader_actions';
import { RECEIVE_NOTES } from '../actions/note_actions';

const initialState = { loading: false };

const loaderReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTES:
      return Object.assign({}, state, { loading: false });
    case START_LOADING:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};

export default loaderReducer;