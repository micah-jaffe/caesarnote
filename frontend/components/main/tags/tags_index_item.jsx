import React from 'react';

const TagsIndexItem = ({ tag }) => {
  return (
    <span className="tags-index-item align-middle">
      <span>{tag.name}</span>
      <i className="fa fa-angle-down"></i>
    </span>
  );
}

export default TagsIndexItem;