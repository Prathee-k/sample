
import { useState } from "react";
import {useHistory} from "react-router-dom"

const Addmovie = () => {
    let [movieName,setMovieName]=useState("");
   let [hero,setHero]=useState("");
   let [heroine,setHeroine]=useState("");
   let [genere,setGenere]=useState("");

   let history=useHistory();
let handleSubmit =(e)=>{                                                                    
    e.preventDefault();

    let movie={movieName,hero,heroine,genere};

    fetch("http://localhost:4000/moviesList",
    {method:"POST", headers:{"Content-Type":"application/json"},
     body: JSON.stringify(movie)})
  
     .then(()=>{history.push("/")})
}
  

   
    return (   
   <div className="add-movie">
       <h1>Add Movie</h1>
       
           <h1>{movieName}</h1>
           <h1>{hero}</h1>
           <h1>{heroine}</h1>
           <h1>{genere}</h1> 

        <hr/>;
        <form onSubmit={handleSubmit}>
       <div>
       

        <label>Movie Name:</label> 
        <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value);}}/>
        
        <label>Hero:</label>
         <input type="text" value={hero} 
        onChange={(e)=>{setHero(e.target.value);}}/>

        
        <label>Heroine :</label> <input type="text" value={heroine}
         onChange={(e)=>{setHeroine(e.target.value);}}/>
        
        <label>Genere :</label>      <input type="text" value={genere} 
         onChange={(e)=>{setGenere(e.target.value);}}/>
        </div>
       
        <input type="submit" value="Update Movie"/>
       </form>
    </div>
     );
}
export default Addmovie;




