import React from 'react';

const TagsIndexItem = ({ tag }) => {
  return (
    <div className="tags-index-item">
      <span>{tag.name}</span>
    </div>
  );
}

export default TagsIndexItem;