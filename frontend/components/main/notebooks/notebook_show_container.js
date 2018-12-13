import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookShow from './notebook_show';
import { fetchNotebook } from '../../../actions/notebook_actions';

const defaultNotebook = { 
  id: null,
  name: null,
  user_id: null
};

const mapStateToProps = ({ entities: { notebooks } }, ownProps) => ({
  notebook: notebooks[ownProps.match.params.notebookId] || defaultNotebook
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow));