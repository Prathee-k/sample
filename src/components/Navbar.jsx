import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

const [searchVal,setSearchVal]=useState("");
    return (
   <nav>
    <h1>Hungama</h1>
    <div className="search">
    <input type="search" value={searchVal}
    onChange={(e)=>{setSearchVal(e.target.value)}}></input>
    </div>

    
    <div>
    <Link to={`/search${searchVal}`}><button>search</button></Link>
    <Link to="/">Home</Link>

    <Link to="/add">Add new movie</Link>
    
    </div>
</nav>

        
      );
}
 
export default Navbar;


