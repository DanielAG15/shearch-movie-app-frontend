import { useContext } from "react";
import { DataContext } from "../context/DataContex";
import ItemMovie from "./ItemMovie";

/* This code defines an interface `Movie` which specifies the shape of an object that has properties
`imdbID`, `Title`, `Type`, `Year`, and `Poster`, all of which are strings. */
interface Movie {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
}

/**
 * This is a functional component that renders a list of movies using data from a context and a custom
 * ItemMovie component.
 * @returns The `Movies` component is being returned, which renders a `div` element with a class of
 * "movies-content". Inside the `div`, there is a ternary operator that checks if `isLoading` is false
 * and if `data` exists. If both conditions are true, it maps through the `data` array and renders an
 * `ItemMovie` component for each item in the array. The
 */
const Movies = () => {
  const { isLoading, data } = useContext(DataContext);
  return (
    <div className="movies-content">
      {!isLoading
        ? data?.map((item: Movie) => (
            <ItemMovie
              key={item.imdbID}
              id={item.imdbID}
              title={item.Title}
              type={item.Type}
              year={item.Year}
              poster={item.Poster}
            />
          ))
        : ""}
    </div>
  );
};

export default Movies;
