import React from 'react';
import Dropdown from '../modal/dropdown';
import Editor from './editor';
import TagFormContainer from '../tags/tag_form_container';
import { Link } from 'react-router-dom';
import { richCaesarCipher } from '../../../util/cipher_util';
import Loader from '../modal/loader';

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

  componentDidMount() {
    this.props.fetchTags()
  }

  componentDidUpdate(prevProps) {
    if (this.props.note.id !== prevProps.note.id) {

      // autosave if title or body changes. length is temporary hack
      if (this.state.title !== prevProps.note.title || this.state.body.length !== prevProps.note.body.length) {
        const newNote = Object.assign(this.state, { is_trashed: false });
        this.props.updateNote(newNote);
      }

      this.setState(Object.assign({}, this.props.note));
      this.props.fetchNotebook(this.state.notebook_id);
      this.props.fetchTags();
    }
  }

  // componentWillUnmount() {
  //   if (this.state.title !== this.props.note.title || this.state.body !== this.props.body) {
  //     const newNote = Object.assign(this.state, { is_trashed: false });
  //     this.props.updateNote(newNote);
  //   }
  // }

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
    const randomKey = Math.floor(Math.random() * 25) + 1;
    const key = this.state.cipher_key ? -this.state.cipher_key : randomKey;

    this.setState({
      title: richCaesarCipher(this.state.title, key),
      body: richCaesarCipher(this.state.body, key),
      is_ciphered: !this.state.is_ciphered,
      cipher_key: key
    });
  }

  handleInput(field) {
    return e => {
      this.setState({
        [field]: e.target.value }
      );
    };
  }

  handleQuillChange(input, delta, source, editor) {
    this.setState(
      { body: input }
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
      <TagFormContainer />
    );
  }

  render() {
    if (this.props.loading) { return <Loader />; }
    
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
 