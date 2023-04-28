import React from "react";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import MovieInfo from "./components/MovieInfo";

/**
 * This is a React function that sets up routes for a main page and a movie information page using the
 * BrowserRouter and Routes components.
 * @returns The `App` component is being returned, which contains a `BrowserRouter` component with two
 * nested `Route` components. The first `Route` component has a path of `'/'` and renders the
 * `MainPage` component when the path matches. The second `Route` component has a path of
 * `'/movies/:id'` and renders the `MovieInfo` component when the path matches.
 */
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
