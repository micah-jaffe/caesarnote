import React from 'react';

const TagShow = ({ tag }) => {
  return (
    <div className="tag-show align-middle" tabIndex="0">
      <p>{tag.name}</p>
      <i className="fa fa-angle-down"></i>
    </div>
  );
};

export default TagShow;