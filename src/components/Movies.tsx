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
