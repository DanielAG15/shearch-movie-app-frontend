import DefaultImage from "../media/noimage.webp";
import { Link } from "react-router-dom";

/**
 * The ItemMovie function is a React component that displays information about a movie, including its
 * title, type, year, and poster image.
 * @param  - The above code defines a React functional component called `ItemMovie` that takes in an
 * object of props with the following properties:
 */
interface ItemMovieProps {
  id: string;
  title: string;
  type: string;
  year: string;
  poster: string;
}

const ItemMovie: React.FC<ItemMovieProps> = ({
  id,
  title,
  type,
  year,
  poster,
}) => {
  let image = poster === "N/A" ? DefaultImage : poster;
  return (
    <Link
      to={`/movies/${id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <article>
        <div
          className="item-movie"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="info">
            <h4>{title}</h4>
            <p className="row-info">
              <span>{type}</span>
              <span>{year}</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ItemMovie;
