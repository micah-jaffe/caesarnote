import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import { fetchNotebook } from '../../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  notebook: state.entities.notebooks[ownProps.match.params.notebookId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow);