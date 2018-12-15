import React from 'react';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   id: props.note ? props.note.id : null,
    //   title: props.note ? props.note.title : 'default',
    //   body: props.note ? props.note.body : 'default',
    //   user_id: props.note ? props.note.user_id : null,
    //   notebook_id: props.note ? props.note.notebook_id : null
    // }

    this.state = props.note
    // debugger;
    // debugger;
    // this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // debugger
    if (this.props.note.id !== prevProps.note.id) {
      this.setState(this.props.note)
    }
  }

  handleInput(field) {
    return e => {this.setState({ [field]: e.target.value }); console.log(this.state)};
  }

  handleSubmit(e) {
    let that = this;
    e.preventDefault();
    console.log(that.state);
    this.props.updateNote(this.state);
  }

  handleChange(e) {
    return (e) => this.props.updateForm(this.props.note);
  }

  render() {
    return (
      <section className="note-show">
        <div className="note-show-header">
          No header
        </div>

        <div className="note-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleInput('title')} value={this.state.title} />
            <textarea onChange={this.handleInput} value={this.state.body}></textarea>
            <input type="submit" value="Submit"/>
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