import React from 'react';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.note;
    // debugger;
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('hello');
    
    // const user = Object.assign({}, this.state);
    // user.username = user.email.substr(0, user.email.indexOf('@'));
    // this.props.processForm(user);
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
            <textarea cols="30" rows="10" onChange={this.handleInput('body')} value={this.state.body}></textarea>
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