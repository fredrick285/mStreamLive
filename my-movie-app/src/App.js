import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviePage from "./Movies";
import Contact from "./Contact";
import About from "./About";

function App(){
  return(
    <div className="App">
     <NavBar />
   
    <div className="content">
    <Switch>
      <Route exact path="/Movies">
        <MoviePage />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
    </Switch>
    </div>
  </div>

  )
}
export default App;;