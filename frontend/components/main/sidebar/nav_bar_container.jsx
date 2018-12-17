import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => ({
  notebooks: Object.values(state.entities.notebooks)
});

const mapDispatchToProps = (dispatch) => ({
  openPaywall: () => dispatch(openModal('paywall'))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NavBar);