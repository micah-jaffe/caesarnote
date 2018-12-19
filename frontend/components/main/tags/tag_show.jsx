import React from 'react';
import Dropdown from '../modal/dropdown';

// const TagShow = ({ tag }) => {
//   return (
//     <div className="tag-show align-middle" tabIndex="0">
//       <p>{tag.name}</p>
//       <i className="fa fa-angle-down"></i>
//     </div>
//   );
// };

class TagShow extends React.Component {
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
      "Remove": () => console.log('hello'),
      "Delete from all tags": () => this.props.deleteTag(this.props.tag.id)
    };

    return (
      <div className="tag-show align-middle" tabIndex="0">
        <Dropdown visible={this.state.dropdown} classname="tag-show-dropdown" items={dropdownItems} />
        <p>{this.props.tag.name}</p>
        <span 
          className="dropdown-icon"
          tabIndex="0"
          onFocus={this.showDropdown}
          onBlur={this.hideDropdown}
        >
         <i className="fa fa-angle-down"></i> 
        </span>
      </div>
    );
  }
};

export default TagShow;