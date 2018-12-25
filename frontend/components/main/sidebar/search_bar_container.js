import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';

const mapDispatchToProps = (dispatch) => ({
  filterSearchQuery: (query) => (console.log(query))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(SearchBar)); 