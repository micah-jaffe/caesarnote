import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../../actions/session_actions';
import { currentUser } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: currentUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);