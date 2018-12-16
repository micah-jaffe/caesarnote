import { connect } from 'react-redux';
import NotebooksIndexItem from './notebooks_index_item';
import {
  updateNotebook,
  deleteNotebook
} from '../../../actions/notebook_actions';
import {
  openModal,
  closeModal
} from '../../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => ({
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  deleteNotebook: (id) => dispatch(deleteNotebook(id)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(NotebooksIndexItem);