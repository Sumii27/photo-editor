import React from "react";
import "./App.css";
import WebCamCapture from "./webCamera/WebCamCapture";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImagePriview from "./preview/ImagePriview";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={WebCamCapture} />
          <Route path="/priview" Component={ImagePriview} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
