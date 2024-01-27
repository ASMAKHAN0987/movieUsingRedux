import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/movieApiKey'
const initialState={
    movies:{},
    shows:{},
    selectMovieOrShow:{}
}
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{
        removeSelectedMoviesShows:(state,action)=>{
            state.selectMovieOrShow = {}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAsyncMovies.pending,(state,action)=>{
            console.log("pending");
        })
        .addCase(fetchAsyncMovies.fulfilled,(state,{payload})=>{
           
            state.movies=payload

        })
        .addCase(fetchAsyncMovies.rejected,()=>{
             console.log("rejected");
        })
        .addCase(fetchAsyncShows.fulfilled,(state,{payload})=>{
            state.shows = payload
        })
        .addCase(fetchAsyncMovieOrShowDetail.fulfilled,(state,{payload})=>{
            state.selectMovieOrShow = payload
        })
    }
})
export const fetchAsyncMovies = createAsyncThunk("movie/fetchAsyncMovies",async(term)=>{
    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}`)
    // const responseData = await response.text
    // console.log(responseData.data);
    return response.data
})
export const fetchAsyncShows = createAsyncThunk("movie/fetchAsyncShows",async(term)=>{
    const showText = 'friends'
    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`)
    // const responseData = await response.text
    // console.log(responseData.data);
    return response.data
})
export const fetchAsyncMovieOrShowDetail = createAsyncThunk("movie/fetchAsyncMovieOrShowDetail",async(id)=>{
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
    // const responseData = await response.text
    // console.log(responseData.data);
    return response.data
})


export const {removeSelectedMoviesShows} = movieSlice.actions
export default  movieSlice.reducer 
export const getAllMovies = (state)=> state.movie.movies
export const getAllShows = (state)=> state.movie.shows
export const getSelectedMoviesShows=(state)=>state.movie.selectMovieOrShow
