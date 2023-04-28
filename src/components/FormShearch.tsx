import { useState, useContext } from "react";
import { DataContext } from "../context/DataContex";

const FormSearch: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const { setQuery, error } = useContext(DataContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(title);
  };

  return (
    <div className="form-search">
      <h2>Buscador de peliculas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title movie"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="search" />
      </form>
      {error && <p className="error">La pelicula no existe</p>}
    </div>
  );
};

export default FormSearch;
