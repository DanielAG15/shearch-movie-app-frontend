import { createContext, useState } from "react";
import { useFetch, MovieData } from "../hooks/usefetch";

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

export const DataProvider = ({ children }: any) => {
  const [query, setQuery] = useState<string | undefined>("mario");
  const { isLoading, error, data } = useFetch(`&s=${query}`);

  return (
    <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
      {children}
    </DataContext.Provider>
  );
};
