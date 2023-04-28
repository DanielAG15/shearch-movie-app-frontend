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

export const useFetch = (params: string): FetchDataType => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
