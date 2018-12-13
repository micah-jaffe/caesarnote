import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);