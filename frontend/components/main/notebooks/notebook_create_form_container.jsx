import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookCreateForm from './notebook_create_form';
import { createNotebook } from '../../../actions/notebook_actions';
import { currentUser } from '../../../reducers/selectors';
import { closeModal } from '../../../actions/modal_actions';


const mapStateToProps = (state) => ({
  currentUser: currentUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookCreateForm));