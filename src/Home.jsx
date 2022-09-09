import { useEffect } from "react";
import { useState } from "react";
import Movielist from "./components/Movielist";
import useFetch from "./Usefetch/Usefetch";

const Home = () => {
 
    let {data : movies , pending, error}=useFetch("http://localhost:4000/moviesList");
    return(
     <div className="home-content">
        {error && <h1>{error}</h1>}

         {pending && <div className="loader" ></div>}

         {movies && <Movielist movies={movies} title="All movies"/>}
   </div>
    )

      
}
 
export default Home ;






////
//   <Movielist moviesList={moviesList.filter((movie)=>{return movie.Genere==="Drama"})} title="Drama Movies" />
//   <Movielist moviesList={moviesList.filter((movie)=>{return movie.Genere==="Action"})} title="Action Movies" />
//   <Movielist moviesList={moviesList.filter((movie)=>{return movie.Genere.includes("Comedy")})} title="Comedy Movies" />



    // let deleteMovie=(recievedId)=>
    // {
    //     let newMovies= moviesList.filter((movie)=>{return movie.id!=recievedId})
    //     setmovies(newMovies)
    // }

    //deleteMovie={ deleteMovie}