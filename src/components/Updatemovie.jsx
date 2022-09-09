import {  useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Updatemovie = ({previousMovie}) => {
        const [movieName, setMovieName] = useState(previousMovie.movieName);
        const [hero, setHero] = useState(previousMovie.hero);
        const [heroine, setHeroine] = useState(previousMovie.heroine);
        const [genere, setGenere] = useState(previousMovie.genere);
        let history = useHistory();
    let handleSubmit = (e)=>{
            e.preventDefault();
            let updatedMovie = {movieName , hero , heroine , genere};
            fetch(`http://localhost:4000/moviesList/${previousMovie.id}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedMovie),
                }).then(() => {
                history.push("/");
            });
    }
    return (
        <div className="add-movie">
        <h1>Update Movie </h1>
       
            <hr />       
            <form onSubmit={handleSubmit}>
                    <div>
                    <label>Movie Name : </label>
                    <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>
                    <label>Hero : </label>
                    <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}}/>
                    <label>Heroine : : </label>
                    <input type="text" value={heroine} onChange={(e)=>{setHeroine(e.target.value)}}/>
                    <label>Genere : </label>
                    <input type="text" value={genere} onChange={(e)=>{setGenere(e.target.value)}} />
                    </div>
                    <input type="submit" value="Update Movie" />
            </form>
        </div>
    );
}
export default Updatemovie;