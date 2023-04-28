import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/usefetch";
import DefaultImage from "../media/noimage.webp";

/* This code defines a functional component called `MovieInfo` that displays information about a single
movie. It uses the `useParams` hook from the `react-router-dom` library to get the `id` parameter
from the URL. It also uses a custom `useFetch` hook to fetch data about the movie from an API. */
const MovieInfo = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { isLoading, error, data } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  const { Poster, Title, Plot, Country, Director, Year, Released, Runtime } =
    data;

  let image = Poster === "N/A" ? DefaultImage : Poster;

  return (
    <>
      {!isLoading ? (
        <div className="single-movie">
          <img src={image} alt={Title} />
          <div className="single-info">
            <h2>{Title}</h2>
            <p>{Plot}</p>
            <p>
              <strong>Country:</strong>
              {Country}
            </p>
            <p>
              <strong>Director:</strong>
              {Director}
            </p>
            <p>
              <strong>Year:</strong>
              {Year}
            </p>
            <p>
              <strong>Released:</strong>
              {Released}
            </p>
            <p>
              <strong>Runtime:</strong>
              {Runtime}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default MovieInfo;
