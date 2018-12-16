import {
  SELECT_NOTE,
} from '../actions/selection_actions';

const noteSelectorReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_NOTE:
      return action.id;
    default:
      return state;
  }
};

export default noteSelectorReducer;