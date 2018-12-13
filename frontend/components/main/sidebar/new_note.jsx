import React from 'react';

class NewNote extends React.Component {
  render() {
    return (
      <div className="new-note-container align-middle">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className="add-note-icon" data-event-off="click"><g fill="none" ><path d="M0 0h30v30H0z"></path><circle cx="15" cy="15" r="14" fill="#00A82D"></circle><rect width="14" height="2" x="8" y="14" fill="#FFF" rx="1"></rect><rect width="2" height="14" x="14" y="8" fill="#FFF" rx="1"></rect></g></svg>
        <span>New Note</span>        
      </div >
    )
  }

};

export default NewNote;