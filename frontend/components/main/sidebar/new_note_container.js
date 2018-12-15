import React from 'react';
import { connect } from 'react-redux';
import NewNote from './new_note';
import { createNote } from '../../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  notebookId: 21 //ownProps.match.params.notebookId
}); 

const mapDispatchToProps = (dispatch) => ({
  createNote: (note) => dispatch(createNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);