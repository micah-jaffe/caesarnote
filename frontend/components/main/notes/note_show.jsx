import React from 'react';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note
  }

  componentDidUpdate(prevProps) {
    if (this.props.note.id !== prevProps.note.id) {
      this.setState(this.props.note)
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

  render() {
    return (
      <section className="note-show">
        <div className="note-show-header">
          No header
        </div>

        <div className="note-form">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              onChange={this.handleInput('title')} 
              value={this.state.title} 
              placeholder="Title"
            />

            <textarea 
              onChange={this.handleInput('body')} 
              value={this.state.body}
              placeholder="Start writing or drag files"
            >
            </textarea>
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