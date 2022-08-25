import PropTypes from 'prop-types';

const Film = ({film}) => {

    const {Title, Year, Actors, Genre, Response} = film;

    if (Response === 'True') {
        return (
            <>
                <p>
                {`Title: ${Title}`}
                </p>
                <p>
                {`Year: ${Year}`}
                </p>
                <p>
                {`Actors: ${Actors}`}
                </p>
                <p>
                {`Genre: ${Genre}`}
                </p>
            </>
        );
    } else {
        return <h3> No matches found. </h3> 
    };
};

export default Film;