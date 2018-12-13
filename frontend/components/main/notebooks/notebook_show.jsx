import React from 'react';

class NotebookShow extends React.Component {
  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
  }

  render() {
    return (
      <div className="notebook-container">
        <header>
          <h1>{this.props.notebook ? this.props.notebook.name : 'testeroo'}</h1>
          <div className="align-middle">
            <div>
              0 notes
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svg"><defs><path id="65a" d="M8 16.793l-2.146-2.147-.708.708L8.5 18.707l3.354-3.353-.708-.708L9 16.793V5H8v11.793zM12 5h9v1h-9V5zm0 3h7v1h-7V8zm0 3h5v1h-5v-1z"></path></defs><use fill="#000" fillRule="nonzero"></use></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="svg"><defs><path id="144a" d="M16.8 20H7.2c-.663 0-1.2-.544-1.2-1.216V9.597c0-.359.134-.665.397-.905l4.8-4.378a1.183 1.183 0 0 1 1.606 0l4.8 4.378c.263.24.397.546.397.905v9.187c0 .672-.537 1.216-1.2 1.216zM17 9.518L12 5 7 9.518V19h10V9.518zM9.5 16h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm0-2h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm2.5-2.322a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25zm0-2.275a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3z"></path></defs><use fill="#000" fillRule="evenodd"></use></svg>
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="svg"><path d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="#000" fillRule="evenodd"></path></svg>
            </div>

          </div>
        </header>
      </div>
    );
  }
};

export default NotebookShow;