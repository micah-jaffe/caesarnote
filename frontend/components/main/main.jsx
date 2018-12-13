import React from 'react';
import Sidebar from './sidebar/sidebar';
import NotebooksIndexContainer from './notebooks/notebooks_index_container';
import { Route } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        <Sidebar />

        <Route path="/main/notebooks" component={NotebooksIndexContainer} />
      </main>
    );
  }
};

export default Main;
