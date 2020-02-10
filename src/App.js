import React from "react";
import "./App.css";
import HomePage from "./homepage.component";
import { Button } from "react-bootstrap";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <HomePage></HomePage>
      <Button variant="info">Info</Button>
      <button className="btn btn-danger">Danger</button>
    </div>
  );
}

export default App;
