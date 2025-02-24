import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon
import '../css/Searchbar.css';

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  const searchChange = (e) => {
    console.log("anshu ne kya type kiya", e.target);
    setSearchTerm(e.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => searchChange(e)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} style={{ color: 'white' }}>
        <img width={"30px"} src='/images/search.png' />
      </button>
    </div>
  );
};

export default Searchbar;
