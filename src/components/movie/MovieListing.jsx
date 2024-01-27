import React from 'react'
import "./MovieListing.scss"
import { useSelector } from 'react-redux'
import {getAllMovies,getAllShows} from '../../features/movie/movieSlice'
import MovieCard from '../movieCard/MovieCard'
import Slider from 'react-slick'
function MovieListing() {
  let renderMovies,
  renderShows = "";
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
console.log(movies);
renderMovies =
  movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );
  renderShows =
  shows.Response === "True" ? (
    shows.Search.map((shows, index) =>
      <MovieCard key={index} data={shows} />
    )
  ) : (
    <div className="movies-error">
      <h3>{shows.Error}</h3>
    </div>
  );
  console.log("this is render movies ",renderMovies);
  return (
    <>
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {/* <Slider {...settings}> */}
          {renderMovies}
          {/* </Slider> */}
          </div>
      </div>
      <div className="show-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
      </div>
      </>
  )
}

export default MovieListing