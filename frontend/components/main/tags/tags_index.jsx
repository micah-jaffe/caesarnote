import React from 'react'; 
import TagsIndexItem from './tags_index_item';
import Loader from '../modal/loader';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchNotes();
  }

  sortTags() {
    this.props.tags.sort((a, b) => a.name > b.name ? 1 : -1);
  }
  
  handleClick(e) {
    this.props.history.push("/main");
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
    const { deleteTag, notes, noteTags, selectTagNotes } = this.props;

    const partitionedTags = [];

    for (let i = 33; i <= 126; i++) {
      const filteredTags = this.props.tags.filter(tag => tag.name.charAt(0) === String.fromCharCode(i));

      if (filteredTags.length > 0) {
        const block = (
          <div key={`block-${i}`} className="tags-index-block">
            <h2>{String.fromCharCode(i)}</h2>
            <div className="tags-block-items" onClick={this.handleClick}>
              {filteredTags.map(tag => (
                <TagsIndexItem 
                  key={tag.id} 
                  tag={tag} 
                  deleteTag={deleteTag} 
                  numNotes={selectTagNotes(tag.id, notes, noteTags).length} />
                ))}
            </div>
          </div>
        );

        partitionedTags.push(block)
      }
    };

    return (
      <div className="tags-index-items-wrapper">
        {partitionedTags}
      </div>
    );
  }

  render() {
    if (this.props.loading) { return <Loader background={"tags"}/>; }

    return (
      <div className="tags-index-wrapper">
        {this.renderTagsIndexHeader()}
        {this.renderTagsIndexItems()}
      </div>
    );
  }
};

export default TagsIndex;
