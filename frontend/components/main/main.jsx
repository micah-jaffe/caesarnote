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
        <h1>Main</h1>
        <button onClick={this.props.logout}>Logout</button>
        
      </main>
    );
  }
};

export default Main;