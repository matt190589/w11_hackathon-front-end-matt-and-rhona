import React from "react";

function MovieDisplay({ movieData }) {
  return (
    <div>
      <h2><a href={'https://www.imdb.com/title/' + movieData[0].imdbID}> {movieData[0].Title}</a></h2>
      <img src={movieData[0].Poster} alt={movieData[0].Title} />
      <p>{movieData[0].Plot}</p>
      <h4>{movieData[0].imdbRating} ⭐️</h4>
    </div>
  );
}

export default MovieDisplay;
