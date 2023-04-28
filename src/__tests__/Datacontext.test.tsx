import React from "react";
import { render, screen } from "@testing-library/react";
import { DataProvider, DataContext } from "../context/DataContex";

describe("DataContext", () => {
  it("should render the DataProvider component with initial values", () => {
    render(
      <DataContext.Provider
        value={{ isLoading: true, error: false, data: null }}
      >
        <div>Test</div>
      </DataContext.Provider>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should set the data context value correctly", async () => {
    const mockData = [{ title: "Mario Bros" }, { title: "Mario Kart" }];

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({
        Search: mockData,
      }),
    } as any);

    let result: any;

    function TestComponent() {
      result = React.useContext(DataContext);
      return null;
    }

    render(
      <DataProvider>
        <TestComponent />
      </DataProvider>
    );

    expect(result.isLoading).toBe(true);
    expect(result.error).toBe(false);
    expect(result.data).toBe(null);

    await Promise.resolve();

    expect(result.isLoading).toBe(false);
    expect(result.error).toBe(false);
    expect(result.data).toEqual(mockData);
  });
});
