import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchNotebook, fetchNotebooks } from '../../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  notebook: state.entities.notebooks[ownProps.match.params.notebookId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook);