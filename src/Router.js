import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultView from "./components/container/DefaultView";
import LandingMain from "./pages/Landing/LandingMain";
import LoginMain from "./pages/Login/LoginMain";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <DefaultView>
          <LandingMain />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <DefaultView>
          <LoginMain />
        </DefaultView>
      </>
    ),
  },
]);

const Router = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default Router;
