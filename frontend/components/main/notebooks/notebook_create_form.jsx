import React from 'react';

class NotebookCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = Object.assign({}, this.state);
    notebook.user_id = this.props.userId;
    this.props.action(notebook);
    this.props.closeModal();
  }

  renderHeading() {
    if (this.props.formType === 'create') {
      return (
        <>
          <h2>Create new notebook</h2>
          <p>Notebooks are useful for grouping notes around a common topic. They can be private or shared.</p>
        </>
      );
    } else if (this.props.formType === 'update') {
      return (
        <>
          <h2>Rename notebook</h2>
        </>
      );
    }
  }

  render() {
    return (
      <div className="create-notebook-modal">
        {this.renderHeading()}

        <form className="create-notebook-form" onSubmit={this.handleSubmit}>
          <label>
            Name
            <br/>
            <input className="form-input"
              type="text"
              placeholder="Notebook name"
              onChange={this.handleInput('name')}
              value={this.state.name}
            />
          </label>

          <div className="submittal-container">
            <span className="cancel-btn" onClick={this.props.closeModal}>Cancel</span>
            <input className="continue-btn" type="submit" value="Continue" />
          </div>
        </form>
      </div>
    );
  }
};

export default NotebookCreateForm;