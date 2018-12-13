import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { 
  fetchNotebooks,
  createNotebook,
  updateNotebook,
  deleteNotebook
} from '../../../actions/notebook_actions';

const mapStateToProps = (state) => ({
  notebooks: Object.values(state.entities.notebooks)
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
  deleteNotebook: () => dispatch(deleteNotebook())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);