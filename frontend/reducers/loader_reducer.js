import { START_LOADING } from '../actions/loader_actions';
import { RECEIVE_NOTES } from '../actions/note_actions';

const loaderReducer = (state = false, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTES:
        return false;
    case START_LOADING:
        return true;
    default:
      return state;
  }
};

export default loaderReducer;