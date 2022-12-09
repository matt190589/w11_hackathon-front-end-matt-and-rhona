import React, { useState, useEffect } from "react";
import christmasMovieIDs from "../../data";
import Profile from "../Profile";
import MovieDisplay from "../MovieDisplay";
import ListItem from "../../ListItem";
import { useAuth0 } from "@auth0/auth0-react";
import StarCounter from "../StarCounter";
import useCounter from "../../hooks/useCounter";

const API_KEY = "c8ce6acf";
//const API_KEY_BACKUP = "3e600c52";

function Main() {
  const [movieData, setMovieData] = useState([]);
  const [movieID, setMovieID] = useState(null);
  const [watchList, setWatchList] = useState([]);
  const [starCount, increment, decrement] = useCounter(0)
  const { user } = useAuth0()

  useEffect(() => {
    let url = "http://www.omdbapi.com/?i=" + movieID + "&apikey=" + API_KEY;
    async function callURL() {
      const response = await fetch(url);
      const data = await response.json();
      setMovieData([data]);
    }
    callURL();
  }, [movieID]);

  async function postUserRatings(ratings) {
    let fetchBody = {
      film_id: movieData[0].imdbID,
      title: movieData[0].Title,
      rating: starCount,
      profile_id: user.sub,
    }
    const post = await fetch("http://localhost:3001/ratings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fetchBody),
    });
    console.log('rating submitted', post)
    for (let i=0; i<starCount; i++) {
      decrement()
    }
  }
console.log(starCount)
  function generatemovieID() {
    let randMovieIDNum = Math.floor(Math.random() * christmasMovieIDs.length);
    setMovieID(christmasMovieIDs[randMovieIDNum]);
  }

  function handleWatchList(movie) {
    const newRec = {
      title: movie[0].Title,
      url: "https://www.imdb.com/title/" + movieData[0].imdbID,
    };
    setWatchList([...watchList, newRec]);
  }

  return (
    <div className="main">
      <Profile />
      <button onClick={generatemovieID}>Get my festive film!</button>
      {movieData.length > 0 && <MovieDisplay movieData={movieData} />}
      {/* {movieData.length > 0 ? (
        <MovieDisplay movieData={movieData} />
      ) : (
        <p>Click to load movies</p>
      )} */}
      <div className="container">
        <button onClick={() => handleWatchList(movieData)}>
          Add to my watch list
        </button>
      </div>
      <p>Already seen it? Submit your star rating!</p>
      <StarCounter starCount={starCount} increment={increment} decrement={decrement}/>
      <button
        onClick={() => {
          postUserRatings();
        }}
      >
        {" "}
        Submit Rating
      </button>
      <h4>My watch list:</h4>
      <ul>
        {watchList.map((movie) => (
          <ListItem movie={movie} />
        ))}
      </ul>
    </div>
  );
}
export default Main;
