import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar-container">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search all notes..."
        />
        <svg width="32" height="32" viewBox="0 0 32 32"><path fill="#666" d="M23.394 23.394a.95.95 0 0 1-1.343 0l-3.52-3.519a6.352 6.352 0 0 1-3.792 1.255 6.391 6.391 0 1 1 6.391-6.39c0 1.421-.47 2.73-1.255 3.792l3.52 3.519a.95.95 0 0 1 0 1.343zM9.965 14.713a4.748 4.748 0 1 0 9.496 0 4.748 4.748 0 0 0-9.496 0z"></path></svg>
      </div >
    )
  }

};

export default SearchBar;