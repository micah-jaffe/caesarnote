import React from 'react';
import NotebookIndexItem from './notebooks_index_item';

class NotebooksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchNotebooks()
  }

  render() {
    const notebookIndexItems = this.props.notebooks.map((notebook, i) => (
      <NotebookIndexItem key={`notebook-${i}`} notebook={notebook} />
    ));

    return (
      <div className="notebooks-index-container">
        <h2>Notebooks</h2>

        <header className="notebooks-index-header-container align-middle">
          <h3>My notebook list</h3>

          <span className="align-middle">
            <button id="create-notebook-btn" className="align-middle" onClick={this.props.openCreateNotebookModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00a82d" id="69a" d="M19 17v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2zm-1-2.874a4.002 4.002 0 0 0-2.952 4.497H9V4h7c1.105 0 2 .873 2 1.95v8.176zM6 4h2v14.623H6V4zm9.5 4h-4c-.276 0-.5.15-.5.333v1.334c0 .184.224.333.5.333h4c.276 0 .5-.15.5-.333V8.333C16 8.15 15.776 8 15.5 8z"></path></svg>
              New Notebook
            </button>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#737373" id="47a" d="M8 16.793l-2.146-2.147-.708.708L8.5 18.707l3.354-3.353-.708-.708L9 16.793V5H8v11.793zM12 5h9v1h-9V5zm0 3h7v1h-7V8zm0 3h5v1h-5v-1z"></path></svg></span>
          </span>
        </header>

        <div className="notebooks-table">
          <div className="header-row align-middle">
            <div>Title</div>

            <ul className="align-middle">
              <li>Created By</li>
              <li>Updated</li>
              <li>Shared With</li>
              <li>Actions</li>
            </ul>
          </div>

          {notebookIndexItems}

        </div>
      </div>
    );
  }
};

export default NotebooksIndex;