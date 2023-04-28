import { createContext, useState } from "react";
import { useFetch, MovieData } from "../hooks/usefetch";

/* This code is defining an interface `IDataContext` that describes the shape of the data that will be
provided by the `DataContext` context. It includes properties for `setQuery`, `isLoading`, `error`,
and `data`. */
interface IDataContext {
  setQuery?: any;
  isLoading: boolean;
  error: boolean;
  data: MovieData[] | null; // Modificar el tipo de dato aquí
}

export const DataContext = createContext<IDataContext>({
  isLoading: true,
  error: false,
  data: null,
});

/**
 * This is a TypeScript React function that provides data to its children components through a context,
 * using a query string and a custom hook for fetching data.
 * @param {any}  - - `DataProvider`: a functional component that takes in a single prop `children`
 * @returns The `DataProvider` component is being returned, which takes in a `children` prop and
 * returns a `DataContext.Provider` component with a value prop that contains `setQuery`, `isLoading`,
 * `error`, and `data` as properties. The `useFetch` hook is used to fetch data based on the `query`
 * state, which is initially set to "mario".
 */
export const DataProvider = ({ children }: any) => {
  const [query, setQuery] = useState<string | undefined>("mario");
  const { isLoading, error, data } = useFetch(`&s=${query}`);

  return (
    <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
      {children}
    </DataContext.Provider>
  );
};
