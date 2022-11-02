import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { News} from "./pages/News";
import { Header } from "./components/Header/Header";
// import { Header } from "antd/lib/layout/layout";
//import  StoryItem from "./components/StoryItem";
// import {Comments} from "./components/Comments";

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/news/:id">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
