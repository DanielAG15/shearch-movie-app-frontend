import { useFetch } from "../hooks/usefetch";

// Tests that fetchMovie function fetches data successfully and returns an object with isLoading, error, and data properties.
it("test_fetch_movie_success", async () => {
  const mockData = [
    {
      Title: "Movie 1",
      Year: "2021",
      imdbID: "123",
      Type: "movie",
      Poster: "poster1",
    },
  ];
  const mockResponse = { Response: "True", Search: mockData };
  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(mockResponse),
  } as any);

  const result = useFetch("search=movie");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for useEffect to finish

  expect(result.isLoading).toBe(false);
  expect(result.error).toBe(false);
  expect(result.data).toEqual(mockData);
});

// Tests that fetchMovie function returns null for data when params is an empty string.
it("test_fetch_movie_empty_params", async () => {
  const result = useFetch("");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for useEffect to finish

  expect(result.isLoading).toBe(false);
  expect(result.error).toBe(false);
  expect(result.data).toBeNull();
});
