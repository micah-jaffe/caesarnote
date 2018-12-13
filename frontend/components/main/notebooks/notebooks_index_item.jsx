import React from 'react';
import { Link } from 'react-router-dom';

const NotebooksIndexItem = ({ notebook }) => {
  return (
    <div className="notebooks-index-item align-middle">
      <div><Link to={`/main/notebooks/${notebook.id}`}>{notebook.name}</Link></div>
      <div>-</div>
      <div>put update</div>
      <div>Only you</div>
      <div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="qa-NOTEBOOK_ACTIONS" className="svg"><path d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="#000" fillRule="evenodd"></path></svg></div>
      
    </div>
  );
}
export default NotebooksIndexItem;