import React from 'react';
import Dropdown from '../modal/dropdown';

// const TagsIndexItem = ({ tag }) => {
//   return (
//     <span className="tags-index-item align-middle">
//       <span>{tag.name}</span>
//       <i className="fa fa-angle-down"></i>
//     </span>
//   );
// }

class TagsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  showDropdown() {
    this.setState({ dropdown: true })
  }

  hideDropdown() {
    this.setState({ dropdown: false })
  }

  render() {
    const dropdownItems = {
      "Delete tag...": () => this.props.deleteTag(this.props.tag.id)
    };

    return (
      <div>
        <div className="tags-index-item">
          <span>{this.props.tag.name}</span>
          {/* <span>{this.props.tag.numNotes}</span> */}
          <span
            className="tags-index-dropdown-icon"
            tabIndex="0"
            onFocus={this.showDropdown}
            onBlur={this.hideDropdown}
          >
            <i className="fa fa-angle-down"></i>
          </span>
        </div>

        <Dropdown visible={this.state.dropdown} classname="tags-index-item-dropdown" items={dropdownItems} />
      </div>
    );
  }
};


export default TagsIndexItem;