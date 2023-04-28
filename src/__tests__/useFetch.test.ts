import { renderHook } from "@testing-library/react-hooks";
import { useFetch, FetchDataType } from "../hooks/usefetch";

describe("useFetch", () => {
  const mockData = [
    {
      Title: "The Shawshank Redemption",
      Year: "1994",
      imdbID: "tt0111161",
      Type: "movie",
      Poster: "https://via.placeholder.com/300x450",
    },
    {
      Title: "The Godfather",
      Year: "1972",
      imdbID: "tt0068646",
      Type: "movie",
      Poster: "https://via.placeholder.com/300x450",
    },
  ];

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({
        Response: "True",
        Search: mockData,
      }),
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return the initial state", () => {
    const { result } = renderHook(() => useFetch("&s=batman"));

    const expectedState: FetchDataType = {
      isLoading: true,
      error: false,
      data: null,
    };

    expect(result.current).toEqual(expectedState);
  });

  it("should return the correct data after fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("&s=shawshank")
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.data).toBe(null);

    await waitForNextUpdate();

    const expectedState: FetchDataType = {
      isLoading: false,
      error: false,
      data: mockData,
    };

    expect(result.current).toEqual(expectedState);
  });

  it("should set error to true when fetch returns an error", async () => {
    jest.spyOn(global, "fetch").mockRejectedValueOnce(new Error("Fetch Error"));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("&s=invalid")
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.data).toBe(null);

    await waitForNextUpdate();

    const expectedState: FetchDataType = {
      isLoading: false,
      error: true,
      data: null,
    };

    expect(result.current).toEqual(expectedState);
  });
});
