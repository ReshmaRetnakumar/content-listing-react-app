import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171717;
  overflow-y: auto;
`;

const ContentListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid searchTerm={searchTerm} />
    </Container>
  );
};

export default ContentListingPage;
