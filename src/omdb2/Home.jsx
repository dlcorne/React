import axios from 'axios';
import Searcher from "./Searcher";
import SearchPage from "./SearchPage";
import { useState } from "react";

const Home = () => {
    const [searchBar, setSearchBar] = useState('');
    const [results, setResults] = useState([]);
    const apiKey = '9568d182';
    const URL = 'https://www.omdbapi.com/?apikey=';

    const updater = (e) => {
        setSearchBar(e.target.value);
    };

    const sender = () => {
        axios
            .get(URL + apiKey + '&t=' + searchBar)
            .then(response => {
                setResults(response.data);
            })
            .catch(err => console.log(err))
    };

    const submitter = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Searcher updater={updater} submitter={submitter} sender={sender} />
            <hr></hr>
            <SearchPage films={results}/>
        </>
)
};
export default Home;