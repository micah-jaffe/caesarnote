import { connect } from 'react-redux';
import withRouter from 'react-router-dom';
import NavBar from './nav_bar';
import { openModal } from '../../../actions/modal_actions';

const mapDispatchToProps = (dispatch) => ({
  openPaywall: () => dispatch(openModal('paywall'))
});

// come back to withRouter - has to be inside a routed component?
export default connect(null, mapDispatchToProps)(NavBar);