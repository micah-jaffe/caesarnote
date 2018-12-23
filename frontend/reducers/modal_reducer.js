import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

 const modalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { 
        name: action.name, 
        data: action.data 
      };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;