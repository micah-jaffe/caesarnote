import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ searchQuery: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.filterSearchQuery(this.state);
    this.setState({ searchQuery: '' });
    this.props.history.push("/main");
  }

  render() {
    return (
      <form className="search-bar-container" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          className="search-input"
          placeholder="Search all notes..."
          value={this.state.searchQuery}
          onChange={this.handleInput}
        />
        <svg onClick={this.handleSubmit} width="32" height="32" viewBox="0 0 32 32"><path fill="#666" d="M23.394 23.394a.95.95 0 0 1-1.343 0l-3.52-3.519a6.352 6.352 0 0 1-3.792 1.255 6.391 6.391 0 1 1 6.391-6.39c0 1.421-.47 2.73-1.255 3.792l3.52 3.519a.95.95 0 0 1 0 1.343zM9.965 14.713a4.748 4.748 0 1 0 9.496 0 4.748 4.748 0 0 0-9.496 0z"></path></svg>
      </form >
    );
  }

};

export default SearchBar;