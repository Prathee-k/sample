import { useParams } from "react-router-dom";
import useFetch from "../Usefetch/Usefetch";
import Movielist from "./Movielist";

const Searchpage = () => {


   let {searchVal}= useParams();
   let {data:movies, pending, error}=useFetch("http://localhost:4000/moviesList");
    return ( 
        <div>
            <h1>search page{searchVal}</h1>
            {movies &&
            //  <Movielist 
            // movies={movies} title="search Result"/>}
<Movielist movies={movies.filter((movie)=>
    {return movie.movieName.toLowercase().includes(searchVal.toLowercase())})} title="Search Result"/>}
        </div>
     );
}
 
export default Searchpage;