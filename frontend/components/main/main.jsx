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
        <button onClick={this.props.logout}>Logout</button>
        
      </main>
    );
  }
};

export default Main;