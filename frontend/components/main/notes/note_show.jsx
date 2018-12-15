import React from 'react';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = this.props.note;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    let that = this;
    e.preventDefault();
    console.log(that.state);
    
    // const user = Object.assign({}, this.state);
    // user.username = user.email.substr(0, user.email.indexOf('@'));
    // this.props.processForm(user);
  }

  render() {
    debugger
    return (
      <section className="note-show">
        <div className="note-show-header">
          No header
        </div>

        <div className="note-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleInput('title')} value={this.props.note.title} />
            <textarea cols="30" rows="10" onChange={this.handleInput('body')} value={this.props.note.body}></textarea>
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