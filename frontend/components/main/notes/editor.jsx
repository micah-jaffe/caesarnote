import React from 'react';
import ReactQuill from 'react-quill';

const toolbar = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  ["blockquote", "code-block"],
  [{ align: [] }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  ["clean"],
  ["image", "video"] 
];

const modules = {
  toolbar
};

const Editor = ({ value, onChange }) => {
  return (
    <ReactQuill
      modules={modules}
      className="quill-editor"
      value={value}
      onChange={onChange}
      placeholder="Start writing, drag file, or encrypt your note"
    />
  );
};

export default Editor;