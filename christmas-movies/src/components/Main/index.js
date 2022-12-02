import React, { useState, useEffect } from "react";
import christmasMovieIDs from "../../data";
import LoginButton from "../LoginButton";
import LogoutButton from "../../LogoutButton";
import Profile from "../../Profile";

const API_KEY = "c8ce6acf";
const API_KEY_BACKUP = "3e600c52";

function Main() {
  const [movieData, setMovieData] = useState(null);
  const [movieID, setMovieID] = useState(null);

  useEffect(() => {
    let url = "http://www.omdbapi.com/?i=" + movieID + "&apikey=" + API_KEY;
    async function callURL() {
      const response = await fetch(url);
      const data = await response.json();
      setMovieData(data);
      console.log(movieData);
    }
    callURL();
  }, [movieID]);

  function generatemovieID() {
    let randMovieIDNum = Math.floor(Math.random() * christmasMovieIDs.length);
    console.log(randMovieIDNum);
    setMovieID(christmasMovieIDs[randMovieIDNum]);
    console.log(movieID);
  }

  return (
    <div>
        <Profile/>
        <button onClick={generatemovieID}>Click for Movie ID</button>
    </div>
  );
}
export default Main;
