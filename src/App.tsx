import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { News } from "./pages/News";
//import  StoryItem from "./components/StoryItem";
// import {Comments} from "./components/Comments";

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
        </Switch>
      </Router> */}

      <Router>
        <Switch>
          <Route path="/news/:id">
            <News />
          </Route>
          {/* <Route path="/comments">
            <Comments />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
