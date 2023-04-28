import { useEffect, useState } from "react";

const API_ENDPOINT = `http://localhost:3001/api/movies?apikey=84229814`;

export interface MovieData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface FetchDataType {
  isLoading: boolean;
  error: boolean;
  data: MovieData[] | null;
}

/**
 * This is a TypeScript function that uses the useState and useEffect hooks to fetch movie data from an
 * API and return it as an object with isLoading, error, and data properties.
 * @param {string} params - a string parameter that is used to construct the API endpoint URL for
 * fetching data. It is passed as a dependency to the useEffect hook, so that the fetchMovie function
 * is called whenever the value of params changes.
 * @returns The `useFetch` function returns an object with three properties: `isLoading`, `error`, and
 * `data`. These properties are of type `boolean`, `boolean`, and `MovieData[] | null`, respectively.
 */
export const useFetch = (params: string): FetchDataType => {
  const [isLoading, setIsLoading] = useState<boolean>(true as boolean);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<MovieData[] | null>(null);

  const fetchMovie = (url: string): void => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.Response === "True") {
          setData(responseJson.Search || responseJson);
          setError(false);
        } else {
          setError(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}${params}`);
  }, [params]);

  return { isLoading, error, data };
};
