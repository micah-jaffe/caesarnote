import React from 'react';
import ReactQuill from 'react-quill';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note;

    this.handleInput = this.handleInput.bind(this);
    this.handleQuillChange = this.handleQuillChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.note.id !== prevProps.note.id) {
      this.setState(Object.assign({}, this.props.note))
    }
  }

  handleInput(field) {
    return e => {
      this.setState(
        { [field]: e.target.value },
        () => this.props.updateNote(this.state)
      );
    };
  }

  handleQuillChange(input, delta, source, editor) {
    this.setState(
      { body: input },
      () => this.props.updateNote(this.state)
    );
  }

  renderNoteHeader() {
    return (
      <div className="note-show-header align-middle">
        <div>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="svg"><g fill="none"><path d="M0 0h20v20H0z"></path><path d="M3.405 4.4v1.997a.7.7 0 0 1-1.4 0V2.774a.69.69 0 0 1 .19-.572A.694.694 0 0 1 2.713 2h3.693a.7.7 0 1 1 0 1.399h-2.02l4.222 4.216a.7.7 0 1 1-.991.991L3.405 4.4zM12.6 17a.7.7 0 1 1 0-1.398h2.019l-4.243-4.239a.7.7 0 1 1 .991-.99L15.6 14.6v-1.996a.7.7 0 0 1 1.4 0V16.3a.7.7 0 0 1-.7.699h-3.7z" fill="#000" opacity=".34"></path></g></svg>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="svg"><g fill="none"><path d="M0 0h20v20H0z"></path><path fill="#CCC" d="M10 18h1V2h-1z"></path></g></svg>
          <span>{this.props.notebook.name}</span>
        </div>

        <div className="align-middle">
          <button className="share-btn">Share</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="note-dropdown-icon svg"><path fill="#7a8083" d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="note-show">
        
        {this.renderNoteHeader()}

        <div className="note-form">
          <form onSubmit={this.handleSubmit}>
            <input
              className="note-title"
              type="text" 
              value={this.state.title === 'Untitled' ? '' : this.state.title} 
              onChange={this.handleInput('title')} 
              placeholder="Title"
            />

            <ReactQuill
              className="quill-editor"
              value={this.state.body}
              onChange={this.handleQuillChange}
            />
           
           
          </form>
        </div>

        <div className="note-show-tags">
          No tags
        </div>
      </section>
    );
  }

};
 
export default NoteShow;
