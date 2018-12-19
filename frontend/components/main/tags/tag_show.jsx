import React from 'react';
import Dropdown from '../modal/dropdown';
import { selectNoteTag } from '../../../reducers/selectors';

class TagShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };

    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.highlightTag = this.highlightTag.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.clearTags = this.clearTags.bind(this);
  }

  showDropdown() {
    this.setState({ dropdown: true })
  }

  hideDropdown() {
    this.setState({ dropdown: false })
  }

  highlightTag() {
    this.clearTags();
    document.getElementById(`tag-${this.props.tag.id}`).classList.add('selected-tag');
  }

  clearTags() {
    const otherTags = document.getElementsByClassName('tag-show');
    for (let i = 0; i < otherTags.length; i++) {
      otherTags[i].classList.remove('selected-tag');
    }
  }

  handleDropdownClick() {
    this.showDropdown();
    this.highlightTag();
  }

  render() {
    const noteTag = selectNoteTag(this.props.selectedNoteId, this.props.tag.id, this.props.entities);
    // debugger
    const dropdownItems = {
      "Remove": () => this.props.deleteNoteTag(noteTag.id),
      "Delete from all tags": () => this.props.deleteTag(this.props.tag.id)
    };

    return (
      <div 
        id={`tag-${this.props.tag.id}`} 
        className="tag-show align-middle" 
        tabIndex="0"
        onFocus={this.highlightTag}
        onBlur={this.clearTags}
      >
        <Dropdown visible={this.state.dropdown} classname="tag-show-dropdown" items={dropdownItems} />

        <p>{this.props.tag.name}</p>
        <span 
          className="dropdown-icon"
          tabIndex="0"
          onFocus={this.handleDropdownClick}
          onBlur={this.hideDropdown}
        >
         <i className="fa fa-angle-down"></i> 
        </span>
      </div>
    );
  }
};

export default TagShow;