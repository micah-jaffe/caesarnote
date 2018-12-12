import React from 'react';

const Main = (props) => {
  return (
    <main className="main">
      <h1>Main</h1>
      <button onClick={props.logout}>Logout</button>
    </main>
  );
};

export default Main;