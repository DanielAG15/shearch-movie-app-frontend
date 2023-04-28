import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataContext } from "../context/DataContex";
import FormSearch from "../components/FormShearch";

describe("FormSearch component", () => {
  const mockSetQuery = jest.fn();
  const mockContext = {
    setQuery: mockSetQuery,
    error: false,
    isLoading: false,
    data: null,
  };

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <DataContext.Provider value={mockContext}>
        <FormSearch />
      </DataContext.Provider>
    );
  });

  test("renders component with title input and search button", () => {
    expect(screen.getByPlaceholderText("title movie")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "search" })).toBeInTheDocument();
  });

  test("calls setQuery with the entered title when form is submitted", () => {
    const titleInput = screen.getByPlaceholderText("title movie");
    const searchButton = screen.getByRole("button", { name: "search" });

    fireEvent.change(titleInput, { target: { value: "Avengers" } });
    fireEvent.click(searchButton);

    expect(mockSetQuery).toHaveBeenCalledWith("Avengers");
  });

  test("displays error message if error is true", () => {
    mockContext.error = true;
    render(
      <DataContext.Provider value={mockContext}>
        <FormSearch />
      </DataContext.Provider>
    );
    expect(screen.getByText("La pelicula no existe")).toBeInTheDocument();
  });
});
