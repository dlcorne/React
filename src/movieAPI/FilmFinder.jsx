import axios from 'axios';
import { useEffect, useState } from 'react';
import Film from './Film';

const GetFilm = () => {
    const [data, setData] = useState('');
    const [query, setQuery] = useState('');
    const apiKey = "9568d182"
    
    useEffect(() => {
            axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + query)
            .then(response => {
                setData(response.data);
                console.log("Request sent");
    })
            .catch(err => console.log(err))
    }, [query]);

    return (
        <>
            <form>
            <h3>Search legally-sourced movies...</h3>
            <label htmlFor="targetFilm">Search 100% Legal Films</label>
            <input type="text" id="targetFilm" value={query} onChange={e => setQuery(e.target.value)}/>
            <br></br>
            </form>
            <hr></hr>
            <Film film={data}/>
        </>
    )
};

export default GetFilm;