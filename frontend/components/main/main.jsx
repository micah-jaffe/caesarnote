import React from 'react';
import Sidebar from './sidebar/sidebar';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        <Sidebar />
      </main>
    );
  }
};

export default Main;