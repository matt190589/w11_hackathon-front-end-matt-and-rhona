import React from "react";

function MovieDisplay({ movieData }) {
  return (
    <div>
      <h2>{movieData[0].Title}</h2>
      <img src={movieData[0].Poster} alt={movieData.Title} />
      <p>Summary: {movieData[0].Plot}</p>
      <h4>Imdb Rating: {movieData[0].imdbRating}</h4>
    </div>
  );
}

export default MovieDisplay;
