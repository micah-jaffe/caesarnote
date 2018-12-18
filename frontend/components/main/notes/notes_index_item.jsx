import React from 'react';

const NotesIndexItem = ({ note, selected }) => {
  return (
    <div className={"notes-index-item" + (selected ? " selected-note" : "")}>
      <h4>{note.title}</h4>
      <p>{prettyPreview(note.body)}</p>
      <span>{note.last_updated}</span>
    </div>
  );
};

const prettyPreview = (htmlString) => {
  htmlString = htmlString.replace(/<(?:.|\n)*?>/gm, ' ')
  htmlString = htmlString.replace(/\s\s+/g, ' ');
  return htmlString.trim();
}

export default NotesIndexItem;