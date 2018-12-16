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

  render() {
    // debugger;
    return (
      <section className="note-show">
        <div className="note-show-header">
          No header
        </div>

        <div className="note-form">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              value={this.state.title} 
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

{/* <textarea
  onChange={this.handleInput('body')}
  value={this.state.body}
  placeholder="Start writing or drag files"
> 
  </textarea>
*/}