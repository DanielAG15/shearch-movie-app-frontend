import React from "react";
import { DataProvider } from "../context/DataContex";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

// Tests that the DataProvider component renders with children.
it("test_data_provider_renders_with_children", () => {
  const wrapper = mount(
    <DataProvider>
      <div>Child Component</div>
    </DataProvider>
  );
  expect(wrapper.contains(<div>Child Component</div>)).toBe(true);
});

// Tests that the useFetch hook returns data.
it("test_use_fetch_hook_returns_data", async () => {
  const wrapper = mount(
    <DataProvider>
      <div>Child Component</div>
    </DataProvider>
  );
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
  expect(wrapper.find("DataContext").prop("data")).not.toBeNull();
});
