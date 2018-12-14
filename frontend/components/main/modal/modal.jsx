import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import NotebookCreateFormContainer from '../notebooks/notebook_create_form_container';
import NotebookUpdateFormContainer from '../notebooks/notebook_update_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'create_notebook':
      component = <NotebookCreateFormContainer />;
      break;
    case 'update_notebook':
      component = <NotebookUpdateFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div className="close-modal" onClick={closeModal}>
          <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" className="svg"><path id="hover-darken" fill="#b3b3b3" d="M7.728 6.314l4.95-4.95L11.263-.05 6.313 4.9 1.365-.05-.05 1.364l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.415-4.95-4.95z"></path></svg>
        </div>
        
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);