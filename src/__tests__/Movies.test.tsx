import React from "react";
import { render, screen } from "@testing-library/react";
import { DataContext } from "../context/DataContex";
import Movies from "../components/Movies";

describe("Movies component", () => {
  test("renders loading text while data is being fetched", () => {
    const mockSetQuery = jest.fn();
    const mockContext = {
      setQuery: mockSetQuery,
      error: false,
      isLoading: false,
      data: null,
    };
    render(<Movies />, {
      wrapper: ({ children }) => (
        <DataContext.Provider value={mockContext}>
          {children}
        </DataContext.Provider>
      ),
    });
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders list of movies when data is fetched", () => {
    const mockData = [
      {
        imdbID: "1",
        Title: "Movie 1",
        Type: "Movie",
        Year: "2022",
        Poster: "https://www.example.com/poster1.jpg",
      },
      {
        imdbID: "2",
        Title: "Movie 2",
        Type: "Movie",
        Year: "2023",
        Poster: "https://www.example.com/poster2.jpg",
      },
    ];
    const mockSetQuery = jest.fn();
    const mockContext = {
      isLoading: false,
      data: mockData,
      setQuery: mockSetQuery,
      error: false,
    };
    render(<Movies />, {
      wrapper: ({ children }) => (
        <DataContext.Provider value={mockContext}>
          {children}
        </DataContext.Provider>
      ),
    });
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });
});
