import React from 'react';
import Modal from './modal/modal';
import Sidebar from './sidebar/sidebar';
import NotesIndexContainer from './notes/notes_index_container';
import NotebookShowContainer from './notebooks/notebook_show_container';
import NotebooksIndexContainer from './notebooks/notebooks_index_container';
import TagsIndexContainer from './tags/tags_index_container';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Modal />
        <Sidebar />

        <Switch>
          <Route path="/main/notebooks/:notebookId" component={NotebookShowContainer} />
          <Route path="/main/notebooks" component={NotebooksIndexContainer} />
          <Route path="/main/tags" component={TagsIndexContainer} />
          <Route path="/main/trash" component={NotesIndexContainer} />
          <Route exact path="/main" component={NotesIndexContainer} />
          <Redirect to="/main" />
        </Switch>
      </main>
    );
  } 
};

export default Main;
