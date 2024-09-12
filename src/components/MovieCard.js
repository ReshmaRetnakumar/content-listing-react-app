import React from 'react';
import styled from 'styled-components';

// Container for each card with updated width
const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 133px; /* Set the card width to 126px */
`;

// Styled Poster component to maintain aspect ratio of 2:3
const Poster = styled.div`
  width: 100%;
  padding-top: 150%; /* This sets the height to 150% of the width, creating a 2:3 aspect ratio */
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  background-color: #2b2b2b;
`;

// Title below each thumbnail aligned to the left
const Title = styled.div`
  font-family: 'Titillium Web', sans-serif;
  color: #ffffff;
  font-size: 14px;
  text-align: left; /* Align text to the left */
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Main MovieCard component that uses the styled components
const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Poster src={`https://test.create.diagnal.com/images/${movie['poster-image']}`} alt={movie.name} />
      <Title>{movie.name}</Title>
    </Card>
  );
};

export default MovieCard;
