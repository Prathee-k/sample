import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../Usefetch/Usefetch";
import Updatemovie from "./Updatemovie";
import { useState } from "react";


const Moviedetails = () => {

    let {id} = useParams();
    let history= useHistory();
let [update,setUpdate]=useState(false);
  
    let {data:movie , pending, error}=useFetch(`http://localhost:4000/moviesList/${id}`);

    let handleDelete = (id)=>{
        fetch(`http://localhost:4000/moviesList/${id}`, {method: "DELETE"})
        .then(
            ()=>{
                history.push("/");
            }
        );
    };



    return (  
        <div>
            {error && <h1> {error} </h1>}
            {pending && <div className="load"></div>}

            {movie && <div className="movie-detail">
                <h1>Movie Name: {movie.movieName}</h1>
                <h1>Hero : {movie.hero}</h1>
                <h1>{movie.heroine}</h1>
                <h1>{movie.genere}</h1>
                <button onClick={()=>{handleDelete(movie.id)}}>Delete</button>


                 <button onClick={()=>{setUpdate(true);}}>Update</button>

                </div>

            }

            {update && <Updatemovie previousMovie={movie}/>}
        </div>
    );
}
 
export default Moviedetails;

