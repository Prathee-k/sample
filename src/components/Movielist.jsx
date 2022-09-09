import { Link } from "react-router-dom";
const Movielist = ({movies, title }) => {
    return (  
        <div>
             <h1>{title}</h1>
             {
               
                movies.map((movie)=>{
        return(
            <Link to={`/moviedetails${movie.id}`}>

                <div key={movie.id} className="movie">
                <h1> Movie Name: {movie.movieName} </h1>
                <h2> Hero : {movie.hero}</h2>
                <h2> Heroine : {movie.heroine}</h2>
                <h2> Genere : {movie.genere}</h2>
              
                </div>
            </Link>
        )

    })
   }
        </div>
    );
}
 
export default Movielist

 //* <button onClick={()=>{deleteMovie(movie.id)}}> Delete </button> */