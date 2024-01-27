import React, { useEffect } from 'react'
import MovieListing from '../movie/MovieListing'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovies,fetchAsyncShows } from '../../features/movie/movieSlice';
function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry"
  const showsText = "Friends"
  const data = useSelector(state=>state.movie)
  console.log(data);
  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showsText))
  },[])
  return (
    <>
      <div className='banner-img'></div>
      <MovieListing/>
    </>
  )
}

export default Home