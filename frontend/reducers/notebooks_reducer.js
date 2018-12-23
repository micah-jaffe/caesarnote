import { RECEIVE_NOTEBOOKS, RECEIVE_NOTEBOOK, REMOVE_NOTEBOOK } from '../actions/notebook_actions';

const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      return Object.assign({}, state, { [action.notebook.id]: action.notebook });
    case REMOVE_NOTEBOOK:
      const newState = Object.assign({}, state);
      delete newState[action.notebookId]
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;