import React from 'react';

class Notebook extends React.Component {
  componentDidMount() {
    this.props.fetchNotebook(this.props.notebook.id);
  }

  render() {
    return (
      <div className="notebook-container">
        <div>
          <h1>{this.props.notebook.name}</h1>
        </div>
      </div>
    );
  }
};

export default Notebook;