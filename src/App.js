import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Diaries = () => (
  <div>
    <h1>Hello</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact="true" path="/" component={HomePage}></Route>
        <Route path="/diaries" component={Diaries}></Route>
      </Switch>
    </div>
  );
}

export default App;
