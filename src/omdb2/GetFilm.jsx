import { Link } from 'react-router-dom';

const GetFilm = (film) => {
    const {Title, Year, Poster, id} = film;

    return (
        <div>
            <h1>{Title}</h1>
            <h4>{Year}</h4>
            <img src={Poster} alt={`Movie poster for ${Title}`}></img>
            <Link to={`/details/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    )
};

export default GetFilm;