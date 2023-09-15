import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultView from "./components/container/DefaultView";
import LandingMain from "./pages/Landing/LandingMain";
import LoginMain from "./pages/Login/LoginMain";
import React from "react";
import SignUpPage from "./pages/SignUp/SignUpPage";
import HolterPage from "./pages/Introduce/Holter/HolterPage";
import DemoPage from "./pages/Demo/DemoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultView>
        <LandingMain />
      </DefaultView>
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
  {
    path: "/signup",
    element: (
      <>
        <DefaultView>
          <SignUpPage />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/holterIntroduce",
    element: (
      <>
        <DefaultView>
          <HolterPage />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/holterIntroduce/demo",
    element: (
      <>
        <DefaultView>
          <DemoPage />
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
