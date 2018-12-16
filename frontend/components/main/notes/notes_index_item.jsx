import React from 'react';

const NotesIndexItem = ({ note }) => {
  const unformattedBody = $(note.body).text();

  return (
    <div className="notes-index-item">
      <h4>{note.title}</h4>
      <p>{unformattedBody}</p>
      <span>{note.last_updated}</span>
    </div>
  );
};

export default NotesIndexItem;