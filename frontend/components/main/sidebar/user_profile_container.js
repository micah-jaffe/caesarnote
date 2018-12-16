import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../../actions/session_actions';
import { currentUser } from '../../../reducers/selectors';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state) => ({
  currentUser: currentUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);