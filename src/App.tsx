import React from "react";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
