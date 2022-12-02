import React, { useState, useEffect } from "react";
import christmasMovieIDs from "../../data";
import Profile from "../Profile";
import MovieDisplay from "../MovieDisplay";
import ListItem from "../../ListItem";

const API_KEY = "c8ce6acf";
const API_KEY_BACKUP = "3e600c52";

function Main() {
  const [movieData, setMovieData] = useState([]);
  const [movieID, setMovieID] = useState(null);
  const [watchList, setWatchList] = useState([])

  useEffect(() => {
    let url = "http://www.omdbapi.com/?i=" + movieID + "&apikey=" + API_KEY;
    async function callURL() {
      const response = await fetch(url);
      const data = await response.json();
      setMovieData([data]);
      console.log(movieData);
    }
    callURL();
  }, [movieID]);

  function generatemovieID() {
    let randMovieIDNum = Math.floor(Math.random() * christmasMovieIDs.length);
    console.log(randMovieIDNum);
    setMovieID(christmasMovieIDs[randMovieIDNum]);
  }
  console.log(movieID);

  function handleWatchList(movie) {
    const newRec = {title: movie[0].Title, url: 'https://www.imdb.com/title/' + movieData[0].imdbID}
    console.log(newRec)
    setWatchList([...watchList, newRec])
  }

  return (
    <div className='main'>
      <Profile />
      <button onClick={generatemovieID}>Get my festive film!</button>
      {movieData.length > 0 && <MovieDisplay movieData={movieData} />}
      {/* {movieData.length > 0 ? (
        <MovieDisplay movieData={movieData} />
      ) : (
        <p>Click to load movies</p>
      )} */}
      <div className="container">
        <button onClick={() => handleWatchList(movieData)}>Add to my watch list</button>
      </div>
      <h4>My watch list:</h4>
      <ul>{watchList.map((movie) => <ListItem movie={movie}/>)}</ul>
    </div>
  );
}
export default Main;
