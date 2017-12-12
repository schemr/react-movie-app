import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : compoentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentWillMount() {
    this._getMovies();
  }

  componentDidMount() {
    
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
                key={movie.id} 
                title={movie.title_english} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
                synopsis={movie.synopsis} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rationg')
    .then(response => response.json())
    .then(data => data.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
