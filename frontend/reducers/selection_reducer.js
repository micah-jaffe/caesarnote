import {
  SELECT_NOTE,
} from '../actions/selection_actions';

const selectionReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return action.note;
    default:
      return state;
  }
};

export default selectionReducer;