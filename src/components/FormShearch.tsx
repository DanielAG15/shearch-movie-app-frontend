import { useState, useContext } from "react";
import { DataContext } from "../context/DataContex";

/* This code defines a functional component called `FormSearch` that renders a form with an input field
and a submit button. It uses the `useState` hook to manage the state of the `title` input field and
the `useContext` hook to access the `setQuery` and `error` values from the `DataContext` context.
When the form is submitted, it calls the `handleSubmit` function that prevents the default form
submission behavior, sets the `query` value to the current `title` value, and displays an error
message if the `error` value is true. The component is exported as the default export. */
const FormSearch: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const { setQuery, error } = useContext(DataContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(title);
  };

  return (
    <div className="form-search">
      <h2>Catalogo de peliculas</h2>
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
