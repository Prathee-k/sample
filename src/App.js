import Navbar from "./components/Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Addmovie from "./components/Addmovie";
import Movielist from "./components/Movielist";
import Moviedetails from "./components/Moviedetails";
import Updatemovie from "./components/Updatemovie";
import Searchpage from "./components/Searchpage";
import Notfoundpage from "./components/Notfoundpage";


function App() {
    return ( 
        <div>
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path="/">
                        <Home/>
                        </Route>

                        <Route path="/Add">
                        <Addmovie/>
                        </Route>

                        
                        <Route path="/Movielist">
                        <Movielist/>
                        </Route>

                        <Route path="/Moviedetails:id">
                        <Moviedetails/>
                        </Route>

                        <Route path="/Updatemovie">
                            <Updatemovie/>
                        </Route>

                    <Route path="/search:searchVal">
                     <Searchpage/>
                    </Route>

                    <Route path="*">
                        <Notfoundpage/>

                    </Route>

                </Switch>
                    

                </div>
            </Router>

        </div>
      
     );
}

export default App ;