import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(null, mapDispatchToProps)(Main));