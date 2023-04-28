import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./context/DataContex";
/* This code is rendering the React application to the DOM. It creates a root element using
`ReactDOM.createRoot()` and then renders the `App` component wrapped in `React.StrictMode` and
`DataProvider` using `root.render()`. The `DataProvider` is a context provider that provides data to
all the components in the app. The `React.StrictMode` is a development mode tool that highlights
potential problems in the code. */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
