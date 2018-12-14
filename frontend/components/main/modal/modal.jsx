import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import NotebookCreateForm from '../notebooks/notebook_create_form';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'create_notebook':
      component = <NotebookCreateForm/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" >
      <div className="modal-child" onClick={e => e.stopPropagation()}>
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