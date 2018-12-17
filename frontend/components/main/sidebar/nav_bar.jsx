import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNavLink: null,
      notebookDropdown: false,
      shortcutsDropdown: false
    };

    this.selectNavLink = this.selectNavLink.bind(this);
    this.renderNotebooks = this.renderNotebooks.bind(this);
    this.handleNotebookClick = this.handleNotebookClick.bind(this);
    this.handleShortcutsClick = this.handleShortcutsClick.bind(this);
  }

  handleShortcutsClick() {
    this.setState({
      shortcutsDropdown: !this.state.shortcutsDropdown
    });
  }

  handleNotebookClick() {
    this.setState({ 
      selectedNavLink: 3,
      notebookDropdown: !this.state.notebookDropdown
    });
  }

  selectNavLink(navLink) {
    return () => this.setState({ selectedNavLink: navLink });
  }

  renderNotebooks() {
    if (this.state.notebookDropdown) {
      return (
        this.props.notebooks.map(notebook => (
          <li key={notebook.id} className="align-middle nav-link nav-dropdown">
            <Link className="align-middle" to={`/main/notebooks/${notebook.id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="#ccc" width="14" height="14" viewBox="0 0 14 14"><path id="31a" d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
              <span>{notebook.name}</span>
            </Link>
          </li>
        ))
      );
    }
  }

  // TODO: render differently for notes vs notebooks. notebooks should render same as before. notes will need to be a link to /main and set global selection.noteId

  renderShortcuts() {
    if (this.state.shortcutsDropdown) {
      return (
        this.props.shortcuts.map(shortcut => {
          if (shortcut.shortcutType === 'notebook') {
            return this.renderNotebookShortcut(shortcut);
          } else if (shortcut.shortcutType === 'note') {
            return this.renderNoteShortcut(shortcut)
          }

          // <li key={shortcut.id} className="align-middle nav-link nav-dropdown">
          //   <Link className="align-middle" to={`/main/notebooks/${shortcut.id}`}>
          //     <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="#ccc" width="14" height="14" viewBox="0 0 14 14"><path id="31a" d="M9 13H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7l-3 3zm0-1.457L10.543 10H9v1.543zM10 2H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4V9h3V3a1 1 0 0 0-1-1zM5 6h4v1H5V6zm0-2h4v1H5V4zm2 5H5V8h2v1z"></path></svg>
          //     <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="#ccc" width="14" height="14" viewBox="0 0 14 14"><path id="31a" d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
          //     <span>{shortcut.id}</span>
          //   </Link>
          // </li>
        })
      );
    }
  }

  renderNotebookShortcut(notebook) {
    return (
      <li key={notebook.id} className="align-middle nav-link nav-dropdown">
        <Link className="align-middle" to={`/main/notebooks/${notebook.id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="#ccc" width="14" height="14" viewBox="0 0 14 14"><path id="31a" d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
          <span>{notebook.name}</span>
        </Link>
      </li>
    );
  }

  renderNoteShortcut(note) {
    return (
      <li key={note.id} className="align-middle nav-link nav-dropdown">
        <Link className="align-middle" to={`/main/notebooks/${note.id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="#ccc" width="14" height="14" viewBox="0 0 14 14"><path id="31a" d="M9 13H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7l-3 3zm0-1.457L10.543 10H9v1.543zM10 2H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4V9h3V3a1 1 0 0 0-1-1zM5 6h4v1H5V6zm0-2h4v1H5V4zm2 5H5V8h2v1z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="svg" fill="#ccc" width="14" height="14" viewBox="0 0 14 14"><path id="31a" d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"></path></svg>
          <span>{note.id}</span>
        </Link>
      </li>
    );
  }


  render() {
    return (
      <div className="nav-bar">
        <ul>

          <li onClick={this.handleShortcutsClick} className="align-middle nav-link">
            <div className={"align-middle" + (this.state.shortcutsDropdown ? " rotate" : "unrotate")}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="nav shortcuts-arrow"><path d="M2 0l4 4-4 4z"></path></svg></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=""><path id="34a" d="M12 4c.177 0 .323.092.449.21.126.116.241.267.358.441.23.35.458.799.68 1.26.222.461.438.934.633 1.312.196.38.396.67.466.723.07.052.397.163.803.24.405.077.9.147 1.389.225.488.078.966.165 1.355.286.193.06.364.128.508.218.145.09.277.207.333.388.056.181.015.359-.052.521a2.37 2.37 0 0 1-.29.492c-.247.337-.586.703-.936 1.066-.351.364-.714.724-.998 1.035-.284.31-.487.604-.513.685-.025.081-.026.441.03.868.054.426.146.94.226 1.45.079.51.148 1.013.157 1.438.005.213-.004.405-.042.578-.037.173-.105.34-.25.45-.144.11-.312.124-.48.108a2.142 2.142 0 0 1-.534-.135c-.382-.14-.819-.365-1.257-.602-.439-.237-.879-.485-1.25-.672-.371-.187-.698-.3-.786-.3-.089 0-.416.113-.787.3-.37.187-.81.436-1.25.672-.438.237-.874.461-1.256.602-.191.07-.368.12-.534.135-.168.016-.336.003-.48-.107-.146-.11-.213-.278-.25-.452a2.505 2.505 0 0 1-.042-.578c.01-.425.078-.929.157-1.439.08-.51.171-1.023.227-1.45.055-.426.054-.786.029-.867-.025-.08-.228-.374-.512-.685-.284-.311-.647-.671-.998-1.034-.352-.364-.69-.73-.935-1.067a2.404 2.404 0 0 1-.29-.493c-.067-.162-.108-.34-.05-.52.055-.182.186-.299.33-.389.145-.09.316-.158.51-.219.388-.121.867-.208 1.355-.286.488-.078.983-.148 1.388-.224.406-.077.734-.189.804-.241.069-.053.27-.343.466-.722.194-.379.411-.851.633-1.313.222-.46.45-.91.68-1.259.115-.174.23-.325.357-.441.126-.116.272-.208.45-.208z"></path></svg>
            <span>Shortcuts</span>
          </li>

          {this.renderShortcuts()}

          <li onClick={this.selectNavLink(2)} className={"align-middle nav-link no-arrow" + (this.state.selectedNavLink === 2 ? " selected-nav" : "")}>
            <Link className="align-middle" to="/main"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="nav"><path id="14a" d="M16 16h2v-1h-2a.997.997 0 0 0-1 1v3h1v-3zM8 4h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 4a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1h-3z"></path></svg>
              <span>All Notes</span>
            </Link>
          </li>

          <li onClick={this.handleNotebookClick} className={"align-middle nav-link" + (this.state.selectedNavLink === 3 ? " selected-nav" : "")}>
            <Link className="align-middle" to="/main/notebooks">
              <div className={"align-middle" + (this.state.notebookDropdown ? " rotate" : "unrotate")}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M2 0l4 4-4 4z"></path></svg></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9 4h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9V4zM6 4h2v15H6V4zm5.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4z"></path></svg>
              <span>Notebooks</span>
            </Link>
          </li>

          {this.renderNotebooks()}

          <li onClick={this.props.openPaywall} className="align-middle nav-link no-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="nav"><path id="12a" d="M15.489 19h-11l.017-3.244s-.128-1.462 1.457-1.685c1.588-.223 2.837-.495 2.212-1.56-.578-.988-2.539-5.253.907-6.365a2.976 2.976 0 0 1 1.842 0c3.446 1.112 1.486 5.377.908 6.364-.625 1.066.624 1.338 2.21 1.561 1.587.223 1.459 1.685 1.459 1.685L15.489 19zm4.481 0h-3v-4c-.158-1.025-.862-1.525-2.11-1.502-.427-.704-1.895-3.985.638-4.779a2.27 2.27 0 0 1 1.355 0c2.532.794 1.093 3.835.667 4.54-.459.76.8.484 1.625 1.112C19.97 15 19.97 16 19.97 16v3z"></path></svg>
            <span>Shared with Me</span>
          </li>

          <li onClick={this.props.openPaywall} className="align-middle nav-link no-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="nav"><path id="10a" d="M10.265 9.005a2 2 0 1 0 3.47 0H18v9.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-9.5h4.265zM9.5 16a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0-2a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm4.235-4.995H18l-4.982-4.606a1.5 1.5 0 0 0-2.036 0L6 9.005h4.265a2 2 0 0 1 3.47 0z"></path></svg>
            <span>Tags</span>
          </li>

          <li onClick={this.props.openPaywall} className="align-middle nav-link no-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="nav"><path id="8a" d="M5 7.496a.5.5 0 0 1 .5-.5L8.996 7V5.25c0-.69.305-1.25 1.008-1.25H14c.703 0 1 .556 1 1.247v1.75H18.5a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5zm5.25-2.001a.25.25 0 0 0-.25.25v1.002c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V5.745a.25.25 0 0 0-.25-.25h-3.5zm6.205 12.567c0 .69-.57.935-1.273.935H8.818c-.703 0-1.273-.56-1.273-1.25l-.548-8.748H17l-.546 9.063z"></path></svg>
            <span> Trash</span>
          </li>

          <li onClick={this.props.openPaywall} className="align-middle nav-link no-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="upgrade"><path d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm-1.223 10.602c0 .18.126.313.3.374.175.06.37.005.485-.136l3.043-3.671c.084-.103.115-.238.084-.366a.428.428 0 0 0-.242-.29l-1.313-.715V8.396c0-.181-.136-.312-.31-.372a.442.442 0 0 0-.485.136l-3.043 3.671a.42.42 0 0 0 .158.656l1.323.713v2.402z"></path></svg>
            <span>Upgrade</span>
          </li>

        </ul>
      </div >
    );
  }

};

export default NavBar;