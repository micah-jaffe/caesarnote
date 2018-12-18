import React from 'react';

const TagShow = ({ tag }) => {
  return (
    <div className="tag-show">
      <p>{tag.name}</p>
    </div>
  );
};

export default TagShow;