import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginMain from "./pages/Login/LoginMain";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <LoginMain /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
