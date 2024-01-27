import React from 'react'
import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home  from './components/home/Home'
import MovieDetail from './components/movieDetail/MovieDetail'
import PageNotFound from './components/pageNotFound/PageNotFound'
import Layout from './Layout'
import { Provider } from 'react-redux'
import store from './features/store'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='movie/:imdbID' element={<MovieDetail/>} />
        <Route path='*' element={<PageNotFound/>}/>
    </Route>
  )
)
function App() {
  return (
    <>
       <Provider store={store}>
       <RouterProvider router={router}/>    
       </Provider>
    </>
  )
}

export default App