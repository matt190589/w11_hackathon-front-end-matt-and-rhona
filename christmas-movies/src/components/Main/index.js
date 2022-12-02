import React, { useState, useEffect } from 'React'

const API_KEY = 'c8ce6acf'
const API_KEY_BACKUP = '3e600c52'


// useEffect(() => {
//     async function callURL() {
//       const response = await fetch(
//         `http://localhost:3050/api/posts/?week=${count}`
//       );
//       const data = await response.json();
//       setFetchData([...data.payload]);
//     }
//     callURL();
//   }, [count]);

function Main() {
    const [movieData, setMovieData] = useState(null)
    const [movieID, setMovieID] = useState(null)
    
    useEffect(() => {
        let url = 'http://www.omdbapi.com/?i=' + movieID + '&apikey=' + API_KEY
        async function callURL() {
            const response = await fetch(url);
            const data = await response.json();
            setMovieData(data)
        }
        callURL()
    }, [movieID])

    return <div>

    </div>
}