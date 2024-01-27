import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";
import { fetchAsyncMovies } from "../../features/movie/movieSlice";
import { fetchAsyncShows } from "../../features/movie/movieSlice";
import "./Header.scss";
import { useDispatch } from "react-redux";

const Header = () => {
  const [term,setTerm] = useState("")
  const dispatch = useDispatch()
  const submitHandler = (e)=>{
       e.preventDefault()
       if(term==="") return alert("please enter search term..")
      dispatch(fetchAsyncMovies(term))
      dispatch(fetchAsyncShows(term))
      setTerm("")
  }
  return (
    <div className="header">
        <div className="logo"><Link to="/">Movie App</Link></div>
        <div className="search-bar">
          <form action="" onSubmit={submitHandler}>
            <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} placeholder="search your favourite..."/>
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;