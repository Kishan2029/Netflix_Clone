import React,{useState, useEffect} from 'react';
import axios from '../axios';
function Row({title , fetchUrl}){
    const [movies, setMovies] = useState([]);
    //A code snippet which runs based on spesific condition
    useEffect(() => {
     //if [], run once when row loads and dont again
        async function fetchData(){
            // const request="https://api.themoviedb.org/3/discover/movie?api_key=b8147d9a2b320232dcbd7689528ce05a&with_genres=28";
            // const request = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=b8147d9a2b320232dcbd7689528ce05a&with_genres=35");
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);
    return(
        <div>
            <h2>{title}</h2>

        </div>
    )
}
export default Row;