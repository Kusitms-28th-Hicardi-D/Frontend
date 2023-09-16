import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultView from "./components/container/DefaultView";
import LandingMain from "./pages/Landing/LandingMain";
import LoginMain from "./pages/Login/LoginMain";
import React from "react";

import SignUpPage from "./pages/SignUp/SignUpPage";
import HolterPage from "./pages/Introduce/Holter/HolterPage";
import DemoPage from "./pages/Demo/DemoPage";
import PurchasePage from "./pages/Purchase/PurchasePage";

import NewsMain from "./pages/PressCenter/News/NewsMain";
import ReportMain from "./pages/PressCenter/Report/ReportMain";
import NewsDetail from "./pages/PressCenter/News/NewsDetail";
import NewsSub from "./pages/PressCenter/News/NewsSub";
import ProductionMain from "./pages/Production/ProductionMain";
import BoardMain from "./pages/Board/BoardMain";
import QnaDetail from "./pages/Board/QnaDetail";
import NoticeDetail from "./pages/Board/NoticeDetail";
import PurchaseDetailPage from "./pages/Purchase/PurchaseDetailPage";
import PatientPage from "./pages/Introduce/Patient/PatientPage";

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
  {
    path: "/patientIntroduce",
    element: (
      <>
        <DefaultView>
          <PatientPage />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/purchase",
    element: (
      <>
        <DefaultView>
          <PurchasePage />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/purchase/detail/:id",
    element: (
      <>
        <DefaultView>
          <PurchaseDetailPage />
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
  {
    path: "/pressCenter/news/:newsId",
    element: (
      <>
        <DefaultView>
          <NewsDetail />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/pressCenter/news/sub",
    element: (
      <>
        <DefaultView>
          <NewsSub />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/production",
    element: (
      <>
        <DefaultView>
          <ProductionMain />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/board",
    element: (
      <>
        <DefaultView>
          <BoardMain />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/board/qna/:qnaId",
    element: (
      <>
        <DefaultView>
          <QnaDetail />
        </DefaultView>
      </>
    ),
  },
  {
    path: "/board/notice/:noticeId",
    element: (
      <>
        <DefaultView>
          <NoticeDetail />
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
