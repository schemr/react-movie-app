import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movies = [
  {
    title : "Metrix",
    poster : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    title : "Full Metal Jacket",
    poster : "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
  },
  {
    title : "Oldboy",
    poster : "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
  },
  {
    title : "Star Wars",
    poster : "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie key={index} title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
