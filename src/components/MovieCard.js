import React from 'react';
import styled from 'styled-components';

// Container for each card with updated width
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;

  @media (max-width: 768px) {
    width: calc((100% - 50px) / 3);
  }
`;

// Styled Poster component to maintain aspect ratio of 2:3
const Poster = styled.div`
  width: 100%;
  padding-top: 150%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

// Title below each thumbnail aligned to the left
const Title = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: left;
  margin-top: 7px;
  overflow: hidden;
  font-weight: 100;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.5;
  letter-spacing: 0.5px;
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
