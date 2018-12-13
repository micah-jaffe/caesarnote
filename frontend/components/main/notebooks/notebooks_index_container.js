import { connect } from 'react-redux';
import NotebooksIndex from './notebooks_index';
import { fetchNotebooks } from '../../../actions/notebook_actions';

const mapDispatchToProps = (dispatch) => ({
  fetchNotebooks: () => dispatch(fetchNotebooks())
});

export default connect(null, mapDispatchToProps)(NotebooksIndex);