const FilmInQuestion = (film) => {
    const details = film.film;
    const fields = ['Title', 'Year', 'Actors', 'Runtime', 'Director', 'Country'];

    if (film === undefined) {
        return null;
    }
    else {
        return (
            <ul>
                {fields.map(key => <li>{`${key}: ${details[key]}`}</li>)}
            </ul>
        )
    }

};

export default FilmInQuestion;