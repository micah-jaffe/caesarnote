import { START_LOADING } from '../actions/loader_actions';
import { 
  RECEIVE_NOTES, 
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';
import { 
  RECEIVE_NOTEBOOKS, 
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/note_actions';

const loaderReducer = (state = false, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTES:
        return false;
    case RECEIVE_NOTE:
      return false;
    case REMOVE_NOTE:
      return false;
    case RECEIVE_NOTEBOOKS:
        return false;
    case RECEIVE_NOTEBOOK:
      return false;
    case REMOVE_NOTEBOOK:
      return false;
    case START_LOADING:
        return true;
    default:
      return state;
  }
};

export default loaderReducer;