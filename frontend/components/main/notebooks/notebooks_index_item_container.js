import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import { updateNotebook, deleteNotebook } from '../../../actions/notebook_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { selectNotebookNotes } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  notes: state.entities.notes,
  selectNotebookNotes
});

const mapDispatchToProps = (dispatch) => ({
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  openModal: (name, data) => dispatch(openModal(name, data)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NotebooksIndexItem);