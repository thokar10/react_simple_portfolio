import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./app.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
