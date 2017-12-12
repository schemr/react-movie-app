import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} title={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, title}) {
    return (
        <img className="Movie__Poster" src={poster} alt={title} />
    )
}

function MovieGenres({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;