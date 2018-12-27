import { connect } from 'react-redux';
import NotebookForm from './notebook_form';
import { createNotebook } from '../../../actions/notebook_actions';
import { closeModal } from '../../../actions/modal_actions';
import { nullNotebook } from '../../../util/null_entity_util';

const mapStateToProps = ({ session }) => ({
  userId: session.id,
  formType: 'create',
  notebook: nullNotebook
});

const mapDispatchToProps = (dispatch) => ({
  action: (notebook) => dispatch(createNotebook(notebook)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookForm); 