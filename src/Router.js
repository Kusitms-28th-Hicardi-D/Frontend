import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultView from "./components/container/DefaultView";
import LandingMain from "./pages/Landing/LandingMain";
import LoginMain from "./pages/Login/LoginMain";
import React from "react";
import NewsMain from "./pages/PressCenter/News/NewsMain";
import ReportMain from "./pages/PressCenter/Report/ReportMain";

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
  {
    path: "/pressCenter/news",
    element: (
      <>
        <DefaultView>
          <NewsMain />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/pressCenter/report",
    element: (
      <>
        <DefaultView>
          <ReportMain />
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
