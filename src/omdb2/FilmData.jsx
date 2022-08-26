import axios from 'axios';
import FilmInQuestion from './FilmInQuestion';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const FilmData = () => {
    const [targetFilm, setTargetFilm] = useState('');
    const {id} = useParams();
    const URL = 'https://www.omdbapi.com/?apikey=';
    const apiKey = '9568d182';
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(URL + apiKey + "&i=" + id)
            .then(response => {
                console.log(response);
                setTargetFilm(response.data)
                console.log(targetFilm);
            })
            .then(() => {
                for (let element in targetFilm) {
                    console.log(`${element}: ${targetFilm[element]}`);
            }})
            .catch(err => console.log(err));
    });

    return (
        <>
            <button onClick={() => navigate(-1)}>Return</button>
            <hr></hr>
            <div id="result">
                <img src={targetFilm.Poster} alt={`Official poster of ${targetFilm.Title}`}></img>
                <h1><u>{targetFilm.Title}</u></h1>
                <FilmInQuestion film={targetFilm}/>
            </div>
        </>
    );
};

export default FilmData;