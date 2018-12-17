import React from 'react';
import ReactQuill from 'react-quill';

const Editor = ({ value, onChange }) => {
  return (
    <ReactQuill
      className="quill-editor"
      value={value}
      onChange={onChange}
      placeholder="Start writing, drag file, or encrypt your note"
    />
  );
};

export default Editor;