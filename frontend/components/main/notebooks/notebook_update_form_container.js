import { connect } from 'react-redux';
import NotebookForm from './notebook_form';
import { updateNotebook } from '../../../actions/notebook_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = ({ session }) => ({
  userId: session.id,
  formType: 'update'
});

const mapDispatchToProps = (dispatch) => ({
  action: (notebook) => dispatch(updateNotebook(notebook)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookForm);