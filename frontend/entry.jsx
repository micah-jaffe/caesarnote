import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { login, signup, logout } from './actions/session_actions';
import { fetchNotebook, fetchNotebooks, createNotebook, updateNotebook, deleteNotebook} from './actions/notebook_actions';
import { fetchNotes, createNote, updateNote, deleteNote } from './actions/note_actions'
import { fetchTags, createTag, deleteTag } from './actions/tag_actions'

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      }
    };

    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  
  // TESTING
  
  //
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  window.fetchNotebooks = fetchNotebooks;
  window.fetchNotebook = fetchNotebook;
  window.createNotebook = createNotebook;
  window.updateNotebook = updateNotebook;
  window.deleteNotebook = deleteNotebook;

  window.fetchNotes = fetchNotes;
  window.createNote = createNote;
  window.updateNote = updateNote;
  window.deleteNote = deleteNote;

  // window.fetchNoteTags = fetchNoteTags;
  // window.createNoteTag = createNoteTag;
  // window.deleteNoteTag = deleteNoteTag;

  window.fetchTags = fetchTags;
  window.createTag = createTag;
  window.deleteTag = deleteTag;


  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store}/>,
    root
  )
});