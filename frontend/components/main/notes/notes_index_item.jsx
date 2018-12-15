import React from 'react';

const NotesIndexItem = ({ note }) => {
  return (
    <div className="notes-index-item">
      <h4>{note.title}</h4>
      <p>{note.body}</p>
      <span>{note.last_updated}</span>
    </div>
  );
};

export default NotesIndexItem;