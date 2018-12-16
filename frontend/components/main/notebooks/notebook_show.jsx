import React from 'react';
import NotesIndexItem from '../notes/notes_index_item';
import NoteShowContainer from '../notes/note_show_container';
import { node } from 'prop-types';

class NotebookShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNote: { title: '', body: '' }
    };
  }

  componentDidMount() {
    this.props.fetchNotebook(this.props.match.params.notebookId);
    this.props.fetchNotes();
    this.sortNotes();
  }

  sortNotes() {
    this.props.notes.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1);
  }

  renderNotesIndexItems() {
    this.sortNotes();

    return this.props.notes.map(note => (
      <div key={note.id} onClick={() => this.props.selectNote(note.id)}>
        <NotesIndexItem 
          note={note} 
          selected={note.id === this.props.selectedNoteId}
        />
      </div>
    ));
  }

  renderNoteShow() {
    return (
      <NoteShowContainer />
    );
  }

  renderNotebookHeader() {
    const numNotes = Object.keys(this.props.notes).length;

    return (
      <header className="notebook-header">
        <h1>{this.props.notebook.name}</h1>
        <div className="notebook-info-header align-middle">
          <div className="notes-count">
            {numNotes} Notes
              </div>

          <div className="notebook-header-icons align-middle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#737373" id="47a" d="M8 16.793l-2.146-2.147-.708.708L8.5 18.707l3.354-3.353-.708-.708L9 16.793V5H8v11.793zM12 5h9v1h-9V5zm0 3h7v1h-7V8zm0 3h5v1h-5v-1z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#737373" id="48a" d="M16.8 20H7.2c-.663 0-1.2-.544-1.2-1.216V9.597c0-.359.134-.665.397-.905l4.8-4.378a1.183 1.183 0 0 1 1.606 0l4.8 4.378c.263.24.397.546.397.905v9.187c0 .672-.537 1.216-1.2 1.216zM17 9.518L12 5 7 9.518V19h10V9.518zM9.5 16h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm0-2h5a.5.5 0 1 1 0 1h-5a.5.5 0 1 1 0-1zm2.5-2.322a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25zm0-2.275a.65.65 0 1 0 0 1.3.65.65 0 0 0 0-1.3z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" className="svg"><path fill="#7a8083" d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>
          </div>

        </div>
      </header>
    )
  }

  render() {
    return (
      <div className="notes-wrapper">
        <div className="notebook-container-wrapper">

          <section className="notebook-container">
            <div className="notebook-header-wrapper">
              {this.renderNotebookHeader()}
            </div>
            

            <div className="notes-index-wrapper">
              {this.renderNotesIndexItems()}
            </div>
          </section>

        </div>

        <div className="note-show-wrapper">
          {this.renderNoteShow()}
        </div>
      
      </div>
    );
  }
};

export default NotebookShow;


