import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchInput
      type="text"
      placeholder="Search movies..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
