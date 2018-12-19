import React from 'react';
import TagsIndexItem from './tags_index_item';

class TagsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTags();
  }

  sortTags() {
    this.props.tags.sort((a, b) => a.name > b.name ? 1 : -1);
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

    const partitionedTags = [];

    for (let i = 33; i <= 126; i++) {
      const filteredTags = this.props.tags.filter(tag => tag.name.charAt(0) === String.fromCharCode(i));

      if (filteredTags.length > 0) {
        const block = (
          <div key={`block-${i}`} className="tags-index-block">
            <h2>{String.fromCharCode(i)}</h2>
            <div className="tags-block-items">
              {filteredTags.map(tag => <TagsIndexItem key={tag.id} tag={tag} />)}
            </div>
          </div>
        );

        partitionedTags.push(block)

      }
    };

    return partitionedTags;
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
