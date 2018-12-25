import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';
import { searchQuery } from '../../../actions/search_actions';

const mapDispatchToProps = (dispatch) => ({
  searchQuery: (query) => dispatch(searchQuery(query))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(SearchBar)); 