import React from 'react';
import Dropdown from '../modal/dropdown';
import Editor from './editor';
import { Link } from 'react-router-dom';
import { richCaesarCipher } from '../../../util/cipher_util';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.note;
    this.state.fullscreen = false;
    this.state.dropdown = false;

    this.handleInput = this.handleInput.bind(this);
    this.handleQuillChange = this.handleQuillChange.bind(this);
    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.openPaywall = this.openPaywall.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.cipherNote = this.cipherNote.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.note.id !== prevProps.note.id) {
      this.setState(Object.assign({}, this.props.note));
      this.props.fetchNotebook(this.state.notebook_id);
    }
  }

  toggleFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  showDropdown() {
    this.setState({ dropdown: true });
  }

  hideDropdown() {
    this.setState({ dropdown: false });
  }

  openPaywall() {
    this.props.openModal('paywall');
  }

  cipherNote() {
    const key = this.state.is_ciphered ? 1 : -1;

    this.setState({
      title: richCaesarCipher(this.state.title, key),
      body: richCaesarCipher(this.state.body, key),
      is_ciphered: !this.state.is_ciphered,
    }, 
      () => this.props.updateNote(this.state)
    );
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.target.value },
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
    const dropdownItems = {
      "Move to...": this.openPaywall,
      "Share note...": this.openPaywall,
      "Duplicate note": this.openPaywall,
      "Delete note": () => this.props.deleteNote(this.props.note.id),
      "Add shortcut": this.openPaywall,
      "Copy internal link": this.openPaywall,
      "View note info...": this.openPaywall
    };

    return (
      <>
        <div className="align-middle">
          <svg onClick={this.toggleFullscreen} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="svg"><g fill="none"><path d="M0 0h20v20H0z"></path><path d="M3.405 4.4v1.997a.7.7 0 0 1-1.4 0V2.774a.69.69 0 0 1 .19-.572A.694.694 0 0 1 2.713 2h3.693a.7.7 0 1 1 0 1.399h-2.02l4.222 4.216a.7.7 0 1 1-.991.991L3.405 4.4zM12.6 17a.7.7 0 1 1 0-1.398h2.019l-4.243-4.239a.7.7 0 1 1 .991-.99L15.6 14.6v-1.996a.7.7 0 0 1 1.4 0V16.3a.7.7 0 0 1-.7.699h-3.7z" fill="#000" opacity=".34"></path></g></svg>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="svg"><g fill="none"><path d="M0 0h20v20H0z"></path><path fill="#CCC" d="M10 18h1V2h-1z"></path></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg" width="14" height="14" viewBox="0 0 14 14"><path fill="#7a8083" d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
          <Link id="parent-notebook-link" to={`/main/notebooks/${this.props.notebook.id}`}>{this.props.notebook.name}</Link>
        </div>

        <div className="align-middle">
          <button className="share-btn" onClick={this.cipherNote}>{this.state.is_ciphered ? "Decipher" : "Cipher"}</button>
          <svg tabIndex="0" onFocus={this.showDropdown} onBlur={this.hideDropdown} nxmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="note-dropdown-icon svg"><path fill="#7a8083" d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>
          <Dropdown visible={this.state.dropdown} classname="note-show-dropdown" items={dropdownItems} />
        </div>
      </>
    );
  }

  renderNoteTitle() {
    return (
      <>
        <input
          className="note-title"
          type="text"
          value={this.state.title === 'Untitled' ? '' : this.state.title} 
          onChange={this.handleInput('title')}
          placeholder="Title"
      />
      </>
    );
  }

   renderQuillEditor() {
    return (
      <Editor 
        value={this.state.body} 
        onChange={this.handleQuillChange} 
      />
    );
  }

  renderNoteTags() {
    return (
      <>
        <svg width="21" height="23" viewBox="0 0 21 23" xmlns="http://www.w3.org/2000/svg" className="svg"><path d="M11.36 12.488H3.513v1.128h6.776a6.538 6.538 0 0 1 1.073-1.128zm-2.05 3.024H3.512v1.104H9.06a6.46 6.46 0 0 1 .25-1.104zm6.801 1.377v-2.445H14.89v2.445h-2.445v1.222h2.445v2.445h1.222V18.11h2.445V16.89H16.11zM15.512 12H15.5c-.52 0-1.023.072-1.5.207V7.16l-6-5.4-6 5.4v11.352h8.093A5.46 5.46 0 0 0 10.6 20H2a1.48 1.48 0 0 1-1.488-1.488V7.16c0-.432.168-.816.48-1.104l6-5.4a1.48 1.48 0 0 1 2.016 0l6 5.4c.312.288.504.672.504 1.104V12zM6.128 7.256c0-1.032.84-1.872 1.872-1.872s1.872.84 1.872 1.872S9.032 9.128 8 9.128a1.874 1.874 0 0 1-1.872-1.872zm2.616 0A.733.733 0 0 0 8 6.512a.733.733 0 0 0-.744.744c0 .408.336.744.744.744a.748.748 0 0 0 .744-.744zM15.5 23a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" fill="#C3C3C3" fillRule="evenodd"></path></svg>
        <span>Add tag</span>
      </>
    );
  }

  render() {
    return (
      <section className={"note-show" + (this.state.fullscreen ? " fullscreen" : "")}>

        <div className="note-show-header align-middle">
          {this.renderNoteHeader()}
        </div>

        <div className="note-form">
          <div className="note-title-container">
            {this.renderNoteTitle()}
            <div className="overflow-fix"></div>
          </div>

          <div className="quill-editor-container">
            {this.renderQuillEditor()}
          </div>
        </div>

        <div className="note-show-tags align-middle">
          {this.renderNoteTags()}
        </div>
      </section>
    );
  }

};
 
export default NoteShow;
 