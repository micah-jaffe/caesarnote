import React from 'react';

class NotebooksIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotebooks()
  }

  render() {
    return (
      <div className="notebooks-index-container">
        <h2>Notebooks</h2>

        <header className="notebooks-index-header-container horizontal">
          <span>My notebook list</span>
          <button>
            New Notebook
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=""><defs><path id="65a" d="M8 16.793l-2.146-2.147-.708.708L8.5 18.707l3.354-3.353-.708-.708L9 16.793V5H8v11.793zM12 5h9v1h-9V5zm0 3h7v1h-7V8zm0 3h5v1h-5v-1z"></path></defs><use fill="#000" fillRule="nonzero"></use></svg>
          </button>
        </header>

      </div>
    );
  }
};

export default NotebooksIndex;