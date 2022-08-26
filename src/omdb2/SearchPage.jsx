import GetFilm from "./GetFilm";

const SearchPage = ({films}) => {
    const {Query} = films;

    if (Query === undefined) {
        return (
            <div id="results">
                <h1>Search 100% Legal Movies</h1>
            </div>
        )
    };
    return (
        <div id="results">
            {Query.map(({Title, Year, Poster, imdbID}) => 
                <GetFilm key={imdbID} Title={Title} Year={Year} Poster={Poster} id={imdbID}/>
            )}
        </div>
    )
};

export default SearchPage;