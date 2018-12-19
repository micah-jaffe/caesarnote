import React from 'react';
import TagsIndexItem from './tags_index_item';

class TagsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTags();
  }

  sortTags() {
    this.props.tags.sort((a, b) => a.name < b.name ? 1 : -1);
  }

  renderTagsIndexHeader() {
    return (
      <div className="tags-header">
        <h1>Tags</h1>
      </div>
    );
  }

  renderTagsIndexItems() {
    this.sortTags();

    return (
      <div className="tags-index-items-wrapper">
        {this.props.tags.map(tag => <TagsIndexItem key={tag.id} tag={tag} />)}
      </div>
    );
  }

  render() {
    return (
      <div className="tags-index-wrapper">
        {this.renderTagsIndexHeader()}
        {this.renderTagsIndexItems()}
      </div>
    );
  }
};

export default TagsIndex;
