import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id]
});

export default connect(mapStateToProps)(UserProfile);