import { connect } from 'react-redux';
import NotebookCreateForm from './notebook_create_form';
import { createNotebook } from '../../../actions/notebook_actions';
import { currentUser } from '../../../reducers/selectors';
import { closeModal } from '../../../actions/modal_actions';


const mapStateToProps = ({ session }) => ({
  userId: session.id,
  formType: 'update'
});

const mapDispatchToProps = (dispatch) => ({
  action: (notebook) => dispatch(createNotebook(notebook)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookCreateForm);