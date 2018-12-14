import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { 
  fetchNotebooks,
  createNotebook,
  updateNotebook,
  deleteNotebook
} from '../../../actions/notebook_actions';
import {
  openModal,
  closeModal
} from '../../../actions/modal_actions';

const mapStateToProps = (state) => ({
  notebooks: Object.values(state.entities.notebooks)
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  openCreateNotebookModal: () => dispatch(openModal('create_notebook')),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);