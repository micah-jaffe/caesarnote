import React from 'react';
import Dropdown from '../modal/dropdown';
import { Link } from 'react-router-dom';

class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.openPaywall = this.openPaywall.bind(this);
  }

  showDropdown() {
    this.setState({ dropdown: true })
  }

  hideDropdown() {
    this.setState({ dropdown: false })
  }

  openPaywall() {
    this.props.openModal('paywall');
  }

  render() {
    const { id, name } = this.props.notebook;
    const { notes, selectNotebookNotes } = this.props;
    const numNotes = Object.keys(notes).length > 0 ? selectNotebookNotes(id, notes).length : '';

    const dropdownItems = {
      "Move to...": this.openPaywall,
      "Share notebook...": this.openPaywall,
      "Rename notebook": () => this.props.openModal('update_notebook', this.props.notebook),
      "Delete notebook": () => this.props.deleteNotebook(id).then(this.hideDropdown()),
      "Add shortcut": this.openPaywall,
      "Set as default notebook": this.openPaywall,
    };


    return (
      <div className="notebooks-index-item align-middle">
        <div className="notebook-title-container align-middle">
          <svg width="6" height="9" viewBox="2 240 6 9" xmlns="http://www.w3.org/2000/svg" className="svg notebook-index-icon"><path fill="#9B9B9B" d="M2 240l6 4.5-6 4.5z"></path></svg>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="svg notebook-index-icon" viewBox="0 0 24 24"><path fill="#313131" d="M16 8.33c0-.18-.22-.33-.5-.33h-4c-.28 0-.5.15-.5.33v1.34c0 .18.22.33.5.33h4c.28 0 .5-.15.5-.33zM18 6v11a2 2 0 0 1-2 2H9V4h7a2 2 0 0 1 2 2zM6 4h2v15H6z"></path></svg>
          <Link className="notebook-link" to={`/main/notebooks/${id}`}>{name}</Link>
          <span className="notebook-notes-count">({numNotes})</span>
        </div>

        <ul className="align-middle">
          <li>-</li>
          <li>{this.props.notebook.last_updated}</li>
          <li>Only you</li>
          <li 
            className="notebook-actions-icon" 
            tabIndex="0"
            onFocus={this.showDropdown}
            onBlur={this.hideDropdown}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="svg"><path fill="#7a8083" d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>
            <Dropdown visible={this.state.dropdown} classname="index-item" items={dropdownItems}/>
          </li>
        </ul>
      </div>
    );
  }
};

export default NotebooksIndexItem;