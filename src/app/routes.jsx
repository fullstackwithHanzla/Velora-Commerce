import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Error = lazy(() => import("./pages/Error"));
const MailSuccess = lazy(() => import("./pages/MailSuccess"));
const PrivacyPolicy = lazy(() => import("./layouts/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./layouts/TermsAndConditions"));
const SignUpLayout = lazy(() => import("./layouts/SignUpLayout"));
const SignInLayout = lazy(()=> import("./layouts/SignInLayout"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "mail-success", element: <MailSuccess /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-&-conditions", element: <TermsAndConditions /> },
      { path: "sign-up", element: <SignUpLayout /> },
      { path: "error", element: <Error /> },
      {path : "sign-in", element : <SignInLayout/>},
      { path: "*", element: <Error /> }
    ]
  }
]);

export default router;