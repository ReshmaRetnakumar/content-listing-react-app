import React from 'react';
import styled from 'styled-components';

// Styled component for the sticky header
const HeaderContainer = styled.div`
  position: sticky;      /* Enables sticky positioning */
  top: 0;                /* Sticks the header to the top */
  z-index: 1000;         /* Keeps the header on top of other elements */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 15px;
  background-image: url('https://test.create.diagnal.com/images/nav_bar.png'); /* Add your background image */
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Optional: Add shadow for better visibility */
`;

// Styled component for the header title
const Title = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  color: #ffffff;
  margin: 0;
`;

// Styled component for the icons
const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// Header component implementation
const Header = () => {
  return (
    <HeaderContainer>
      <Icon src="https://test.create.diagnal.com/images/Back.png" alt="Back" />
      <Title>Romantic Comedy</Title>
      <Icon src="https://test.create.diagnal.com/images/search.png" alt="Search" />
    </HeaderContainer>
  );
};

export default Header;
