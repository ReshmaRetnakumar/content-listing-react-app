import React, { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';
import { fetchData } from '../services/api';
import styled from 'styled-components';

// Container for the grid layout with hidden scrollbar
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  margin-block: 20px;
  row-gap: 40px;
  column-gap: 15px;
  justify-content: center;

  /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Internet Explorer, Edge */
  -ms-overflow-style: none;
`;

// Main Grid component that manages loading and displaying the movies
const Grid = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef();

  // Function to load movies from the API
  const loadMovies = async () => {
    const newMovies = await fetchData(page);
    setMovies((prev) => [...prev, ...newMovies]);
  };

  // UseEffect to load movies when the component mounts or page changes
  useEffect(() => {
    loadMovies();
  }, [page]);

  // Intersection Observer for lazy loading
  const lastMovieElementRef = (node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  // Filter movies based on search term and limit to 9 movies
  const filteredMovies = movies
    .filter((movie) => movie.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 9); // Limits the number of displayed movies to 9

  return (
    <GridContainer>
      {filteredMovies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          ref={index === filteredMovies.length - 1 ? lastMovieElementRef : null}
        />
      ))}
    </GridContainer>
  );
};

export default Grid;
